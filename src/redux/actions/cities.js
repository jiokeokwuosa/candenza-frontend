import axios from 'axios';
import { SEARCH_KEYWORDS_SUCCESS, SEARCH_KEYWORDS_FAILURE, IS_LOADING } from './../actions/types';

export const searchKeyword = (keyword) => async dispatch => {
    try {       
        //start the loader
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        //make the api call
        const response = await axios.get(`https://api.teleport.org/api/cities/?search=${keyword}`);     
        dispatch({
            type: SEARCH_KEYWORDS_SUCCESS,
            payload: response.data._embedded["city:search-results"]
        })
        //stop the loader
        dispatch({
            type: IS_LOADING,
            payload: false
        })
    } catch (err) {
        //stop the loader
        dispatch({
            type: IS_LOADING,
            payload: false
        })
        dispatch({
            type: SEARCH_KEYWORDS_FAILURE          
        })
    }


}