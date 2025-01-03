
import { LOGIN_USER } from "../redux/constants/userContants"

const BASE_URL = process.env.REACT_APP_BASE_URL

export const People =  {
    FETCH_ALL_PEOPLE_URL: BASE_URL +"person/getAllPerson",
    FETCH_PERSON_VIEW_DETAILS: BASE_URL +"person/fetchPersonDetails/",
}

export const User =  {
    CREATE_REGISTER_REQUEST: BASE_URL +"user/register/createRegisterReq",
    VERIFY_REGISTER_REQUEST: BASE_URL +"user/register/verifyRegisterReq",
    LOGIN_USER:BASE_URL +"user/loginUser",
}

export const Village = {
    FETCH_ALL_VILLAGES: BASE_URL+'village/getAllVillages'
}

export const Lineage = {
    FETCH_ALL_LINEAGES: BASE_URL+'lineage/getAllLineage'
}
