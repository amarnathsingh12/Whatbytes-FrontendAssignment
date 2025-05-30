"use client"
import { useSearchParams } from 'next/navigation'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import Sidebar from './components/Sidebar'
import CartPage from './cart/page'

export default function HomePage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const minPrice = parseInt(searchParams.get('min') || '0')
  const maxPrice = parseInt(searchParams.get('max') || '1000')
  const search = searchParams.get('search')?.toLowerCase() || ''

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex bg-blue-600 flex-1 px-4 md:px-8 lg:px-16 py-6 gap-4">
        <Sidebar />
        <ProductGrid 
          category={category} 
          minPrice={minPrice} 
          maxPrice={maxPrice} 
          search={search} 
        />
      </div>
      <Footer />
    </main>
  )
}