import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUserInfo } from '../../slices/userSlice';

const AdminProfileDropDown = () => {
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
        <Link to="dashboard/villages">Dashboard</Link>
      </li>
      <li >
      <Link to="/" onClick={handleLogout}>Logout</Link>
      </li>
    </ul>
  </div>
  )
}
export default AdminProfileDropDown