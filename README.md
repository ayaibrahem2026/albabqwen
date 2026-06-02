# الباب تيك - موقع الويب

مشروع ويب حديث مبني باستخدام أحدث التقنيات:

## 🛠️ التقنيات المستخدمة

- **Framework**: TanStack Start (React 19 + Vite 6)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Backend**: Supabase (PostgreSQL + Auth)
- **Forms**: React Hook Form + Zod
- **Routing**: TanStack Router (File-based)
- **Deployment**: Vercel

## 📁 هيكل المشروع

```
src/
├── routes/              # صفحات التطبيق
│   ├── __root.tsx       # التخطيط الأساسي
│   ├── index.tsx        # الصفحة الرئيسية
│   ├── products.tsx     # صفحة المنتجات
│   ├── services.tsx     # صفحة الخدمات
│   ├── portfolio.tsx    # صفحة الأعمال
│   ├── about.tsx        # صفحة من نحن
│   ├── contact.tsx      # صفحة اتصل بنا
│   └── auth.tsx         # صفحة تسجيل الدخول
├── components/
│   ├── site/            # مكونات الموقع
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   └── ui/              # مكونات shadcn/ui
├── integrations/
│   └── supabase/
│       └── client.ts    # عميل Supabase
├── data/                # البيانات الثابتة
├── styles.css           # ملفات التصميم
└── main.tsx             # نقطة الدخول
```

## 🚀 البدء السريع

### المتطلبات المسبقة

- Node.js >= 20.0.0
- Bun (اختياري، موصى به للسرعة)

### التثبيت

```bash
# تثبيت المكتبات
npm install

# أو باستخدام Bun
bun install
```

### تشغيل التطوير

```bash
npm run dev
# أو
bun run dev
```

سيتم تشغيل التطبيق على: `http://localhost:3000`

### البناء للإنتاج

```bash
npm run build
npm run preview
```

## 🔐 ربط Supabase

### 1. إنشاء مشروع Supabase

1. اذهب إلى [supabase.com](https://supabase.com)
2. أنشئ مشروعاً جديداً
3. احصل على مفاتيح API من Settings > API

### 2. إضافة متغيرات البيئة

انسخ ملف `.env.example`:

```bash
cp .env.example .env.local
```

ثم أضف القيم:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. تطبيق Migration

في لوحة تحكم Supabase:
1. اذهب إلى SQL Editor
2. انسخ محتوى `supabase/migrations/001_init.sql`
3. شغّل السكريبت

> ⚠️ **ملاحظة مهمة**: أول مستخدم يتم إنشاؤه سيحصل تلقائياً على دور `admin`

## 🌐 النشر على Vercel

### 1. ربط المستودع بـ Vercel

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# نشر المشروع
vercel
```

### 2. إعداد متغيرات البيئة في Vercel

في لوحة تحكم Vercel:
1. Project Settings > Environment Variables
2. أضف نفس المتغيرات في `.env.example`

### 3. إعادة النشر

```bash
vercel --prod
```

## 🎨 المميزات

- ✅ **RTL كامل**: دعم كامل للاتجاه من اليمين لليسار
- ✅ **الوضع الداكن/الفاتح**: تبديل بين الوضعين مع حفظ التفضيل
- ✅ **متجاوب**: يعمل على جميع الأجهزة
- ✅ **أداء عالي**: Code splitting و Tree shaking
- ✅ **TypeScript**: كود آمن وموثق
- ✅ **Auth جاهز**: نظام مصادقة كامل مع أدوار

## 📝 المهام القادمة

- [ ] ربط نماذج الاتصال بـ Supabase
- [ ] إضافة صفحات إدارة للمحتوى
- [ ] تفعيل React Hook Form + Zod للتحقق
- [ ] إضافة اختبارات (Vitest + Testing Library)
- [ ] تحسين SEO و Meta tags

## 📄 الترخيص

جميع الحقوق محفوظة © 2024 الباب تيك
