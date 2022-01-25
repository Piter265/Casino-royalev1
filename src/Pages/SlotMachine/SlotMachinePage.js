import React, {useState} from "react";
import styles from "./SlotMachinePage.module.css";
import Slots from "./Slots";

const SlotMachinePage = () => {

    const [play, setPlay] = useState(false);

    return (
            <Slots/>
    )

}

export default SlotMachinePage;