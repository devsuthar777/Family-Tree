import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { createVillage } from '../../../redux/customActions.js/villageActions';

const CREATEVillagePopUp = ({setPopUpData}) => {
    
  const dispatch= useDispatch();
  const [data,setData] = useState("");

  const createHandler= (e)=>
  {
    const regex = /^[a-zA-Z]+$/;
    if(data=="") toast.info("Title can't be empty!");
    else if(!regex.test(data)) toast.info("Title must have charaters only!");
    else
    {
        dispatch(createVillage({title:data}));
        setPopUpData({type:'NONE',id:null})
    }

  }
  const changeHandler = (e)=>
  {
    setData(e.target.value);
  }

  return (
    <div className='CREATEVillagePopUp'>
        <div className='formDiv'>
            <p>Title</p>
            <input value={data} onChange={changeHandler} />
        </div>
        <div className='buttonDiv'>
        <button onClick={createHandler}>CREATE</button>
        <button onClick={()=>{setPopUpData({type:'NONE',id:null})}}>CLOSE</button>
        </div>
        
    </div>
  )
}

export default CREATEVillagePopUp