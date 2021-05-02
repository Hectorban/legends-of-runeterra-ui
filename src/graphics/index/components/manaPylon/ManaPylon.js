import React from 'react';

import './ManaPylon.scss'
import PylonBackground from './images/4s1tcj6.png'
import Pylon from './images/pylon.png'

const ManaPylons = ({costKey, costValue}) => {

    const costHeight = costValue*9
    const pylongHeight = {"--height": 150-costHeight+"px"}
    return (
        <div className='mana-pylon' style={pylongHeight}>
            <img className='pylon-background' src={PylonBackground}/>
            <div className='pylon-container'>
                <img className='pylon' src={Pylon}/>
            </div>
            <p className='cost-key'>{costKey}</p>
        </div>
    );
};

export default ManaPylons;