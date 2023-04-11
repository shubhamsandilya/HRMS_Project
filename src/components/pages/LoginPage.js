import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Adashboard from '../pages/Dashboard/Home'
import "./Login.css";
export default function Login(props) {
  let history = useHistory();
  let detail=props.detail
  let setDetail=props.setDetail;
  let a;
  console.log(detail);
  const [Crud, setCrud] = useState({
    email: "",
    pass: "",
  });

  const { email, pass } = Crud;

  const onInputChange = (e) => {
    setCrud({ ...Crud, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8081/loginuser`, Crud);
      if (Crud.email === "admin@gmail.com") {
      history.push("/dashboard",{params:Crud.email});
      
      } else {
        history.push("/employeedash",{params:Crud.email});
      }
    } catch {
      let a = document.getElementById("er");
      a.innerHTML = "Entered Wrong Cerdintals";
      a.style.color = "red";
      a.style.fontWeight = 700;
    }
        console.log(detail)
  };
  return (
    <>
      <div id="log-in">
      <div className="container" id="container">
		<div className="form-container log-in-container">
			<form onSubmit={(e) => onSubmit(e)}>
				<h1>Login</h1>
				
				<span>HRMS</span>
				<input name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)} type="email" placeholder="Email" />
				<input type="password" placeholder="Password" name="pass"
                      value={pass}
                      onChange={(e) => onInputChange(e)}/>
				<a href="#">Forgot your password?</a>
        <div id="er"></div>
				<button type="submit">Log In</button>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<h1>Centurion University</h1>
					<p>We help universities and colleges of all sizes and streams run better – from admissions to academics, back office to accreditations, desktop to mobiles – We empower students, faculty and management to collaborate efficiently and use insights effectively, benchmarking quality education while creating personalized learning experience</p>
				</div>
			</div>
		</div>
	</div>
      </div>

    </>
  );
}

/* <form className="type" onSubmit={(e) => onSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your e-mail address"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Pass" className="form-label">
                      Password
                    </label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your passsword"
                      name="pass"
                      value={pass}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div id="er"></div>
                  <div>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                    <Link className="btn btn-info mx-2" to="/">
                      Cancel
                    </Link>
                  </div>
                </form>*/