import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Builder</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}
