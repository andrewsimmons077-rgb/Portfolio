import React, { useCallback, useState } from 'react';
import Picture from './Picture';
import Caption from './Caption';
import './block.css';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'

function Block(props) {

    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    })

    return(
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <div className='block-content'>
                <Picture imgURL={props.imgURL} />
                <Caption caption={props.caption}/>
            </div>
        </ControlledZoom>
    );
};

export default Block;
