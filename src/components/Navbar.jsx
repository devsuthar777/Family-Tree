import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import dummyprofile from "../assets/images/dummy-profile.png";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import ProfileDropDown from "./UserComponents/ProfileDropDown";
import AdminProfileDropDown from "./UserComponents/AdminProfileDropDown";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [profileDropDownFlag, setProfileDropDownFlag] = useState(false);

  const dropdownRef = useRef(null); // Ref for the dropdown container

  const handleOutsideClick = (event) => {
    // Check if the clicked element is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropDownFlag(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logoTitleDiv">
        <Link to="/">
          <img
            src={require("../assets/images/familyTreeLogo.jpg")}
            width={50}
            height={50}
            className="logo"
            alt="logo"
          ></img>
        </Link>
        <span>Family Tree</span>
      </div>

      <div>
        <ul className="linksList">
          <li>
            <Link to="people">People</Link>
          </li>
          <li>
            <Link to="lineage">Gotras</Link>
          </li>
          <li>
            <Link to="village">Villages</Link>
          </li>
        </ul>
      </div>

      {!userInfo?.token ? (
        <div className="loginDiv">
          <Link to={"/login"}>Sign In</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      ) : (
        <div
          className="userProfileDiv"
          onClick={() => {
            setProfileDropDownFlag((flag) => !flag);
          }}

          ref={dropdownRef}
        >
          <img src={dummyprofile} className="userProfileImg" alt="profileImg" />

          {profileDropDownFlag ? (
            <RiArrowUpSFill className="arrow-profile" />
          ) : (
            <RiArrowDownSFill className="arrow-profile" />
          )}

          {profileDropDownFlag && (
           
            userInfo.userType ==="Admin" ? <AdminProfileDropDown/> : <ProfileDropDown/>
           
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
