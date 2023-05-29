import React from 'react';
import plant from '../media/plant.png'
import NormPanel from './panels/NormPanel';
import Condition from './Condition';
import emoji from '../media/emoji-pleased.svg';

const TopElem = () => {
    return (
        <div className="top">

        <div className="top__left">

            <Condition/>
            <NormPanel/>

        </div>

        <div className="top__right">
            <img alt='' calss="plant__img" className="plant__img" src={plant}/>
            <img alt='' className="plant_emoji_svg" src={emoji}/>
        </div>
    </div>

    );
};

export default TopElem;