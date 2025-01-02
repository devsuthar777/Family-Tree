import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    debugger
    const {userInfo} = useSelector((state) => state.user);

    if(userInfo?.token !== null)
        return children
    else
        return <Navigate to="/login" />

}

export default PrivateRoute