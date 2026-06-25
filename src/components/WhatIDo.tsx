import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".what-card-wow");
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 100, rotateX: -30 }, 
      {
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <div className="whatIDO-wow" id="skills" ref={containerRef}>
      <div className="what-container-wow">
        <h2 className="wow-title-small" style={{ fontSize: "3rem", textAlign: "center", marginBottom: "50px" }}>
          What I Do
        </h2>
        <div className="what-grid-wow">
          {config.skills.map((skill, index) => (
            <div key={index} className="what-card-wow glass-panel">
              <div className="what-card-inner">
                <h3>{skill.title}</h3>
                <h4>{skill.description}</h4>
                <p>{skill.details}</p>
                <h5>Skillset & Tools</h5>
                <div className="what-tags-container-wow">
                  {skill.tools.map((tool, tIndex) => (
                    <span key={tIndex} className="what-tag-wow">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
