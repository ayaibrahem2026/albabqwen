import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-almarai" dir="rtl">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
