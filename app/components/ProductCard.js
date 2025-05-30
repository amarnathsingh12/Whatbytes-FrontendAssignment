'use client'
import Link from "next/link"
import useCartStore from "../store/useCartStore"

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore()
  return (
    <div className=" text-black overflow-hidden shadow-sm">
      <Link key={product.id} href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full mt-3 h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
        <p className="text-gray-700 font-medium mb-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}