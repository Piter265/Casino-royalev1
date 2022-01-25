import React from "react";
import styles from "./About.module.css";

const About=()=>(
    <div className={styles.page_container}>
        <h1 className={styles.header}>Welcome in our casino!!!</h1>
        <p className={styles.description}>Welcome in place where you can play two interesting games!
        <br/>
            Enjoy!
        </p>
    </div>
);

export default About;