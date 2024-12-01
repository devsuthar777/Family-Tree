import React from 'react'
import { useAgeCalculator } from '../../hooks/peopleHook'
import { FaRegEye } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GrLike } from "react-icons/gr";

const PersonIntroCard = ({data}) => {

  const navigate = useNavigate();

  return (
    <div className='cardIntroContainer'>
        <div className='sideRectangle'></div>
        <div className='internalCard'>
            <img src={require("../../assets/images/dummyProfilepic.jpeg")} className='profilePhotoDiv'></img>
            <div>
              <h2>{data.name} {data.father?.name ? " s/o "+data.father?.name : "" } </h2>
              <div className='shortDetailContainer'>
                  <div>
                      <p>Village : <span className='heighLightShortInfo'>{data.nativePlace?.title ? data.nativePlace?.title : "Unknown"}</span></p>
                      <p>Age : {<span className='heighLightShortInfo'>{useAgeCalculator(data.dob)}</span>}</p>
                  </div>
                  <div>
                      <p>Gotra : <span className='heighLightShortInfo'>{data.lineage?.title ? data.lineage?.title : "Unknown"}</span></p>
                      <p>Naniyal : <span className='heighLightShortInfo'>{data.maternalPlace?.title ? data.maternalPlace?.title : "Unknown"}</span></p>
                  </div>
              </div>
            </div>
            <div className='likeViewContainer'>
                <button className='likeViewButton' onClick={()=> {navigate(`/people/${data._id}}`)}}><span>View</span><FaRegEye/></button>
                <button className='likeViewButton'><span>Like </span><GrLike/></button>
            </div>
        </div>
    </div>
  )
}

export default PersonIntroCard