import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './profile.css'

function Yourprofile() {
  const [Users, setUsers] = useState([]);
  let detail ={
    name: "",
    email: "",
    role: "",
    empid: "",
    username: "",
  };
  const location = useLocation();
  const myparam = location.state.params;
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  let az;
  for (let i = 0; i < Users.length; i++) {
    let userid = Users[i]?.id;
    if (Users[i]?.email === myparam) {
      az = userid;
    }
  }
  for (let i = 0; i < Users.length; i++) {
    // console.log(Users[i]?.id)
    if (Users[i]?.id === az) {
        detail.name=Users[i]?.name;
        detail.role=Users[i]?.role;
        detail.empid=Users[i]?.empid;
        detail.username=Users[i]?.username;
      detail.email =Users[i]?.email;
    }
  }
  console.log(detail);

  return( 
    <div class="card">
        <div class="card_background_img"></div>
        <div class="card_profile_img"></div>
        <div class="user_details">
            <h3>{detail.name}</h3>
            <p>{detail.role}</p>
        </div>
        <div class="card_count">
            <div class="count">
                <div class="fans">
                    <h3>{detail.username}</h3>
                    <p>User Name</p>
                </div>
                <div class="following">
                    <h3>{detail.email}</h3>
                    <p>Email</p>
                </div>
                <div class="post">
                    <h3>{detail.empid}</h3>
                    <p>Employee Id</p>
                </div>
            </div>
             <div class="btn">Follow</div>
        </div>
    </div>
  );
}

export default Yourprofile;
