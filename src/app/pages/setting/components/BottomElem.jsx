import React from 'react';
import GrafPanel from './panels/GrafPanel';
import ThemsPanel from './panels/ThemsPanel';
import GeneralPanel from './panels/GeneralPanel';
import check from '../media/check-circle.png'
const BottomElem = () => {

    return (
    <div className="bottom">

        <GrafPanel/>
        <div className="bottom__right">
            <div className="bottom__right__title">
                Темы
            </div>

           <ThemsPanel/>

            <div className="themes__line__input__block">
                <input className="themes__line__input" placeholder="Введите новое имя питомца"/>
                <img alt='' className="themes__line__input__img" src={check}/>
            </div>

            <GeneralPanel/>
        </div>
    </div>
    );
};

export default BottomElem;