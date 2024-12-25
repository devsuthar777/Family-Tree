import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPersonViewDetails } from '../../redux/customActions.js/peopleActions';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdPerson } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useAgeCalculator } from '../../hooks/peopleHook';
import { PersonReltiveCard } from './PersonReltiveCard';
import { setLoading,setPersonViewDetails } from '../../slices/peopleSlice';
const PersonDetails = () => {

    const {id} = useParams();
    const dispatch =useDispatch();
    const {error,loading,personViewDetails} =  useSelector(state => state.people);
    const age =  useAgeCalculator(personViewDetails?.dob);
    
    useEffect(()=> { 
    
     
      dispatch(setLoading(true));
      dispatch(setPersonViewDetails(null));
      dispatch(fetchPersonViewDetails(id));
    

  },[id]);

  return (
    <div className='PersonContainer'>
        {
            loading || !personViewDetails ? <p>Loading....</p> :(
                <div className='PersonInternalContainer'>
                    <div className='PersonHeadline'><div className='profileIconParent'><IoMdPerson className='profileIcon'/> <span> Person Details</span></div>  <button><MdCancel/></button> </div>
                    <div className='PersonBodyDetails'>
                        <div style={{display: 'flex'}}>
                            <img className='profilePic' src={require('../../assets/images/dummyProfilepic.jpeg')}/>
                            <div className='detailsDiv'>
                                <h1 className='nameField'>{personViewDetails.name} {personViewDetails?.father?.name ? `s/o ${personViewDetails.father.name}` : ""}</h1>
                                <div className='sub-detailsDiv'>
                                <p>Age: <span className='heighLightShortInfo'>{age}</span></p>
                                <p>Gotra: <span className='heighLightShortInfo'>{personViewDetails?.lineage?.title}</span> </p>
                                <p>Birth Order: <span className='heighLightShortInfo'>{personViewDetails?.birthOrder}</span></p>
                                <p>Village: <span className='heighLightShortInfo'>{personViewDetails?.nativePlace?.title}</span></p>
                                <p>Naniyal: <span className='heighLightShortInfo'>{personViewDetails?.maternalPlace?.title}</span></p>
                                <p></p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Person's Relatives */}

                            {
                                <div className='familyContainer' >
                                <h2>Parents :</h2> 
                                <div>
                                {    
                                    [personViewDetails?.father,personViewDetails?.mother].map(data=> <PersonReltiveCard data={data}/>)
                                }
                                </div>
                                </div>
                            }    
                
                        {/* Person's brother And Sisters */}
                            {
                                [...(personViewDetails?.brothers ? personViewDetails?.brothers : []) ,...(personViewDetails?.sisters ? personViewDetails?.sisters : [])].length ?
                                (
                                    <div className='familyContainer'>
                                    <h2>Brother & Sisters :</h2> 
                                    <div>
                                    {    
                                        [...(personViewDetails?.brothers ? personViewDetails?.brothers : []) ,...(personViewDetails?.sisters ? personViewDetails?.sisters : [])].map(data=> <PersonReltiveCard data={data}/>)
                                    }
                                    </div>
                                    </div>
                                )   
                                :
                                <></>
                            }
                            
                        
                        
                    </div>
                </div>
            ) 
        }
    </div>
  )
}

export default PersonDetails