import React, { useState } from 'react';
import './setting.css'
import GrafPanel from '../setting/components/panels/GrafPanel';
import ThemsPanel from '../setting/components/panels/ThemsPanel';
import GeneralPanel from '../setting/components/panels/GeneralPanel';
import TopElem from './components/TopElem';
import arrow from './media/arrow-left-circle.png'
import BackgroundElem from './components/BackgroundElem';
import { Link } from 'react-router-dom';


const Setting = () => {
    const [namePlants,setNamePlants] = useState("Ольга")
    const [input,setInputs]= useState("")
    const changeInpup = (e) =>{
      setInputs(e.target.value)
    }
    const clickInput = () =>{
      setNamePlants(input)
    }
    return (
        <div>
        <div className="header">
        <div className="name">{namePlants}</div>
          <Link to={'/main'} > <img alt='' src={arrow}/></Link>
        </div>
          <BackgroundElem/>
          <TopElem/>
          <div className="bottom">
            <GrafPanel/>
            <div className="bottom__right">
                <div className="bottom__right__title">
                    Темы
                </div>
              <ThemsPanel/>
                <div className="themes__line__input__block">
                    <input onChange={changeInpup} className="themes__line__input" placeholder="Введите новое имя питомца"/>
                    <img onClick={clickInput} alt='' className="themes__line__input__img" src={require("./media/check-circle.png")}/>
                </div>
                <GeneralPanel/>
            </div>
            </div>
        </div>
    );
};

export default Setting;