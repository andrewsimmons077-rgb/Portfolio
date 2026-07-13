import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#f4f4f4" }}>
        {/* Always use Link instead of <a href> to prevent full page reloads */}
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        <Outlet /> 
      </main>
    </div>
  );
}
