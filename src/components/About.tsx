import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para">
          {config.about.description}
        </p>
        {config.achievements && config.achievements.length > 0 && (
          <div className="achievements-section">
            <h3 className="title">Achievements</h3>
            <ul className="achievements-list">
              {config.achievements.map((achievement, index) => (
                <li key={index}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
