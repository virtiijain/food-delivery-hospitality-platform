import { useEffect, useState } from "react";
import API from "./api";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    API.get("/menu").then(res => setMenu(res.data));
  }, []);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div>
      <h2>Menu</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Cart</th>
          </tr>
        </thead>

        <tbody>
          {menu.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}