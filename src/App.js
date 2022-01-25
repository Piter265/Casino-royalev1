import React from "react";
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

class App extends React.Component{

    state={
        isModalOpen:true,
    }

     componentDidMount=()=>{
        sessionStorage.setItem("AccountBalance", "100");
     }

     personIsAdult(){
        this.setState({isModalOpen:false})
     }

     render() {
         return (
             <MainLayout>
                 {this.state.isModalOpen && <Backdrop onConfirm={this.personIsAdult.bind(this)}/>}
                 <Routes>
                     {!this.state.isModalOpen &&
                     <>
                         <Route exact path="/" element={<Home/>}/>
                         <Route exact path="/roulette" element={<Roulette/>}/>
                         <Route exact path="/slot-machine" element={<SlotMachinePage/>}/>
                         <Route exact path="/about" element={<About/>}/>
                         <Route path="*" element={<Error/>}/>
                     </>
                     }
                 </Routes>
             </MainLayout>
         );
     }
};

export default App;
