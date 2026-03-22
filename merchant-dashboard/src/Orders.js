import { useEffect, useState } from "react";
import API from "./api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then(res => setOrders(res.data));
  }, []);

  const updateStatus = async (id) => {
    const res = await API.put(`/orders/${id}`, { status: "Delivered" });
    setOrders(orders.map(o => o._id === id ? res.data : o));
  };

  return (
    <div>
      <h2>Orders</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.item}</td>
              <td>{order.status}</td>
              <td>
                <button className="btn btn-success btn-sm"
                  onClick={() => updateStatus(order._id)}>
                  Mark Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}