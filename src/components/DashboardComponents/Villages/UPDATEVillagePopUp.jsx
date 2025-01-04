import React, { useState } from 'react'

const UPDATEVillagePopUp = ({popUpData,setPopUpData}) => {

    const [data,setdata]= useState(popUpData.title);

  const changeHandler = (e) => {
    setdata(e.target.value);
  } 

  return (
    <div className='UPDATEVillagePopUp'>
    <div className='formDiv'>
        <p>Title </p>
        <input value={data} onChange={changeHandler}/>
    </div>
    <div className='buttonDiv'>
        <button>UPDATE</button>
        <button onClick={()=>{setPopUpData({type:'NONE',id:null})}}>CLOSE</button>
    </div>
</div>
  )
}

export default UPDATEVillagePopUp