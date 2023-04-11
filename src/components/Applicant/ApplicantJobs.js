// import React from 'react'
// import{Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import './applicantJob.css';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Careers() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  return (
    <>
      <center style={{ backgroundColor: "lightsalmon" }}>
        <h2>Jobs Section</h2>
      </center>
      <div className="Wrapper" id='wrapper'>
      {users.map((user) => (
        <div className="card " id="job-box">
          <div className="card-header" style={{ backgroundColor: "lightpink" }}>
            JOBID{user.id}
          </div>
          <div className="card-body" style={{ backgroundColor: "DarkSeaGreen" }}>
            <h5 className="card-title">{user.title}</h5>
            <p className="card-text">{user.dsc}</p>
            <p className="card-text">Work Epxperience{user.exp}</p>
            <p className="card-text">CTC-{user.ctc}</p>
            <Link to="/reg" className="btn btn-primary  apply-butt">
              Apply
            </Link>
          </div>
        </div>     
      ))}
      </div>
    </>
  );
}
