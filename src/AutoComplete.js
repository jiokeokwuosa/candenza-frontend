import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchKeyword} from './redux/actions/cities';
import LoadingIcon from '../src/assets/img/loading.gif';
import ItemBox from './searchResultItem';

const AutoComplete = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('')
    const searchResults = useSelector((state)=>state.cities.searchResults)
    const loader = useSelector((state)=>state.cities.loading)
    const errorMessage = useSelector((state)=>state.cities.errorMessage)
    
  
    const handleSearch = (e) => {
        setKeyword(e.target.value)
        if(keyword.length>2){
            //call the action from redux
            dispatch(searchKeyword(keyword))
        }
    }

    const searchResultList = useCallback(() => {
        if(searchResults && searchResults.length){
            return searchResults.map((item, index)=>{
                return <ItemBox setKeyword={setKeyword} name={item.matching_full_name}/>               
            })
        }else{
            return <li>No results found</li>
        }
    },[searchResults])

    return (
    <>
        <input type='text' name="keyboard" placeholder="Enter Keyword (3 or more characters)" value={keyword} onChange={handleSearch}/>
        {loader?<p><img src={LoadingIcon} alt="loading..." className="loadingIcon"/></p>:null} 
        {errorMessage?<p>{errorMessage}</p>:null} 
        
        {!loader && searchResults && keyword.length>2?
            <ul>
                {searchResultList()}
            </ul>
        :null}   
    </>
    )
}

export default AutoComplete
