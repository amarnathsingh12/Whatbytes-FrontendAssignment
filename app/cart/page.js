'use client'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useCartStore from '../store/useCartStore'

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCartStore()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden">
      <Header />

      <div className="flex-1 overflow-y-auto px-8 py-6 bg-gray-100 text-gray-700">
        <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-xl">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-6 border-b pb-6">
                <img src={item.image} alt={item.title} className="w-96 h-64 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="font-semibold text-3xl">{item.title}</h2>
                  <p className="text-2xl text-black">Unit Price: ${item.price}</p>
                  <p className="text-2xl text-black">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="flex text-2xl items-center gap-3 mt-3">
                    <label>Qty:</label>
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-3 cursor-pointer py-1 bg-gray-300 rounded"
                    >-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="border px-3 py-1 w-20 text-black rounded text-center"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 cursor-pointer py-1 bg-gray-300 rounded"
                    >+</button>
                    <button
                      onClick={() => {
                        if (confirm('Remove this item from the cart?')) {
                          removeFromCart(item.id)
                        }
                      }}
                      className="text-red-500 cursor-pointer text-lg hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-right text-2xl space-y-1 pt-6 border-t">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tax (10%): ${tax.toFixed(2)}</p>
              <p className="font-bold text-3xl">Total: ${total.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
