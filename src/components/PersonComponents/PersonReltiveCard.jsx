import React from 'react'
import { Link } from 'react-router-dom'

export const PersonReltiveCard = ({data}) => {
  return (
    <div className='PersonReltiveCard'>
      <img width={80} height={80} src={require("../../assets/images/dummyProfilepic.jpeg")}></img>
      {
        data ?  <Link to={`/people/${data._id}`}>{data.name}</Link> : "Data Not Available"
      }
      
    </div>
  )
}
