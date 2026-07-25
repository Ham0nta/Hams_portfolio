import { Link } from "react-router-dom";
import "./Hero.css";
import profileImage from "../assets/profile.JPG";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={profileImage} alt="Hamonta" />
      </div>
      <div className="hero-content">
        <p>Hello, I'm</p>
        <h1>Hamonta</h1>
        <h2>Computer Science & Engineering Student</h2>
        <p>
          I am interested in web development, and building practical projects.
        </p>
        <div className="hero-buttons">
          <button>
            <Link to="/projects">View My Projects</Link>
          </button>
          <button>
            <Link to="/Contacts">Contact Me</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
