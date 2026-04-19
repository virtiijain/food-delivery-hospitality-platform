import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div>
      <Navbar cartCount={0} />

      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        🛒 Cart Page
      </h1>

      <p style={{ textAlign: "center" }}>
        Your selected food items will appear here.
      </p>
    </div>
  );
}

export default Cart;