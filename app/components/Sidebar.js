'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Sidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [price, setPrice] = useState(searchParams.get('max') || 0)
  const selectedCategory = searchParams.get('category') || ''

  useEffect(() => {
    const currentPrice = searchParams.get('max') || 0
    setPrice(currentPrice)
  }, [searchParams])

  const handleCategoryChange = (e) => {
    const params = new URLSearchParams(searchParams)
    params.set('category', e.target.value)
    router.push('?' + params.toString())
  }

  const handlePriceChange = (e) => {
    const newPrice = e.target.value
    setPrice(newPrice)
    const params = new URLSearchParams(searchParams)
    params.set('max', newPrice)
    router.push('?' + params.toString())
  }

  const categories = [
    { label: 'All', value: '' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Fashion', value: 'Fashion' },
    { label: 'Home', value: 'Home' }
  ]

  return (
    <aside className="w-1/4 text-3xl text-white hidden md:block">
      <h2 className="font-semibold mb-2">Categories</h2>
      <div className="space-y-2 mb-6">
        {categories.map((cat) => (
          <label key={cat.value} className="flex items-center gap-3 text-2xl cursor-pointer">
            <input
              type="radio"
              name="category"
              value={cat.value}
              checked={selectedCategory === cat.value}
              onChange={handleCategoryChange}
              className="w-5 h-5 accent-blue-600 rounded-full"
            />
            {cat.label}
          </label>
        ))}
      </div>

      <h2 className="font-semibold mb-2">Max Price</h2>
      <div className="mb-2 text-2xl">$ {price}</div>
      <input
        type="range"
        min="0"
        max="1000"
        value={price}
        onChange={handlePriceChange}
        className="w-full mb-4"
      />
    </aside>
  )
}
