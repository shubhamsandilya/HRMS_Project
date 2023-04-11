import Header from "./Header";
import { useLocation ,useHistory,Link } from "react-router-dom";
import "./Home.css";
import React, { useState } from "react";
const Home = (props) => {
  const location = useLocation();
  const myparam = location.state.params;

  // console.log(myparam);

  return (
    <div className="home">
      <Header email={myparam}/>
      <h1>{props.detail}</h1>
    </div>
  );
};

export default Home;
