import { SEARCH_KEYWORDS_SUCCESS, SEARCH_KEYWORDS_FAILURE, IS_LOADING } from './../actions/types';

const intialState = {
    searchResults: ['City1','City2'],
    errorMessage: '',
    loading: false
}

const cities = (state = intialState, action) => {
    switch (action.type) {
        case SEARCH_KEYWORDS_SUCCESS:           
            return {
                ...state,
                searchResults: action.payload,
                errorMessage: ''
            }
        case SEARCH_KEYWORDS_FAILURE:
            return {
                ...state,
                errorMessage: 'Something went wrong'
            }
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default cities
