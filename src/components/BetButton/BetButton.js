import React from "react";
import styles from "./BetButton.module.css";

const BetButton=(props)=>{

    return(
        <button disabled={props.disabled} style={{backgroundColor:props.firstColor}} className={styles.button} onClick={props.action}>
            {props.text}
        </button>
    )
}

export default BetButton;