import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllVillages } from '../../../redux/customActions.js/villageActions';
import VillageTable from './VillageTable';

const CRUDVillages = () => {

  const [viewFlag,setViewFlag] = useState(true);
  
  
  const dispatch = useDispatch();
  const {villages,loading} = useSelector(state=>state.village)
  useEffect(()=> {
     dispatch(fetchAllVillages());  
  },[])



  return (
    <div className='CRUDVillagesDiv'>
        <div className='CRUDVillages_nav'>
            <button className={`${viewFlag && 'active'}`} onClick={()=> setViewFlag(state => !state)}>VIEW</button>
            <button className={`${!viewFlag && 'active'}`} onClick={()=> setViewFlag(state => !state)}>CREATE</button>
        </div>
        <div className='CRUDVillages_main'>
        {
          loading ? <div className='loader'></div> :
          <div className='CRUDVillages_table'>
              <VillageTable data={villages}/>
            </div>
            
        }
        </div>
    </div>
  )
}

export default CRUDVillages