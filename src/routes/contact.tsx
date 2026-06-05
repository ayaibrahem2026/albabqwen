import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">اتصل بنا</h1>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-6">أرسل لنا رسالة</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم</label>
              <input 
                type="text" 
                className="input w-full"
                placeholder="اسمك الكامل"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
              <input 
                type="email" 
                className="input w-full"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">الموضوع</label>
              <input 
                type="text" 
                className="input w-full"
                placeholder="موضوع الرسالة"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">الرسالة</label>
              <textarea 
                className="input w-full min-h-[120px]"
                placeholder="اكتب رسالتك هنا..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              إرسال الرسالة
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-6">معلومات الاتصال</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold">العنوان</h3>
                  <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground">info@albabtech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold">الهاتف</h3>
                  <p className="text-muted-foreground">+966 50 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">ساعات العمل</h2>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>الأحد - الخميس</span>
                <span>9:00 ص - 5:00 م</span>
              </div>
              <div className="flex justify-between">
                <span>الجمعة - السبت</span>
                <span>مغلق</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
