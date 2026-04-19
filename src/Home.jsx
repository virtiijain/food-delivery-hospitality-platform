import { useState } from "react";
import Navbar from "../components/Navbar";
import restaurants from "../data/restaurants";

function Home() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>🍔 Food Delivery + Dine-Out Platform</h1>

        <input
          type="text"
          placeholder="Search restaurant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          {filtered.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.rating} ⭐</p>
              <button onClick={() => addToCart(item.name)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;