import React, { useState } from 'react';
import rorate from '../../media/rotate-cw.png'
const NormPanel = () => {
    const objectBeforeTransferringInformation=["","",""]
    const [inputsOne, setInputsOne] = useState("0-100")
    const [inputsTwo, setInputsTwo] = useState("0-30")
    const [inputsThree, setInputsThree] = useState("0-100")
    const propaOne = (e) =>{
            objectBeforeTransferringInformation[0] = e.target.value
    }
    const propaTwo = (e) =>{
            objectBeforeTransferringInformation[1] = e.target.value
    }
    const propaThree = (e) =>{
            objectBeforeTransferringInformation[2] = e.target.value
    }
    const rotateOne = () =>{
        setInputsOne("0-100")
    }
    const rotateTwo = () =>{
        setInputsTwo("0-30")
    }
    const rotateThree = () =>{
        setInputsThree("0-100")
    }
    const setSetting =()=>{
        setInputsOne(objectBeforeTransferringInformation[0])
        setInputsTwo(objectBeforeTransferringInformation[1])
        setInputsThree(objectBeforeTransferringInformation[2])
    }
    return (
        <div className="norms">
        <div className="norms__title">
            Нормы
        </div>
        <div className="norms_panel">

        <div className="norms_panel_into">
            <div className="norms_panel_into_title">Температура</div>
            <div className="norms_panel_into_title">Освещенность</div>
            <div className="norms_panel_into_title">Влажность</div>
        </div>

        <div className="norms_panel_into">
            <div className="norms_panel_into_stat">{inputsOne} °C</div>
            <div className="norms_panel_into_stat">{inputsTwo}k Lux</div>
            <div className="norms_panel_into_stat">{inputsThree} %</div>
        </div>

        <div className="norms_panel_into">
            <img onClick={rotateOne} alt='' src={rorate}/>
            <img onClick={rotateTwo} alt='' src={rorate}/>
            <img onClick={rotateThree} alt='' src={rorate}/>
        </div>

        <div className="norms_panel_into__input">
            <input onChange={propaOne} className="norms__input" placeholder="Введите значение от - до" id='1'/>
            <input onChange={propaTwo} className="norms__input" placeholder="Введите значение от - до" id='2'/>
            <input onChange={propaThree} className="norms__input" placeholder="Введите значение от - до" id='3'/>
        </div>

    </div>
    <div className="norms__button__div">
        <button onClick={setSetting} className="norms__button">Принять</button>
    </div>
    </div>
    );
};

export default NormPanel;