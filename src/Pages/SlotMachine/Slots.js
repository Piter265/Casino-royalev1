import React from "react";
import "./Slots.css";
import styles from "../Roulette/Roulette.module.css";

const {createRef, Component} = React;


class Slots extends Component {
    static defaultProps = {
        fruits: ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"]
    };

    constructor(props) {
        super(props);
        this.state = {fruit1: "🍒", fruit2: "🍒", fruit3: "🍒", rolling: false, win:false};

        // get ref of dic onn which elements will roll
        this.slotRef = [createRef(), createRef(), createRef()];
    }

    // to trigger roolling and maintain state
    roll = () => {
        this.setState({
            rolling: true
        });
        setTimeout(() => {
            this.setState({rolling: false});
        }, 700);

        // looping through all 3 slots to start rolling
        this.slotRef.forEach((slot, i) => {
            // this will trigger rolling effect
            const selected = this.triggerSlotRotation(slot.current);
            this.setState({[`fruit${i + 1}`]: selected});
        });

        if(this.state.fruit1 === this.state.fruit2 && this.state.fruit2 === this.state.fruit3){
            this.setState({win:true});
        }else {
            this.setState({win:false});
        }
        console.log(this.state.win)
    };

    // this will create a rolling effect and return random selected option
    triggerSlotRotation = ref => {
        function setTop(top) {
            ref.style.top = `${top}px`;
        }

        let options = ref.children;
        let randomOption = Math.floor(
            Math.random() * Slots.defaultProps.fruits.length
        );
        let choosenOption = options[randomOption];
        setTop(-choosenOption.offsetTop + 2);
        return Slots.defaultProps.fruits[randomOption];
    };


    render() {
        return (
            <div className="page_container">
                <div className="SlotMachine">

                    <div className="slot">
                        <section className="section">
                            <div className="container" ref={this.slotRef[0]}>
                                {Slots.defaultProps.fruits.map((fruit, i) => (
                                    <div key={i}>
                                        <span>{fruit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="slot">
                        <section className="section">
                            <div className="container" ref={this.slotRef[1]}>
                                {Slots.defaultProps.fruits.map(fruit => (
                                    <div>
                                        <span>{fruit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="slot">
                        <section className="section">
                            <div className="container" ref={this.slotRef[2]}>
                                {Slots.defaultProps.fruits.map(fruit => (
                                    <div>
                                        <span>{fruit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div
                        className={!this.state.rolling ? "roll rolling" : "roll"}
                        onClick={!this.state.rolling && this.roll}
                        disabled={this.state.rolling}
                    >
                        {this.state.rolling ? "Rolling..." : "ROLL"}
                    </div>
                    <section className="slotMachineAccountBalanceContainer">
                        <br/><br/><br/><span className="slotMachineAccountBalance">{this.props.accountBalance}</span>
                    </section>
                </div>
            </div>
        );
    }
}

export default Slots;