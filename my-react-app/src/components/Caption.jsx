import React from 'react';
import './caption.css';

function Caption(props) {
    return <h1 className='caption'>{props.caption}</h1>
}

export default Caption;