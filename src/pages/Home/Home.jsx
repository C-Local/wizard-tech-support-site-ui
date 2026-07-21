import { useState } from "react";
import defHero from "../../assets/wizard_company_hero.png";
import glowHero from "../../assets/wizard_company_hero_glow.png";
import "./Home.css";

function Home() {
  const [hover, toggleHover] = useState(false);

  const [spinning, setSpinning] = useState(false);

  return (
    <div className="home-body-container">
      <div className="hero-section"><img
        id="hero-card"
        className={spinning ? "home-hero-image flip" : "home-hero-image"}
        src={hover || spinning ? glowHero : defHero}
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
        onClick={() => setSpinning(!spinning)}
      ></img>
      {
      
      spinning &&
      import.meta.env.VITE_FIREBASE_DEMO_PASSWORD &&
      import.meta.env.VITE_FIREBASE_DEMO_EMAIL_ADDRESS &&
      
      <div className="demo-credentials">
        <p className="demo-email-address">Spellbound Stronghold: "{import.meta.env.VITE_FIREBASE_DEMO_EMAIL_ADDRESS}"</p>
        <p className="demo-password">Key of Power: "{import.meta.env.VITE_FIREBASE_DEMO_PASSWORD}"</p>
      </div>
      
      }
      </div>
      <p className="site-description">
        For thousands of years, the guardians of magic have kept the world safe
        from warlocks, witches, and the outcast gods. Following their noble
        example, we are the guardians of the infrastructure, devices, systems,
        and programs our clients need to succeed in their quests.
      </p>
    </div>
  );
}

export default Home;
