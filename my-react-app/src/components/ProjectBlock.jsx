import React, { useCallback, useState } from 'react';
import Picture from './Picture';
import Caption from './Caption';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'

function ProjectBlock(props) {

    const [isZoomed, setIsZoomed] = useState(false)
    
        const handleZoomChange = useCallback(shouldZoom => {
            setIsZoomed(shouldZoom)
        })

    return(
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <div className='block-content'>
                <Picture imgURL={props.imgURL} />
                <a href={props.projectURL}><Caption caption={props.caption}/></a>
            </div>
        </ControlledZoom>
    )
}

export default ProjectBlock;