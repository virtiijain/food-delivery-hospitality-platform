import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (id) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map(item => (
        <div key={item._id} className="card p-2 mb-2">
          {item.name} - ₹{item.price}
          <button
            className="btn btn-danger btn-sm mt-1"
            onClick={() => removeItem(item._id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h4>Total: ₹{total}</h4>
    </div>
  );
}