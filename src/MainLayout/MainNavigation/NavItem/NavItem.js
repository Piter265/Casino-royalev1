import React from "react";
import styles from "./NavItem.module.css";
import {NavLink} from "react-router-dom";

const NavItem = ({href, description}) => (
    <li className={styles.list_item}>
        <NavLink exact to={href} className={styles.inactive_link} activeClassName={styles.inactive_link} act>
            {description}
        </NavLink>
    </li>
);

export default NavItem;
