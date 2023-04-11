import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
export default function EditUser() {
  let navigate = useHistory();

  const { id } = useParams();

  const [user, setUser] = useState({
    dsc: "",
    ctc: "",
    exp: "",
    title:""
  });

  const { dsc,ctc,exp,title } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  let showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "Alert successful",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        // Redirect the user
        // window.location.href = "/";
        navigate('/job');
      });
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Job</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter The Description of Job"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter The Description of Job"
                name="dsc"
                value={dsc}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                CTC Offeres
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter CTC Offered"
                name="ctc"
                value={ctc}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Exprience
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your exprience"
                name="exp"
                value={exp}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary" onClick={showAlert}>
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
