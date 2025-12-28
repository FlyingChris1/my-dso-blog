import React from "react";
import "./index.module.css";
import HeroComponent from "@site/src/components/HeroComponent/HeroComponent";
import MySkills from "@site/src/components/MySkillsComponent/MySkillsComponent";
import MyProjects from "@site/src/components/MyProjectComponent/MyProjectComponent";
import Contact from "@site/src/components/ContactComponent/ContactComponent";
import Footer from "@site/src/components/FooterComponent/FooterComponent";

export default function Render() {
  return (
    <section className="about-me">
      <div className="hero-section">
        <div className="content">
          <HeroComponent />
        </div>
      </div>


<MySkills
          skills={[
            {
              label: "HTML",
              imagePath: "img/skills/HTML.png",
              imagePathRespo: "img/skills/HTML.png",
              descriptions: [
                "Builds the structure of web pages",
                "Organizes content for browsers",
                "Works seamlessly with CSS and JavaScript"
              ]
            },
            {
              label: "CSS",
              imagePath: "img/skills/CSS.png",
              imagePathRespo: "img/skills/respo/CSS.png",
              descriptions: [
                "Shapes the visual appearance of websites",
                "Controls layout, typography, and colors",
                "Enables flexible designs for different screens"
              ]
            },
            {
              label: "Docusaurus",
              imagePath: "img/skills/Docusaurus.png",
              imagePathRespo: "img/skills/respo/Docusaurus.png",
              descriptions: [
                "Creates clear and organized documentation sites",
                "Supports Markdown content out of the box",
                "Simplifies version control and theming"
              ]
            },
            {
              label: "Python",
              imagePath: "img/skills/Python.png",
              imagePathRespo: "img/skills/respo/Python.png",
              descriptions: [
                "Versatile language for many types of projects",
                "Perfect for automation and scripting tasks",
                "Extensive ecosystem of libraries and frameworks"
              ]
            },
            {
              label: "Shell scripting",
              imagePath: "img/skills/Terminal.png",
              imagePathRespo: "img/skills/respo/Terminal.png",
              descriptions: [
                "Automates repetitive terminal tasks",
                "Utilizes loops, conditions, and variables",
                "Ideal for Linux and Unix systems"
              ]
            },
            {
              label: "YAML",
              imagePath: "img/skills/YAML.png",
              imagePathRespo: "img/skills/respo/YAML.png",
              descriptions: [
                "Human-friendly format for structured data",
                "Commonly used in configuration files",
                "Supports CI/CD pipelines and deployment setups"
              ]
            },
            {
              label: "Container",
              imagePath: "img/skills/Docker.png",
              imagePathRespo: "img/skills/respo/Docker.png",
              descriptions: [
                "Packages apps with all dependencies included",
                "Ensures consistent runtime across environments",
                "Lightweight alternative to full virtual machines"
              ]
            },
            {
              label: "CI/CD with Github Actions",
              imagePath: "img/skills/Actions.png",
              imagePathRespo: "img/skills/respo/Actions.png",
              descriptions: [
                "Automates development workflows",
                "Simplifies building, testing, and deployment",
                "Fully integrated with GitHub repositories"
              ]
            },
            {
              label: "IT Security",
              imagePath: "img/skills/Security.png",
              imagePathRespo: "img/skills/respo/Security.png",
              descriptions: [
                "Safeguards systems and sensitive data",
                "Applies best practices and security policies",
                "Detects and responds to potential threats"
              ]
            },
          ]}
        />


      <MyProjects
        projects={[
          {
            label: "Minecraft Container",
            imagePath: "img/projects/projects/Minecraft.png",
            description: "The goal of the project is to build a custom Docker image without using prebuilt Minecraft images and to run the server using Docker Compose.",
            githubUrl: "https://github.com/FlyingChris1/Minecraft-Server-Container",
            docsUrl: "docs/projects/minecraft-Server",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
              { label: "YAML", imagePath: "img/projects/YAML.png" },
            ],
            tagsResponsive: [
              { label: "Shell Scripting", imagePath: "img/projects/respo/Shell.png" },
              { label: "Docker", imagePath: "img/projects/respo/Container.png" },
              { label: "YAML", imagePath: "img/projects/respo/YAML.png" },
            ],
          },
          {
            label: "Juice Shop Master",
            imagePath: "img/projects/projects/juiceshop.png",
            description:
              "The goal is to show the vulnerabilities of websites and show you how people could abuse them to get to your information or even build in code that is not supposed to be on your website.",
            githubUrl: "https://github.com/FlyingChris1/my-dso-blog/tree/main/docs/projects/Juice-Shop-Master",
            docsUrl: "docs/projects/Juice-Shop-Master/overview",
            tags: [
              { label: "Python", imagePath: "img/projects/Python.png" },
              { label: "IT Security", imagePath: "img/projects/ITSec.png" },
            ],
            tagsResponsive: [
              { label: "Python", imagePath: "img/projects/respo/Python.png" },
              { label: "IT Security", imagePath: "img/projects/respo/ITSec.png" },
            ],
          },
          {
            label: "Wordpress Container",
            imagePath: "img/projects/projects/Wordpress.png",
            description:
              "The goal is to  provide a Docker-based WordPress environment consisting of a WordPress container and a MySQL database container.",
            githubUrl: "https://github.com/FlyingChris1/Wordpress-SQL-Container",
            docsUrl: "docs/projects/Wordpress",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
            ],
            tagsResponsive: [
              { label: "Shell Scripting", imagePath: "img/projects/respo/Shell.png" },
              { label: "Docker", imagePath: "img/projects/respo/Container.png" },
            ],
          },
          {
            label: "Conduit Deployment",
            imagePath: "img/projects/projects/Conduit.png",
            description:
              "The project aims to provide a reproducible and scalable environment for running Conduit, with persistent data storage and automated deployment workflows.",
            githubUrl: "https://github.com/FlyingChris1/Conduit-Deployment",
            docsUrl: "docs/projects/Conduit-Deployment",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
              { label: "YAML", imagePath: "img/projects/YAML.png" },
              { label: "CD", imagePath: "img/projects/CD.png" },
            ],
            tagsResponsive: [
              { label: "Shell Scripting", imagePath: "img/projects/respo/Shell.png" },
              { label: "Docker", imagePath: "img/projects/respo/Container.png" },
              { label: "YAML", imagePath: "img/projects/respo/YAML.png" },
              { label: "CD", imagePath: "img/projects/respo/CD.png" },
            ],
          },
        ]}
      />


      <Contact />
      <Footer />
    </section>
  );
}
