import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import LoginPage from "./components/pages/LoginPage";
// import LoginPage from "./components/pages/r";
import HomePage from "./components/pages/HomePage";
import Payroll from "./components/Admin/Payroll";
import Reg from "./components/Applicant/Register";
import Complain from "./components/Admin/Complaints/Complain";
import ComplainAdd from "./components/Admin/Complaints/AddUser";
import ComplainEdit from "./components/Admin/Complaints/EditUser";
import ComplainView from "./components/Admin/Complaints/ViewUser";
import DashHome from "./components/pages/Dashboard/Home";
import Profile from "./components/pages/Dashboard/Yourprofile";

import "./App.css";
import Home from "./components/Admin/Leave/Home";
import AddUser from "./components/Admin/Leave/AddUser";
import EditUser from "./components/Admin/Leave/EditUser";
import ViewUser from "./components/Admin/Leave/ViewUser";
import Crud from "./components/Admin/Crud/Crud";
import Crudadd from "./components/Admin/Crud/AddUser";
import Crudedit from "./components/Admin/Crud/EditUser";
import Crudveiw from "./components/Admin/Crud/ViewUser";
import Job from "./components/Admin/Job_manuplation/Job";
import Jobadd from "./components/Admin/Job_manuplation/AddUser";
import Jobedit from "./components/Admin/Job_manuplation/EditUser";
import Jobveiw from "./components/Admin/Job_manuplation/ViewUser";
import ApplicantJobs from "./components/Applicant/ApplicantJobs";
//Employee
import Employeedash from "./components/Employee/DashBoard/Employeedash";
import Page404 from "./components/Employee/Page404/Page404";
import Viewprofile from "./components/Employee/Viewprofile/view";
import Viewsalary from "./components/Employee/Viewsalary/salary";
import Viewattendence from "./components/Employee/Viewattendence/View/View";
import Search from "./components/Employee/Viewattendence/attendance";
import Complaint from "./components/Employee/Complaint/AddUser";
import Applyleave from "./components/Employee/Applyleave/ApplyLeave";

export default function App() {
  const[detail,setDetail]=useState("")
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/login" component={LoginPage } detail={detail} setDetail={setDetail}/>
        <Route path="/home" component={HomePage} />
        <Route path="/reg" component={Reg} />
        <Route path="/dashboard" component={DashHome} detail={detail} setDetail={setDetail} />
        <Route path="/employeedash" component={Employeedash} />
        <Route path="/view1" component={Viewattendence} />
        <Route path="/view2" component={Viewprofile} />
        <Route path="/Complaints" component={Complaint} />
        <Route path="/complaintadd" component={ComplainAdd} />
        <Route path="/complaintedit" component={ComplainEdit} />
        <Route path="/complaintview" component={ComplainView} />
        <Route path="/Apply" component={Applyleave} />
        <Route path="/search" component={Search} />
        <Route path="/view" component={Viewsalary} />
        <Route path="/leavehome" component={Home} />
        <Route path="/adduser" component={AddUser} />
        <Route path="/edituser/:id" component={EditUser} />
        <Route path="/viewuser/:id" component={ViewUser} />
        <Route path="/crud" component={Crud} />
        <Route path="/crudadd" component={Crudadd} />
        <Route path="/crudedit/:id" component={Crudedit} />
        <Route path="/crudview/:id" component={Crudveiw} />
        <Route path="/job" component={Job} />
        <Route path="/applicantjobs" component={ApplicantJobs} />
        <Route path="/jobadd" component={Jobadd} />
        <Route path="/jobedit/:id" component={Jobedit} />
        <Route path="/jobview/:id" component={Jobveiw} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/complain" component={Complain} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
}
