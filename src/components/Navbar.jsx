function Navbar({ cartCount }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "red",
        color: "white",
      }}
    >
      <h2>🍔 FoodHub</h2>

      <div>
        <span style={{ marginRight: "20px" }}>Home</span>
        <span style={{ marginRight: "20px" }}>Cart ({cartCount})</span>
        <span>Reservation</span>
      </div>
    </nav>
  );
}

export default Navbar;