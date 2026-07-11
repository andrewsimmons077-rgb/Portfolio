import React from 'react';
import './picture.css'

function Picture(props) {
    return(
        
            <img alt='picture' src={props.imgURL} className='picture' />
    );
}

export default Picture;