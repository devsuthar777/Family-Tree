import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sideBarDiv'>
         <ul>
          <li><Link to="/dashboard/villages">Villages</Link></li>
          <li><Link to="/dashboard/lineages">Lineages</Link></li>
          <li><Link to="/dashboard/people">People</Link></li>
        </ul>
    </div>
  )
}

export default SideBar