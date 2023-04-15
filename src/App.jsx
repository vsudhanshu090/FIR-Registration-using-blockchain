import React from "react";
import Header from "./components/Header";
import Complaint from "./components/Complaint";
import { Route, Routes } from "react-router-dom";
import { useContract, useContractRead } from "@thirdweb-dev/react";

const App = () => {
    return (
        <div>
            <Header/>
            <Complaint/>
        </div>
    )
}

export default App;