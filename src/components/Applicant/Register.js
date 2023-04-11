import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";

export default function AddUser() {
  const [files, setFiles] = useState("");
  //state for checking file size
  const [fileSize, setFileSize] = useState(true);
  // for file upload progress message
  const [fileUploadProgress, setFileUploadProgress] = useState(false);
  //for displaying response message
  const [fileUploadResponse, setFileUploadResponse] = useState(null);
  //base end point url
  const FILE_UPLOAD_BASE_ENDPOINT = "http://localhost:8282";

  const uploadFileHandler = (event) => {
    setFiles(event.target.files);
  };

  const fileSubmitHandler = (event) => {
    event.preventDefault();
    setFileSize(true);
    setFileUploadProgress(true);
    setFileUploadResponse(null);

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      if (files[i].size > 50024) {
        setFileSize(false);
        setFileUploadProgress(false);
        setFileUploadResponse(null);
        return;
      }

      formData.append(`files`, files[i]);
    }

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(FILE_UPLOAD_BASE_ENDPOINT + "/upload", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message
          const error = (data && data.message) || response.status;
          setFileUploadResponse(data.message);
          return Promise.reject(error);
        }

        console.log(data.message);
        setFileUploadResponse(data.message);
      })
      .catch((error) => {
        console.error("Error while uploading file!", error);
      });
    setFileUploadProgress(false);
  };
  let navigate = useHistory();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    gender:"",
  });

  const { name, username, email, gender } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    
    navigate('/');
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
          <h2 className="text-center m-4">Applicant Information</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
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
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Gender"
                name="gender"
                value={gender}
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
          <form onSubmit={fileSubmitHandler}>
            <div className="mb-3">
      <input class="form-control form-control-lg" id="formFileLg" type="file" multiple onChange={uploadFileHandler}/>
      <div class="small text-muted mt-2">Upload your CV</div>
      <button className="btn btn-outline-danger" type="submit">Upload</button>
      {!fileSize && <p style={{ color: "red" }}>File size exceeded!!</p>}
      {fileUploadProgress && <p style={{ color: "red" }}>Uploading File(s)</p>}
      {fileUploadResponse != null && (
        <p style={{ color: "green" }}>{fileUploadResponse}</p>
      )}
      </div>
    </form>
        </div>
      </div>
    </div>
  );
}
