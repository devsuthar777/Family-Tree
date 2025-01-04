import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllVillages } from '../../../redux/customActions.js/villageActions';
import VillageTable from './VillageTable';
import CREATEVillagePopUp from './CREATEVillagePopUp';
import UPDATEVillagePopUp from './UPDATEVillagePopUp';

const CRUDVillages = () => {

  const [popUpData,setPopUpData]=useState({type:'NONE',id:null});
  const dispatch = useDispatch();
  const {villages,loading} = useSelector(state=>state.village)
  useEffect(()=> {
     dispatch(fetchAllVillages());  
  },[])



  return (
    <div className='CRUDVillagesDiv'>
        
        <div className='CRUDVillages_main'>
        {
          loading ? <div className='loader'></div> :
              <VillageTable data={villages} setPopUpData={setPopUpData}/>
        }
        </div>
        <div className='CRUDVillages_nav'>
            <button onClick={()=>{setPopUpData({...popUpData,type:"CREATE"})}}>CREATE</button>
        </div>
        {
          popUpData.type != "NONE" ? <div className='PopUpContainer'>
          {
            popUpData.type =="CREATE" ? <CREATEVillagePopUp setPopUpData={setPopUpData} /> : <UPDATEVillagePopUp popUpData={popUpData} setPopUpData={setPopUpData}/>
          }
          </div>
          :
          (<></>) 
        }
        
    </div>
  )
}

export default CRUDVillages