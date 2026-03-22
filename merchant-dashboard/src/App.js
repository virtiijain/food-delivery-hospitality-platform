import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Menu from "./Menu";
import AddItem from "./AddItem";
import Cart from "./Cart";


function Layout({ children }) {
  return (
    <div className="d-flex">
      
      {/* Sidebar */}
        <div
    className="bg-dark text-white p-3"
    style={{ width: "220px", height: "100vh" }}
>
  <h4 className="text-center">Merchant</h4>
  <hr />

  <Link className="text-white d-block mb-2" to="/">🏠 Dashboard</Link>
  <Link className="text-white d-block mb-2" to="/orders">📦 Orders</Link>
  <Link className="text-white d-block mb-2" to="/menu">🍔 Menu</Link>
  <Link className="text-white d-block mb-2" to="/add">➕ Add Item</Link>
  <Link className="text-white d-block mb-2" to="/cart">🛒 Cart</Link>
</div>
      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />

        <Route
          path="/menu"
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />

        <Route
          path="/add"
          element={
            <Layout>
              <AddItem />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}