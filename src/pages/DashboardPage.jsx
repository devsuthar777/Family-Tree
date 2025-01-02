import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/DashboardComponents/SideBar'
import "../assets/styles/dashboard.css"

const DashboardPage = () => {
  return (
    <div className='dashBoardDiv'>
         <SideBar />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
       
          <Outlet />
       
      </div>
    </div>
  )
}

export default DashboardPage