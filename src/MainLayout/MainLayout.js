import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation"
import styles from "./MainLayout.module.css";

const MainLayout = (props) => (
    <div>
        <MainNavigation/>
        <main>
            {props.children}
        </main>
        <footer className={styles.footer}>
            <span className={styles.footer_content}>Casino Royale © 2021</span>
        </footer>
    </div>
);

export default MainLayout;

