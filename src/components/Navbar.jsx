import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h2>Profolio</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;
