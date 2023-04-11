import React, { useState } from "react";
import {
  IoIosContact,
  IoMdBookmark,
  IoMdCall,
  IoMdChatboxes,
  IoMdClipboard,
  IoMdClose,
  IoMdHammer,
  IoMdHome,
  IoMdImage,
  IoMdMenu,
  IoMdPerson,
} from "react-icons/io";
import { Link ,useHistory} from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  let history=useHistory();
  const [active, setActive] = useState(false);
  let email = props.email;
  console.log(email);
  const activateNav = () => {
    setActive(!active);
  };
function sendemail(){
history.push("/profile",{params:email})
}
  return (
    <div className={active ? "header" : "header-mobile"}>
      <div className="menu-icon" onClick={activateNav}>
        {!active ? (
          <IoMdMenu className="menu" />
        ) : (
          <IoMdClose className="menu" />
        )}
      </div>

      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <li>
            <IoIosContact className="icon" />
            <Link to="/crud">Employee</Link>
          </li>

          <li>
            <IoMdBookmark className="icon" />
            <Link to="/leavehome">Leave</Link>
          </li>

          <li>
            <IoMdPerson className="icon" />
            <Link to="/job">Manage Job</Link>
          </li>

          <li>
            <IoMdHome className="icon" />
            <Link to="/leavereport">Leave Report</Link>
          </li>

          <li>
            <IoMdChatboxes className="icon" />
            <Link to="/complain">Fix Complain</Link>
          </li>

          <li>
            <IoMdCall className="icon" />
            <Link  onClick={sendemail}>Your Profile</Link>
          </li>

          <li>
            <IoMdHammer className="icon" />
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
