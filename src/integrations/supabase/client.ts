import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase configuration is missing. Please check your environment variables.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

/**
 * دالة مساعدة لإنشاء عميل Supabase
 * يمكن استخدامها في مكونات React
 */
export function createSupabaseClient() {
  return supabase;
}

/**
 * أنواع البيانات الأساسية
 */
export interface User {
  id: string;
  email: string;
  full_name?: string;
  role?: 'user' | 'admin';
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  image_url?: string;
  created_at: string;
}

export interface QuoteRequest {
  id: string;
  user_id: string;
  product_id?: string;
  message: string;
  status: 'pending' | 'reviewed' | 'completed';
  created_at: string;
}
