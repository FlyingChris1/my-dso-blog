import React from "react";
import styles from "./ContactComponent.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <h2 className={styles.titleMedium}>Contact me</h2>
                <div className={styles.contactWhyMe}>
                    <div className={styles.contactFlex}>

                    <ul>
                        I’m always open to discussing new opportunities, projects ,or collaborations. If you’re looking for a motivated professional who enjoys learning, improving systems, and contributing reliably to a team, feel free to get in touch.
                    </ul>


                    <div className={styles.contactContactData}>
                        <div className={styles.contactContactDataDetail}>
                            <img src="img/contact/mail.png" alt="mail" />
                            <a className={styles.aContact} href="mailto:christopherschuf2000@gmail.com">
                                christopherschuf2000@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
