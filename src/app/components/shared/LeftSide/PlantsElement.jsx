import React, { useState } from "react";
import rosendahl from '../../../pages/choice/image/58998_rosendahl_grand_cru_doniczka 2.png';
import fire from '../../../pages/choice/image/fire.png';
import dawn from '../../../pages/choice/image/dawn.png';
import rain from '../../../pages/choice/image/rain.png';
import usePlantsStore from "../../../pages/choice/store";

 const PlantsElement = function ({posts, title, id}){
    
    const idGetFunction = usePlantsStore((state) => state.idGetFunction)

    return(
            <div id={id} className="list_of_plants__element_plants" onClick={() => idGetFunction(id)}>
                <img src={rosendahl} className="list_of_plants__sticker_plants"/>
                <div className="list_of_plants__left_top_figure"></div>
                <div className="list_of_plants_text">
                    <span className="list_of_plants__hieght_text">{posts}</span>
                    <span className="list_of_plants__small_text">{title}</span>
                </div>
                <div class="list_of_plants__stickers">
                    <img src={fire} className="list_of_plants__sticker"/>
                    <img src={dawn} className="list_of_plants__sticker"/>
                    <img src={rain} className="list_of_plants__sticker"/>
                </div>
            </div>
    )
}
export default PlantsElement;