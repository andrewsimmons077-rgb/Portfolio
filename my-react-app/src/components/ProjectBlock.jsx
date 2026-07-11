import React from 'react';
import Picture from './Picture';
import Caption from './Caption';

function ProjectBlock(props) {
    return(
        <div className='block-content'>
            <Picture imgURL={props.imgURL} />
            <a href={props.projectURL}><Caption caption={props.caption}/></a>
        </div>
    )
}

export default ProjectBlock;