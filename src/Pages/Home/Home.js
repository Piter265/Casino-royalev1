import React from "react";
import styles from "./Home.module.css";
import Backdrop from "../../Modal/Backdrop/Backdrop";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {CSSTransitionGroup} from 'react-transition-group';

const Home = (props) => {

    const [isPlayClicked, setClickPlay]=useState(false);
    const navigate = useNavigate();

    function clickPlay(){
        setClickPlay(true);
    }

    function clickRoulette(){
        navigate('/roulette');
    }

    function clickSlotMachine(){
        navigate('/slot-machine')
    }

    return (
        <div className={styles.page_container}>
            <header className={styles.header}><span>Casino Royale</span></header>
            <section className={styles.account_balance_container}>
                <p>Your account balance</p>
                <p className={styles.account_balance}>{props.accountBalance}</p>
            </section>
            <section className={styles.button_container}>
                {!isPlayClicked && <button className={styles.button_play} onClick={clickPlay}>Play</button>}
                {isPlayClicked && <button className={styles.button_roulette} onClick={clickRoulette}>Roulette</button>}
                {isPlayClicked && <button className={styles.button_slot_machine} onClick={clickSlotMachine}>Slot Machine</button>}
            </section>
        </div>
    )

};

export default Home;