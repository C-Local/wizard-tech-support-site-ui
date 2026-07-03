import { useState } from "react";
import hero from "../../assets/wizard_company_team_photo.png";
import "./About.css";

function About() {
  const [imageHover, toggleImageHover] = useState(false);

  return (
    <div className="about-body-container">
      <img
        className={
          imageHover ? "about-hero-image lifted-image" : "about-hero-image"
        }
        src={hero}
        onMouseEnter={() => toggleImageHover(true)}
        onMouseLeave={() => toggleImageHover(false)}
      ></img>
      {imageHover ? (
        <p
          className="about-hero-social-plug"
          onMouseEnter={() => toggleImageHover(true)}
          onMouseLeave={() => toggleImageHover(false)}
        >
          Follow us on social media for magic tricks - we make problems
          dissappear!
        </p>
      ) : (
        ""
      )}
      <div className="about-description">
        <p className="description-word">We</p>
        <p className="description-word">are</p>
        <p className="description-word">the</p>
        <p className="description-word">wizards</p>
        <p className="description-word">of</p>
        <p className="description-word description-word-almost-end">
          technology
        </p>
        <p className="description-word description-word-end">.</p>
        <p className="description-word">From</p>
        <p className="description-word">the</p>
        <p className="description-word">community</p>
        <p className="description-word">of</p>
        <p className="description-word">program</p>
        <p className="description-word description-word-almost-end">
          conjurers
        </p>
        <p className="description-word description-word-end">,</p>
        <p className="description-word">system</p>
        <p className="description-word description-word-almost-end">
          magicians
        </p>
        <p className="description-word description-word-end">,</p>
        <p className="description-word">and</p>
        <p className="description-word">device</p>
        <p className="description-word description-word-almost-end">
          enchanters
        </p>
        <p className="description-word description-word-end">,</p>
        <p className="description-word">a</p>
        <p className="description-word">movement</p>
        <p className="description-word">was</p>
        <p className="description-word description-word-almost-end">formed</p>
        <p className="description-word description-word-end">.</p>
        <p className="description-word">We</p>
        <p className="description-word">are</p>
        <p className="description-word">the</p>
        <p className="description-word">flame</p>
        <p className="description-word">of</p>
        <p className="description-word">support</p>
        <p className="description-word">that</p>
        <p className="description-word">sprang</p>
        <p className="description-word">up</p>
        <p className="description-word">to</p>
        <p className="description-word">cast</p>
        <p className="description-word">light</p>
        <p className="description-word">on</p>
        <p className="description-word">all</p>
        <p className="description-word">problem</p>
        <p className="description-word description-word-almost-end">shadows</p>
        <p className="description-word description-word-end">.</p>
        <p className="description-word">If</p>
        <p className="description-word">you</p>
        <p className="description-word">have</p>
        <p className="description-word">a</p>
        <p className="description-word">technology</p>
        <p className="description-word">issue</p>
        <p className="description-word">or</p>
        <p className="description-word description-word-almost-end">need</p>
        <p className="description-word description-word-end">,</p>
        <p className="description-word">contact</p>
        <p className="description-word">our</p>
        <p className="description-word">sages</p>
        <p className="description-word description-word-almost-end">
          post-haste
        </p>
        <p className="description-word description-word-end">!</p>
      </div>
    </div>
  );
}

export default About;
