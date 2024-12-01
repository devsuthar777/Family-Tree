import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllPeople } from '../redux/customActions.js/peopleActions';
import PersonIntroCard from '../components/PersonComponents/PersonIntroCard';
import "../assets/styles/people.css"
const PeoplePage = () => {
  const dispatch =useDispatch();
  const {peopleList,error,loading} =  useSelector(state => state.people);
  useEffect(()=> {
    
    if(!peopleList) {
      dispatch(fetchAllPeople());
    }

  },[]);

  return (
    <div className='peoplePageContainer'>
      {
        loading ? <p>Loading.....</p> : 
        (error ? <p>Error Occured!</p> : 
        <div className='PeronIntroCardList'>
        {
          peopleList.map(data => <PersonIntroCard key={data._id} data={data}/>)
        }
        </div>)
      }
    </div>
  )
}

export default PeoplePage;