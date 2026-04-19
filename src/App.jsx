import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useParams
} from "react-router-dom";

// ---------- Navbar ----------
function Navbar({ cartCount, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setLoggedIn(false);
      localStorage.removeItem("loggedIn");
      navigate("/login");
    }
  };

  return (
    <nav style={{
      background: "linear-gradient(90deg, #ff512f, #f09819)",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      fontWeight: "bold",
      fontFamily: "Arial"
    }}>
      <h2 style={{ margin: 0 }}>🛎️Eat Nd Treat</h2>
      {loggedIn && (
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart ({cartCount})</Link>
          <Link to="/reservation" style={{ color: "white", textDecoration: "none" }}>Reservation</Link>
          <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
          <button onClick={logout} style={{
            padding: "5px 10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#fff",
            color: "#0e0217",
            fontWeight: "bold"
          }}>Logout</button>
        </div>
      )}
    </nav>
  );
}

// ---------- Login ----------
function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
      navigate("/"); // redirect to home
    } else {
      alert("Wrong Login");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        width: "300px",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#ff512f" }}>🍔 Eat Nd Treat</h1>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "10px",
            background: "#ff512f",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >Login</button>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>Email: admin@gmail.com</p>
        <p style={{ fontSize: "14px" }}>Password: 1234</p>
      </div>
    </div>
  );
}

// ---------- Protected Route ----------
function Protected({ loggedIn, children }) {
  return loggedIn ? children : <Navigate to="/login" />;
}

