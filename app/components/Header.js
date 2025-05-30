'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import useCartStore from '../store/useCartStore' // ✅ Adjust path as needed

export default function Header() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { cart } = useCartStore()
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      router.push(`/?search=${query}`)
    }
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md">
      <div className="text-3xl text-blue-00 font-bold">Whatbytes</div>

      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-12 h-10" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>

        <User className="w-16 h-10" />
      </div>
    </header>
  )
}
