import React from "react";
import "./HRDashboard.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HRLeave from "../components/Leave/HRLeave";
import HRsideBar from "../components/HRSideBar/HRsideBar";
import HRDBApplyLeave from "./HRDBApplyLeave";

const HRDBLeave =() => {
    return(
        <>
        <div className="HRDb-main">
            <div className="x"></div>
            <div className="hr-components">
                
                <div className="HrNav-main">
                    <div  className="HrNav-main2">
                    <HRsideBar/>
                    </div>
                </div>

                <div className="Hrdb-components2">
                <HRLeave/>
                </div>
               
            </div>
            

        </div>
        </>
    )
}

export default HRDBLeave;