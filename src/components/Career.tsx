import { useEffect, useRef } from "react";
import "./styles/Career.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".career-item");
    
    gsap.fromTo(
      items,
      { opacity: 0, x: -50, rotateY: 30 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <div className="career-section" id="career" ref={containerRef}>
      <div className="career-container">
        <h2>Career & Experience</h2>
        <div className="career-list">
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-item">
              <div className="career-header">
                <h3>{exp.position}</h3>
                <span className="career-period">{exp.period}</span>
              </div>
              <h4 className="career-company">{exp.company}</h4>
              <p className="career-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
