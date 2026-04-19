export default function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Total Orders</h5>
            <h3>120</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Revenue</h5>
            <h3>₹5000</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Today Orders</h5>
            <h3>15</h3>
          </div>
        </div>
      </div>
    </div>
  );
}