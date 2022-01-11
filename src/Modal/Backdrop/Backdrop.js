import React from "react";
import Modal from "../Modal";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {

    return (
        <div className={styles.background}>
            <Modal onConfirm={props.onConfirm}/>
        </div>
    );
}

export default Backdrop;