import hero from "../../assets/wizard_company_team_photo.png";
import "./About.css";

function About() {
  return (
    <div className="about-body-container">
      <img className="about-hero-image" src={hero}></img>
      <p className="about-description">
        We are the wizards of technology. From the community of program
        conjurers, system magicians, and device enchanters, a movement was
        formed. We are the flame of support that sprang to cast light on all
        problem shadows. If you have a technology issue or need, contact our
        solution sages post-haste!
      </p>
    </div>
  );
}

export default About;
