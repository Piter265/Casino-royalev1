import React, {useState} from "react";
import styles from "./Roulette.module.css"
import {Wheel} from "react-custom-roulette";
import Card from "../../components/Card/Card";
import BetButton from "../../components/BetButton/BetButton";

class Roulette extends React.Component {

    colors = {
        green: "#122807",
        red: "#540808",
        black: "#000000",
    }

    data = [
        {option: '0', style: {backgroundColor: this.colors.green, textColor: 'white'}},
        {option: '32', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '15', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '19', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '4', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '21', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '2', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '25', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '17', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '34', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '6', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '27', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '13', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '36', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '11', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '30', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '8', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '23', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '10', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '5', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '24', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '16', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '33', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '1', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '20', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '14', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '31', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '9', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '22', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '29', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '18', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '7', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '28', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '12', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '35', style: {backgroundColor: this.colors.black, textColor: 'white'}},
        {option: '3', style: {backgroundColor: this.colors.red, textColor: 'white'}},
        {option: '26', style: {backgroundColor: this.colors.black, textColor: 'white'}},
    ]

    state = {
        spin: false,
        prizeNumber: 0,
        isFirst12Checked: false,
        isSecond12Checked: false,
        isThird12Checked: false,
        isFirst18Checked: false,
        isSecond18Checked: false,
        isEvenChecked: false,
        isOddChecked: false,
        isBlackChecked: false,
        isRedChecked: false,
        accountBalance:100,
        bet:0,
    }

    spinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * this.data.length);
        this.setState({
            prizeNumber: newPrizeNumber

        })
        this.setState(
            {
                spin: true,
            })
        let newAccountBalance = sessionStorage.getItem("AccountBalance") - this.state.bet;

        if(newAccountBalance>=0){
            sessionStorage.setItem("AccountBalance", newAccountBalance.toString());
        }
    };

    getSecondColor = (color) => {
        if (color === "#122807") {
            return "rgba(39,87,16,0.5)"
        } else if (color === "#540808") {
            return "rgba(189,21,21,0.5)"
        } else if (color === "#000000") {
            return "rgba(0,0,0,0.5)"
        }
    }


    isCardChecked = (number, color) => {
        if (this.state.isFirst12Checked && number >= 1 && number <= 12) {
            return true;
        } else if (this.state.isSecond12Checked && number > 12 && number <= 24) {
            return true;
        } else if (this.state.isThird12Checked && number > 24 && number <= 36) {
            return true;
        } else if (this.state.isFirst18Checked && number >= 1 && number <= 18) {
            return true;
        } else if (this.state.isSecond18Checked && number > 18 && number <= 36) {
            return true;
        } else if (this.state.isEvenChecked && number % 2 === 0 && number !== 0) {
            return true;
        } else if (this.state.isOddChecked && number % 2 !== 0 && number !== 0) {
            return true;
        } else if (this.state.isBlackChecked && color === "#000000") {
            return true;
        } else if (this.state.isRedChecked && color === "#540808") {
            return true;
        }
    }

    uncheckCheckboxes = () => {
        this.setState({isFirst12Checked: false});
        this.setState({isSecond12Checked: false});
        this.setState({isThird12Checked: false});
        this.setState({isFirst18Checked: false});
        this.setState({isSecond18Checked: false});
        this.setState({isEvenChecked: false});
        this.setState({isOddChecked: false});
        this.setState({isBlackChecked: false});
        this.setState({isRedChecked: false});

    }


    computeWin=()=>{
        if(this.checkIfWin()){
            let newAccountBalance = parseInt(sessionStorage.getItem("AccountBalance")) + parseInt(this.state.bet)*2;
            if(newAccountBalance>=0){
                sessionStorage.setItem("AccountBalance", newAccountBalance.toString());
            }
            return;
        }
    }

    checkIfWin=()=>{
        let num = this.data[this.state.prizeNumber];
        if (this.state.isFirst12Checked && num.option >= 1 && num.option <= 12) {
        } else if (this.state.isSecond12Checked && num.option > 12 && num.option <= 24) {
        } else if (this.state.isThird12Checked && num.option > 24 && num.option <= 36) {
        } else if (this.state.isFirst18Checked && num.option >= 1 && num.option <= 18) {
        } else if (this.state.isSecond18Checked && num.option > 18 && num.option <= 36) {
        } else if (this.state.isEvenChecked && num.option % 2 === 0 && num.option !== 0) {
        } else if (this.state.isOddChecked && num.option % 2 !== 0 && num.option !== 0) {
        } else if (this.state.isBlackChecked && num.style.backgroundColor === "#000000") {
        } else if (this.state.isRedChecked && num.style.backgroundColor === "#540808") {
        }else {
            return false;
        }
        return true;
    }

