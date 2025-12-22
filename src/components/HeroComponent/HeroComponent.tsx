import React from "react";
import styles from "./HeroComponent.module.css";
import HeaderNavbar from "../../components/HeaderComponent/HeaderComponent";



export default function HeroComponent() {
  return (
    <section className={styles.section} id="about">
        <HeaderNavbar />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroMyprofile}>
            <h3 className={styles.titleSmall}>Hello 👋 My name is</h3>
            <h1 className={styles.titleBig}>Christopher Schuf</h1>
            <h2 className={styles.titleMedium}>DevSecOps Engineer & System Administrator</h2>
            <p className={styles.pLine}>
              I’m a DevSecOps Engineer and System Administrator with a strong focus on automation, security, and reliable infrastructure. I enjoy designing scalable systems, improving CI/CD pipelines, and hardening environments to meet modern security standards. Continuous learning is a core part of my work.
            </p>
            <a href="#contact">
              <button className={styles.button}>Contact me</button>
            </a>
          </div>
          
        </div>

        <div className={styles.heroContentRespo}>
          <div className={styles.heroMyprofile}>
            <h3 className={styles.titleSmall}>Hello 👋 My name is</h3>
            <h1 className={styles.titleBig}>Christopher Schuf</h1>
            <h2 className={styles.titleMedium}>DevSecOps Engineer & System Administrator</h2>


            <a href="#contact">
              <button className={styles.button}>Contact me</button>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
