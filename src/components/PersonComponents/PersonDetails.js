import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPersonViewDetails } from '../../redux/customActions.js/peopleActions';
import { useDispatch, useSelector } from 'react-redux';

const PersonDetails = () => {

    const {id} = useParams();
    const dispatch =useDispatch();
    const {error,loading,} =  useSelector(state => state.people);
    useEffect(()=> {
    
      dispatch(fetchPersonViewDetails(id));
    

  },[]);

  return (
    <div>PersonDetails</div>
  )
}

export default PersonDetails