// ---------- Home ----------
function Home({ cart, loggedIn, setLoggedIn }) {
  const restaurants = [
    { name: "Paradise", image: "/images/paradise.jfif", rating: 4.5, popular: true },
    { name: "Athithi", image: "/images/athithi.jfif", rating: 4.2, popular: false },
    { name: "Dominos", image: "/images/dominos.jfif", rating: 4.0, popular: true },
    { name: "ShakesFactory", image: "/images/shakefactory.jfif", rating: 4.6, popular: true },
    { name: "IceMagic", image: "/images/icemagic.jfif", rating: 4.3, popular: false },
    { name: "BurgerKing", image: "/images/burgerking.jfif", rating: 4.1, popular: false },
  ];

  return (
    <div>
      <Navbar cartCount={cart.length} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <h1 style={{ textAlign: "center", margin: "20px 0", fontFamily: "Arial" }}>Restaurants 🍽️</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
        {restaurants.map((res, index) => (
          <Link key={index} to={`/restaurant/${res.name}`} style={{ textDecoration: "none" }}>
            <div style={{
              borderRadius: "15px",
              overflow: "hidden",
              width: "240px",
              background: "white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
              cursor: "pointer",
              position: "relative"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              {res.popular && (
                <span style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#c12fff",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}>POPULAR</span>
              )}
              <img src={res.image} alt={res.name} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3 style={{ margin: "5px 0" }}>{res.name}</h3>
                <p style={{ margin: "5px 0", color: "#f39c12" }}>
                  {"⭐".repeat(Math.floor(res.rating))} ({res.rating})
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ---------- Restaurant Menu ----------
function RestaurantMenu({ cart, setCart, loggedIn, setLoggedIn }) {
  const { name } = useParams();
  const menus = {
    Paradise: [
      { name: "Chicken Biryani", image: "/images/cb.jfif", price: 250 },
      { name: "Veg Biryani", image: "/images/vb.jfif", price: 180 },
      { name: "Paneer Fried Rice", image: "/images/pr.jfif", price: 180 },
      { name: "Egg Fried Rice", image: "/images/er.jfif", price: 180 },
    ],
    Athithi: [
      { name: "Masala Dosa", image: "/images/mdt.jfif", price: 40 },
      { name: "Plain Dosa", image: "/images/pdt.jfif", price: 30 },
      { name: "Idly", image: "/images/it.jfif", price: 30 },
      { name: "Upma", image: "/images/ut.jfif", price: 30 },
      { name: "Vada", image: "/images/vt.jfif", price: 30 },
    ],
    Dominos: [
      { name: "Veg Pizza", image: "/images/vp.jfif", price: 120 },
      { name: "Chicken Pizza", image: "/images/cp.jfif", price: 150 }
    ],
    ShakesFactory: [
      { name: "Mango Thick Shake", image: "/images/mt.jfif", price: 90 },
      { name: "Chocolate Thick Shake", image: "/images/ct.jfif", price: 90 },
      { name: "Mixed Thick Shake", image: "/images/mxt.jfif", price: 120 },
      { name: "Strawberry Thick Shake", image: "/images/st.jfif", price: 90 }
    ],
    IceMagic: [
      { name: "Strawberry Icecream", image: "/images/si.jfif", price: 90 },
      { name: "Chocolate Icecream", image: "/images/ci.jfif", price: 90 },
      { name: "Vanilla Icecream", image: "/images/vi.jfif", price: 90 },
      { name: "Mango Icecream", image: "/images/mi.jfif", price: 90 },
    ],
    BurgerKing: [
      { name: "Veg Burger", image: "/images/vbug.jfif", price: 80 },
      { name: "Chicken Burger", image: "/images/cbug.jfif", price: 100 },
    ],
  };

  const foods = menus[name] || [];

  const addToCart = (food) => {
    const existing = cart.find(item => item.name === food.name);
    const updated = existing
      ? cart.map(item => item.name === food.name ? { ...item, qty: item.qty + 1 } : item)
      : [...cart, { ...food, qty: 1 }];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>{name} Menu</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {foods.map((food, index) => (
          <div key={index} style={{
            width: "220px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            cursor: "pointer",
            transition: "transform 0.3s",
            textAlign: "center"
          }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={food.image} alt={food.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "5px 0" }}>{food.name}</h3>
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>₹ {food.price}</p>
              <button
                onClick={() => addToCart(food)}
                style={{
                  padding: "8px 15px",
                  background: "#ff512f",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Cart ----------
function Cart({ cart, setCart, setOrders, loggedIn, setLoggedIn }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    if (cart.length === 0) { alert("🛒Cart is empty!"); return; }

    const newOrders = cart.map(item => ({ ...item, status: "Pending" }));
    const allOrders = [...JSON.parse(localStorage.getItem("orders") || "[]"), ...newOrders];

    setOrders(allOrders);
    localStorage.setItem("orders", JSON.stringify(allOrders));
    setCart([]);
    localStorage.setItem("🛒cart", JSON.stringify([]));
    alert("Order Placed Successfully!");
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));
    }
  };

  return (
    <div>
      <Navbar cartCount={cart.length} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Cart is empty</h2>
      ) : (
        <div style={{ textAlign: "center" }}>
          {cart.map((item, index) => (
            <p key={index}>{item.name} - ₹ {item.price} × {item.qty} = ₹ {item.price * item.qty}</p>
          ))}
          <h2>Total: ₹ {total}</h2>
          <button onClick={placeOrder} style={{ marginRight: "10px" }}>Place Order</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

// ---------- Dashboard with Real-Time Order Status ----------
function Dashboard({ orders, setOrders, loggedIn, setLoggedIn }) {
  const [activeOrders, setActiveOrders] = useState(
    orders.filter(order => order.status !== "Delivered")
  );

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );

  // Sync new orders
  useEffect(() => {
    const freshOrders = orders.filter(order => order.status !== "Delivered");
    setActiveOrders(freshOrders);
  }, [orders]);

  // Real-time status update every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrders(prev => {
        const updated = prev.map(order => {
          if (order.status === "Pending") return { ...order, status: "Preparing" };
          if (order.status === "Preparing") return { ...order, status: "In Transit" };
          if (order.status === "In Transit") return { ...order, status: "Delivered" };
          return order;
        });

        const delivered = updated.filter(order => order.status === "Delivered");
        const remaining = updated.filter(order => order.status !== "Delivered");

        if (delivered.length > 0) {
          const newHistory = [...history, ...delivered];
          setHistory(newHistory);
          localStorage.setItem("history", JSON.stringify(newHistory));
        }

        setOrders(remaining);
        localStorage.setItem("orders", JSON.stringify(remaining));

        return remaining;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [history, setOrders]);

  // ✅ Clear Dashboard Function
  const clearDashboard = () => {
    if (window.confirm("Are you sure you want to clear dashboard?")) {
      setActiveOrders([]);
      setHistory([]);
      setOrders([]);

      localStorage.removeItem("orders");
      localStorage.removeItem("history");

      alert("Dashboard Cleared Successfully!");
    }
  };

  const total = activeOrders.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <Navbar cartCount={0} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <h1 style={{ textAlign: "center" }}>Merchant Dashboard</h1>

      {/* Clear Dashboard Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={clearDashboard}
          style={{
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Clear Dashboard
        </button>
      </div>

      {/* Active Orders */}
      <h2 style={{ textAlign: "center", color: "#ff512f" }}>Active Orders</h2>

      {activeOrders.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No Active Orders</h3>
      ) : (
        <div style={{ textAlign: "center" }}>
          {activeOrders.map((item, index) => (
            <p key={index}>
              {item.name} - ₹ {item.price} × {item.qty} = ₹ {item.price * item.qty}
              <span style={{ color: "#f39c12", fontWeight: "bold" }}>
                {" "} [{item.status}]
              </span>
            </p>
          ))}
          <h2>Total Active Bill: ₹ {total}</h2>
        </div>
      )}

      {/* History */}
      <h2 style={{ textAlign: "center", marginTop: "30px", color: "green" }}>
        Delivered History
      </h2>

      {history.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No Delivered Orders Yet</h3>
      ) : (
        <div style={{ textAlign: "center" }}>
          {history.map((item, index) => (
            <p key={index}>
              {item.name} - ₹ {item.price} × {item.qty} = ₹ {item.price * item.qty}
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" "} [Delivered]
              </span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
// ---------- Reservation ----------
function Reservation({ reservations, setReservations, loggedIn, setLoggedIn }) {
  const [name, setName] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const restaurantList = [
    { name: "Paradise", location: "MG Road", rating: 4.5 },
    { name: "Athithi", location: "Hitech City", rating: 4.2 },
    { name: "Dominos", location: "Kukatpally", rating: 4.0 },
    { name: "ShakesFactory", location: "Banjara Hills", rating: 4.6 },
    { name: "IceMagic", location: "Gachibowli", rating: 4.3 },
    { name: "BurgerKing", location: "Madhapur", rating: 4.1 },
  ];

  const handleConfirm = () => {
    if (!name || !selectedRestaurant || guests <= 0 || !date || !time) {
      alert("Please fill all fields correctly!");
      return;
    }
    const restaurant = restaurantList.find(r => r.name === selectedRestaurant);
    const reservation = { name, restaurant: restaurant.name, location: restaurant.location, rating: restaurant.rating, guests, date, time };
    const updated = [...reservations, reservation];
    setReservations(updated);
    localStorage.setItem("reservations", JSON.stringify(updated));
    alert("Reservation Confirmed!");
    setName(""); setSelectedRestaurant(""); setGuests(1); setDate(""); setTime("");
  };

  return (
    <div>
      <Navbar cartCount={0} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <h1 style={{ textAlign: "center" }}>Table Reservation</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" style={{ margin: "5px", padding: "8px", width: "250px" }} />
        <select value={selectedRestaurant} onChange={e => setSelectedRestaurant(e.target.value)} style={{ margin: "5px", padding: "8px", width: "250px" }}>
          <option value="">Select Restaurant</option>
          {restaurantList.map((r, i) => <option key={i} value={r.name}>{r.name}</option>)}
        </select>
        <input type="number" value={guests} onChange={e => setGuests(parseInt(e.target.value))} placeholder="Number of Guests" style={{ margin: "5px", padding: "8px", width: "250px" }} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ margin: "5px", padding: "8px", width: "250px" }} />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} style={{ margin: "5px", padding: "8px", width: "250px" }} />
        <button onClick={handleConfirm} style={{ padding: "10px 20px", margin: "10px", background: "#ff512f", color: "white", border: "none", borderRadius: "8px" }}>Confirm Reservation</button>
      </div>
    </div>
  );
}

// ---------- App ----------
export default function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders") || "[]"));
  const [reservations, setReservations] = useState(JSON.parse(localStorage.getItem("reservations") || "[]"));
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/" element={<Protected loggedIn={loggedIn}><Home cart={cart} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></Protected>} />
        <Route path="/restaurant/:name" element={<Protected loggedIn={loggedIn}><RestaurantMenu cart={cart} setCart={setCart} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></Protected>} />
        <Route path="/cart" element={<Protected loggedIn={loggedIn}><Cart cart={cart} setCart={setCart} setOrders={setOrders} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></Protected>} />
        <Route path="/dashboard" element={<Protected loggedIn={loggedIn}><Dashboard orders={orders} setOrders={setOrders} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></Protected>} />
        <Route path="/reservation" element={<Protected loggedIn={loggedIn}><Reservation reservations={reservations} setReservations={setReservations} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}