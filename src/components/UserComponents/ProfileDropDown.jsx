import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserInfo } from '../../slices/userSlice';
import { toast } from 'react-toastify';
const ProfileDropDown = () => {

    const {userInfo}= useSelector(state=>state.user);
    const dispatch =  useDispatch();
    const handleLogout = () => {
        localStorage.setItem("familyTree_UserInfo",null);
        dispatch(setUserInfo(null));
        toast.success("Logged out!");

    }   

  return (
    <div className="dropdownMenu">
    <ul>
      <li>
        <Link to="/profile">View Profile</Link>
      </li>
      <li>
      <Link to="/helpAndSupport">Help And Support</Link>
      </li>
      <li >
      <Link to="/profile" onClick={handleLogout}>Logout</Link>
      </li>
    </ul>
  </div>
  )
}

export default ProfileDropDown