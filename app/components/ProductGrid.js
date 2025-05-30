'use client'
import ProductCard from './ProductCard'

const allProducts = [
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

export default function ProductGrid({ category, minPrice, maxPrice, search }) {
  

  const filtered = allProducts.filter(p => {
    const matchesCategory = !category || p.category === category
    const matchesPrice = p.price >= minPrice && p.price <= maxPrice
    const matchesSearch = p.title.toLowerCase().includes(search)
    return matchesCategory && matchesPrice && matchesSearch
  })

  if (!filtered.length) return <div className="text-center text-6xl w-full text-gray-500">No products found.</div>


  return (
    <div className="grid bg-gray-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}