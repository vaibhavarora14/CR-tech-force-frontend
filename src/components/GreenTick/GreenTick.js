import React from 'react';

import star from '../../global/assets/icons/star.svg';
import tick from '../../global/assets/icons/tick.svg';

const GreenTick = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={star} />
            <img style={{position: 'relative', marginLeft:'-50%'}} src={tick} />
        </div>
    )
}

export default GreenTick;