import "./styles/Contact.css";
import { config } from "../config";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-desc">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open!
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href={`mailto:${config.contact.email}`} className="contact-value" data-cursor="disable">
              {config.contact.email}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Socials</span>
            <div style={{ display: "flex", gap: "15px" }}>
              {config.contact.github && (
                <a href={config.contact.github} target="_blank" rel="noreferrer" className="contact-value" data-cursor="disable">
                  GitHub
                </a>
              )}
              {config.contact.linkedin && (
                <a href={config.contact.linkedin} target="_blank" rel="noreferrer" className="contact-value" data-cursor="disable">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <a href={`mailto:${config.contact.email}`} className="contact-btn" data-cursor="disable">
          Say Hello
        </a>
      </div>
      
      <div className="footer-credits">
        <p>Designed and Built by {config.developer.fullName}</p>
        <p>&copy; {new Date().getFullYear()} 3D Interactive Portfolio</p>
      </div>
    </div>
  );
};

export default Contact;
