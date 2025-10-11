'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Pages where we don't want header/footer
  const noLayoutPages = ['/login']
  const showLayout = !noLayoutPages.includes(pathname)

  if (!showLayout) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  )
}

