import React, { useState} from "react";
import PlantsElement from "./PlantsElement";
import search from '../../../pages/choice/image/search.png';
import usePlantsStore from "../../../pages/choice/store";

 const LefsSide = function ({idGetNextFinal}){
    const listPlants = usePlantsStore((state) => state.listPlants)

    // const [listPlants, setListPlants] = useState()
    const [idGet, setIdGet] = useState('')
    const idGetFunction = (idGet) =>{
        setIdGet(idGet)
        idGetNextFinal(idGet)
    }

    const [value, setValue] = useState('')

    const filteredPlants = listPlants.filter( plant => {
        return plant.posts.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <div className="left_side">
            <div className="navigation_main">
                <div className="navigation">
                    <input type="text" className="navigation__text" onChange={(event) => setValue(event.target.value)} placeholder="Тип растения"/>
                    <img src={search} className="navigation__sticker"/>
                </div>
            </div>
            <div className="list_of_plants">
                {
                    filteredPlants.map((listPlants) => {
                        return(
                            <PlantsElement posts={listPlants.posts} title={listPlants.title} id={listPlants.id} idGet={idGetFunction}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LefsSide;