import React from 'react';

const Item = (props) => {
    return <li ><a onClick={()=>props.setKeyword(props.name)}>{props.name}</a></li>
}

export default Item
