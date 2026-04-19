function RestaurantCard({ name, rating, onAdd }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <p>{rating} ⭐</p>

      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}

export default RestaurantCard;