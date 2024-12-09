import styles from "../style";
import Navbar from "./Navbar";
import React from 'react'
import { AboutHero } from "../components";


const About = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <AboutHero />
            </div>
        </div>
    </div>
)

export default About