//

    render() {
        return (
            <div className={styles.page_container}>
                <section className={styles.roulette_container}>
                    <div className={styles.wheel}>
                        <Wheel
                            mustStartSpinning={this.state.spin}
                            prizeNumber={this.state.prizeNumber}
                            data={this.data}
                            textColors={['#ffffff']}
                            outerBorderColor={['#484848']}
                            outerBorderWidth={["15"]}
                            radiusLineColor={["#735521"]}
                            radiusLineWidth={[1]}
                            fontSize={[15]}
                            perpendicularText={[true]}
                            onStopSpinning={() => {
                                this.setState({spin: false})
                                this.computeWin()
                            }
                            }
                        />
                    </div>
                    <button className={styles.spin_button} onClick={this.spinClick} disabled={this.state.spin} >Spin</button>
                </section>
                <section className={styles.label_prize_container}>
                    <header className={styles.win_information}
                            style={{color: this.checkIfWin()? "green" : "darkred"}}>
                        {!this.state.spin &&<span>
                            {this.checkIfWin() ? "You win" : "You loss"}
                        </span>}

                    </header>

                </section>
                <div className={styles.board_bet_container}>
                    <BetButton text="1st 12"
                               firstColor="#796822FF"
                               disabled={this.state.spin}
                               action={
                                   () => {
                                       this.uncheckCheckboxes();
                                       this.setState({isFirst12Checked: true})
                                   }}/>
                    <BetButton text="2nd 12"
                               firstColor="#796822FF"
                               disabled={this.state.spin}
                               action={() => {
                                   this.uncheckCheckboxes();
                                   this.setState({isSecond12Checked: true})
                               }}
                    />
                    <BetButton text="3rd 12"
                               firstColor="#796822FF"
                               disabled={this.state.spin}
                               action={()=>{
                                   this.uncheckCheckboxes();
                                   this.setState({isThird12Checked: true})
                               }}
                    />
                    <BetButton text="1 - 18"
                               firstColor="#b36b00"
                               disabled={this.state.spin}
                               action={()=>{
                                   this.uncheckCheckboxes();
                                   this.setState({isFirst18Checked: true})
                               }}
                    />
                    <BetButton text="EVEN"
                               firstColor="#392673"
                               disabled={this.state.spin}
                               action={()=>{
                                   this.uncheckCheckboxes();
                                   this.setState({isEvenChecked: true})
                               }}
                    />
                    <BetButton text="Red"
                               firstColor="#540808"
                               disabled={this.state.spin}
                               action={()=>{
                                   this.uncheckCheckboxes();
                                   this.setState({isRedChecked: true})
                               }}
                    />
                    <BetButton text="Black"
                               firstColor="#000000"
                               disabled={this.state.spin}
                               action={()=>{
                                   this.uncheckCheckboxes();
                                   this.setState({isBlackChecked: true})
                               }}
                    />
                    <BetButton text="ODD"
                               firstColor="#392673"
                               disabled={this.state.spin}
                               action={()=>{
                                   this.uncheckCheckboxes();
                                   this.setState({isOddChecked:true})
                               }}
                    />
                    <BetButton text="19 - 36"
                               firstColor="#b36b00"
                               disabled={this.state.spin}
                               action={()=>{
                                   this.uncheckCheckboxes();
                                   this.setState({isSecond18Checked: true})
                               }}
                    />

                </div>
                <div className={styles.board_container}>
                    {[...this.data].sort((a, b) => a.option - b.option).map(element =>
                        <Card isCheckboxChecked={this.isCardChecked(element.option, element.style.backgroundColor)}
                              number={element.option} key={element.option}
                              firstColor={element.style.backgroundColor}
                              secondColor={this.getSecondColor(element.style.backgroundColor)}/>)}
                </div>
            </div>
        )
    }
};

export default Roulette;


