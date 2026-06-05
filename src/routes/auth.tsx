import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/auth')({
  component: AuthPage,
})

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
            </h1>
            <p className="text-muted-foreground">
              {isLogin 
                ? 'مرحباً بعودتك! سجل الدخول للمتابعة' 
                : 'أنشئ حساباً جديداً للبدء'}
            </p>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                <input 
                  type="text" 
                  className="input w-full"
                  placeholder="اسمك الكامل"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
              <input 
                type="email" 
                className="input w-full"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">كلمة المرور</label>
              <input 
                type="password" 
                className="input w-full"
                placeholder="••••••••"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <span className="text-sm">تذكرني</span>
                </label>
                <button type="button" className="text-sm text-primary hover:underline">
                  نسيت كلمة المرور؟
                </button>
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline mr-1"
              >
                {isLogin ? 'إنشاء حساب' : 'تسجيل الدخول'}
              </button>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">أو تابع باستخدام</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="btn-outline flex items-center justify-center gap-2">
                <span>G</span> Google
              </button>
              <button className="btn-outline flex items-center justify-center gap-2">
                <span>🍎</span> Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
