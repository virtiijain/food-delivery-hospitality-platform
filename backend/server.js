<<<<<<< HEAD
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

// MENU
let menu = [];

app.get("/api/menu", (req, res) => {
  res.json(menu);
});

app.post("/api/menu", (req, res) => {
  const item = { _id: Date.now().toString(), ...req.body };
  menu.push(item);
  res.json(item);
});

app.delete("/api/menu/:id", (req, res) => {
  menu = menu.filter(i => i._id !== req.params.id);
  res.json({ success: true });
});

// ORDERS
let orders = [
  { _id: "1", item: "Pizza", status: "Pending" }
];

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.put("/api/orders/:id", (req, res) => {
  orders = orders.map(o =>
    o._id === req.params.id ? { ...o, status: "Delivered" } : o
  );
  res.json(orders.find(o => o._id === req.params.id));
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
=======
const dotenv = require("dotenv");
dotenv.config();
>>>>>>> b2b41f2cfa6be165394173ee684565ec3d2b9583
