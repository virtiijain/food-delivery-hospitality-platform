import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <Navbar cartCount={0} />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🔐 Login Page</h1>

        <input type="email" placeholder="Email" />
        <br /><br />

        <input type="password" placeholder="Password" />
        <br /><br />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;