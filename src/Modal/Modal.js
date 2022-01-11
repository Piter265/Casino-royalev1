import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {

    return (
        <div className={styles.modal_container}>
            <section className={styles.text_container}>
                <header className={styles.header}><h1>Warning!!!</h1></header>
                Are you 18 years old?
            </section>
            <section className={styles.button_container}>
                <button className={styles.button_no}>No</button>
                <button className={styles.button_yes} onClick={props.onConfirm}>Yes</button>
            </section>
        </div>
    )
}

export default Modal;