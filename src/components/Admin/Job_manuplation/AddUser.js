import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
export default function AddUser() {
  let navigate = useHistory();

  const [user, setUser] = useState({
    dsc: "",
    exp: "",
    ctc: "",
    title:""
  });

  const { dsc, exp,ctc,title } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };
  function HandleClick() {  
    Swal.fire({  
      title: 'Success',  
      type: 'success',  
      text: 'Your work has been saved.',  
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Job</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Job Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Job Title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Dsc
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Job description"
                name="dsc"
                value={dsc}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                exp
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Experience Required"
                name="exp"
                value={exp}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                CTC Offered
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the amount offered"
                name="ctc"
                value={ctc}
                onChange={(e) => onInputChange(e)}
              />
              </div>
            <button type="submit" className="btn btn-outline-primary" onClick={HandleClick}>
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
