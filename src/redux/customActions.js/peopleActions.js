import { FETCH_ALL_PEOPLE,FETCH_PERSON_VIEW_DETAILS } from "../constants/peopleContants";

export const fetchAllPeople = () => ({
    type: FETCH_ALL_PEOPLE,
    payload: "",
  });

  export const fetchPersonViewDetails = (data) => ({
    type: FETCH_PERSON_VIEW_DETAILS,
    payload: data ? data : "",
  });