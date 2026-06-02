-- ============================================
-- الباب تيك - تهيئة قاعدة البيانات
-- Supabase Migration Script
-- ============================================

-- 1. إنشاء جدول أدوار المستخدمين
CREATE TABLE IF NOT EXISTS user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE user_roles IS 'جدول أدوار المستخدمين - يحدد صلاحيات كل مستخدم';
COMMENT ON COLUMN user_roles.role IS 'دور المستخدم: user أو admin';

-- 2. إنشاء جدول المنتجات
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  price DECIMAL(10, 2),
  image_url TEXT,
  features TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE products IS 'جدول المنتجات المتاحة';
COMMENT ON COLUMN products.is_active IS 'هل المنتج نشط ومعروض للعملاء';

-- 3. إنشاء جدول طلبات عرض السعر
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'completed', 'rejected')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE quote_requests IS 'طلبات عرض السعر من العملاء';
COMMENT ON COLUMN quote_requests.status IS 'حالة الطلب: pending, reviewed, completed, rejected';

-- 4. إنشاء فهارس لتحسين الأداء
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);

-- 5. تفعيل Row Level Security (RLS)
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- ============================================
-- سياسات الوصول (RLS Policies)
-- ============================================

-- user_roles policies
CREATE POLICY "Users can view their own role"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON user_roles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can modify roles"
  ON user_roles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- products policies
CREATE POLICY "Anyone can view active products"
  ON products FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can view all products"
  ON products FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can modify products"
  ON products FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- quote_requests policies
CREATE POLICY "Users can view their own requests"
  ON quote_requests FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can create quote requests"
  ON quote_requests FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view all requests"
  ON quote_requests FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update requests"
  ON quote_requests FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- Trigger: أول مستخدم يصبح Admin تلقائياً
-- ============================================

-- دالة لتعيين دور Admin لأول مستخدم
CREATE OR REPLACE FUNCTION assign_admin_to_first_user()
RETURNS TRIGGER AS $$
BEGIN
  -- التحقق مما إذا كان هذا هو المستخدم الأول
  IF NOT EXISTS (SELECT 1 FROM user_roles) THEN
    INSERT INTO user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
    
    RAISE NOTICE 'أول مستخدم تم إنشاؤه - تم تعيين دور ADMIN تلقائياً';
  ELSE
    -- المستخدمين اللاحقين يحصلون على دور user
    INSERT INTO user_roles (user_id, role)
    VALUES (NEW.id, 'user');
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- إنشاء trigger عند إنشاء مستخدم جديد
DROP TRIGGER IF EXISTS on_new_user_create ON auth.users;
CREATE TRIGGER on_new_user_create
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION assign_admin_to_first_user();

-- ============================================
-- دوال مساعدة
-- ============================================

-- دالة للتحقق مما إذا كان المستخدم Admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- دالة للحصول على دور المستخدم الحالي
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS TEXT AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role
  FROM user_roles
  WHERE user_id = auth.uid();
  
  RETURN COALESCE(user_role, 'user');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- بيانات تجريبية (اختياري - يمكن حذفه)
-- ============================================

INSERT INTO products (name, description, category, price, features) VALUES
('منصة السحاب المتكاملة', 'حل سحابي شامل لإدارة البنية التحتية', 'سحابي', 999.00, ARRAY['إدارة مرنة', 'أمان عالي', 'دعم 24/7']),
('نظام الحماية المتقدم', 'حماية شاملة من التهديدات السيبرانية', 'أمن', 1499.00, ARRAY['كشف التهديدات', 'جدار حماية', 'تحليل سلوكي']),
('قاعدة البيانات الذكية', 'نظام إدارة قواعد بيانات متطور', 'بيانات', 799.00, ARRAY['أداء عالي', 'نسخ احتياطي', 'تقارير مفصلة']);

-- ============================================
-- رسالة تأكيد
-- ============================================
DO $$
BEGIN
  RAISE NOTICE '✅ تم إنشاء جداول قاعدة البيانات بنجاح!';
  RAISE NOTICE '📋 الجداول المنشأة: user_roles, products, quote_requests';
  RAISE NOTICE '🔐 تم تفعيل Row Level Security (RLS)';
  RAISE NOTICE '👑 أول مستخدم سيتم إنشاؤه سيحصل تلقائياً على دور ADMIN';
END $$;
