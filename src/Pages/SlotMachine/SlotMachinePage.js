import React, {useState} from "react";
import styles from "./SlotMachine.module.css";
import SlotMachine from "react-slot-machine-gen";

const SlotMachinePage = () => {

    const reels = [
        {
            imageSrc: 'path/to/image.png',
            symbols: [
                {
                    title: 'cherry',
                    position: 100,
                    weight: 2
                },
                {
                    title: 'plum',
                    position: 300,
                    weight: 6
                },
                {
                    title: 'orange',
                    position: 500,
                    weight: 5
                },
                {
                    title: 'bell',
                    position: 700,
                    weight: 1
                },
                {
                    title: 'cherry',
                    position: 900,
                    weight: 3
                },
                {
                    title: 'plum',
                    position: 1100,
                    weight: 5
                },
            ]
        }
    ]

    const[play, setPlay] = useState(false);

    return (
        <div className={styles.page_container}>
            <SlotMachine reels={reels} play={play}/>
            <input type="text"/>
            <button onClick={()=>{
                setPlay(true);
            }}>Play</button>
        </div>
    )

}

export default SlotMachinePage;