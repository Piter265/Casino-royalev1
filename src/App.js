import './App.css';
import MainLayout from "./MainLayout/MainLayout";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Roulette from "./Pages/Roulette/Roulette";
import SlotMachinePage from "./Pages/SlotMachine/SlotMachinePage";
import About from "./Pages/About/About";
import {useState} from "react";
import Backdrop from "./Modal/Backdrop/Backdrop";

const App = () => {

    const [isModalOpen, setModal] = useState(true);
    const [accountBalance, setAccountBalance] = useState(100);

    function personIsAdult() {
        setModal(false);
    }

    function onChangeAB(prize) {
        setAccountBalance(accountBalance+prize);
    }

    return (
        <MainLayout>
            {isModalOpen && <Backdrop onConfirm={personIsAdult}/>}
            <Routes>
                {!isModalOpen &&
                <>
                    <Route exact path="/" element={<Home accountBalance={accountBalance}/>}/>
                    <Route exact path="/roulette" element={
                        <Roulette accountBalance={accountBalance} onChangeAccountBalance={onChangeAB}/>}/>
                    <Route exact path="/slot-machine" element={<SlotMachinePage/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                </>
                }
            </Routes>
        </MainLayout>
    );

};

export default App;
