import React, {useState} from "react";
import styles from "./Card.module.css";

const Card = (props) => {

    return (
        <article className={styles.card_container}
                 style={{border: "4px dotted " + props.firstColor}}
        >
            <input type="checkbox" className={styles.checkbox}/>
            <div className={styles.text_container}
                 style={{backgroundColor: props.isCheckboxChecked ? props.firstColor : "rgba(245,222,179,0.4)"}}>
                <span style={{"color": "#FFF"}}>
                    {props.number}
                </span>
            </div>
        </article>
    )
}

export default Card;