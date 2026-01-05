import React, { useState } from "react";
import styles from "./MySkillsComponent.module.css";

export interface ISkillElement {
  label: string;
  imagePath: string;
  imagePathRespo: string;
  descriptions: string[];
}

export interface ISkillsProps {
  skills?: ISkillElement[];
}

export default function MySkills({ skills = [] }: ISkillsProps) {
  const [hoveredSkill, setHoveredSkill] =
    useState<ISkillElement | null>(null);

  return (
    <section id="skills" className={styles.mySkills}>
      <div className={styles.innerContent}>
        <h2 className={styles.titleMedium}>My skills</h2>

        <div className={styles.skillContent}>
          {skills.map((skill) => (
            <div
              key={skill.label}
              className={styles.skillDetail}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img
                src={skill.imagePath}
                alt={skill.label}
                className={styles.skillDetailImg}
              />

              <span className={styles.skillName}>{skill.label}</span>

              {hoveredSkill === skill && (
                <div className={styles.hoverDescriptionBox}>
                  <h3 className={styles.titleHover}>
                    How I used this skill
                  </h3>
                  <ul>
                    {skill.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
