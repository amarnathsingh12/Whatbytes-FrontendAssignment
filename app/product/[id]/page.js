'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import useCartStore from '@/app/store/useCartStore'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function ProductDetailPage() {
  const { addToCart } = useCartStore()
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const dummyProducts = [
      { id: '1', title: 'Blue Nike Shoe', price: 199, image: '/a.jpg', description: 'High quality product Blue Nike Shoe', category: 'Electronics' },
      { id: '3', title: 'Black Jordan Shoe', price: 299, image: '/c.jpg', description: 'Reliable product Black Jordan Shoe', category: 'Fashion' },
      { id: '2', title: 'Red Blue Sparx Shoe', price: 399, image: '/b.jpg', description: 'Durable product Red Blue Sparx Shoe', category: 'Home' },
      { id: '4', title: 'Blue Nike Shoe', price: 199, image: '/b.jpg', description: 'High quality product Blue Nike Shoe', category: 'Electronics' },
      { id: '5', title: 'Black Jordan Shoe', price: 299, image: '/a.jpg', description: 'Reliable product Black Jordan Shoe', category: 'Fashion' },
      { id: '6', title: 'Red Blue Sparx Shoe', price: 399, image: '/c.jpg', description: 'Durable product Red Blue Sparx Shoe', category: 'Home' },
      { id: '7', title: 'Blue Nike Shoe', price: 199, image: '/a.jpg', description: 'High quality product Blue Nike Shoe', category: 'Electronics' },
      { id: '8', title: 'Black Jordan Shoe', price: 299, image: '/b.jpg', description: 'Reliable product Black Jordan Shoe', category: 'Fashion' },
      { id: '9', title: 'Red Blue Sparx Shoe', price: 399, image: '/c.jpg', description: 'Durable product Red Blue Sparx Shoe', category: 'Home' },
    ]
    const found = dummyProducts.find(p => p.id === id)
    setProduct(found)
  }, [id])

  if (!product) return <div className="p-6">Loading...</div>

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-col ml-32 md:flex-row px-6 py-8 gap-6">
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded" />
          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-blue-600 text-white w-full text-2xl cursor-pointer px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col mt-4 ml-4 gap-4">
          <h1 className="text-5xl text-gray-600 font-bold">{product.title}</h1>
          <p className="text-3xl text-black font-semibold">$ {product.price}</p>
          <p className="text-gray-700 text-3xl">{product.description}</p>
          <p className="text-gray-500 text-3xl">Category: {product.category}</p>
          <label className="block mt-4 text-black text-3xl">Quantity:
            <input type="number" defaultValue={1} min={1} className="ml-2 border px-2 py-1 w-20 rounded" />
          </label>

        </div>
      </div>
      <Footer />
    </main>
  )
}