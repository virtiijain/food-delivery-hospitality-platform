import { useState } from "react";
import API from "./api";

export default function AddItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/menu", { name, price });
    alert("Item Added");
    setName("");
    setPrice("");
  };

  return (
    <div className="card p-4 shadow">
      <h3>Add Menu Item</h3>

      <form onSubmit={submit}>
        <input className="form-control mb-2"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input className="form-control mb-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
}