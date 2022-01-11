import React from "react";
import NavItem from "./NavItem/NavItem"
import styles from "./MainNavigation.module.css";

const MainNavigation=()=>(
    <nav className={styles.nav_bar}>
        <ul className={styles.nav_list}>
            <NavItem href='/' description="Home"/>
            <NavItem href='/roulette' description="Roulette"/>
            <NavItem href='/slot-machine' description="Slot Machine"/>
            <NavItem href='/about' description="About"/>
        </ul>
    </nav>
);

export default MainNavigation;