import "./styles/Landing.css";
import { config } from "../config";

const Landing = () => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="landing-section" id="about">
      <div className="landing-container">
        <div className="landing-intro glass-panel">
          <h2 className="landing-hello">Hello! I'm</h2>
          <h1 className="landing-name">
            <span className="first-name">{firstName.toUpperCase()}</span>
            <br />
            {lastName && <span className="last-name">{lastName.toUpperCase()}</span>}
          </h1>
          <div className="landing-role">
            <span className="role-text">{config.developer.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
