import { useState } from "react"
import defHero from "../../assets/wizard_company_hero.png"
import glowHero from "../../assets/wizard_company_hero_glow.png"
import "./Home.css"

function Home() {

    const [hover, toggleHover] = useState(false);


    return(<div className="home-body-container">

        <img className="home-hero-image" src={(hover) ? glowHero : defHero} onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)}></img>
        <p className="site-description">For thousands of years, the guardians of 
            magic have kept the world safe from warlocks, 
            witches, and the outcast gods. Following their 
            noble example, we are the guardians of the 
            infrastructure, devices, systems, and programs
             our clients need to succeed in their quests.</p>

    </div>)
}

export default Home