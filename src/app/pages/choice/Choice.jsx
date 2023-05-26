import React, {useState} from 'react';
import './style/index.css';
// import RightSideNotChoise from './component/RigtSideNotChoise/RightSideNotChoise';
import LeftSide from '../../components/shared/LeftSide/LeftSide';
import RightSideChoise from '../../components/shared/RightSide/RightSideChoise';
import usePlantsStore from './store';
function Choice() {
const plantChoiced = usePlantsStore((state) => state.PlantChoiced)
  const [idGet, setIdGet] = useState('0')
  const idGetFunction = (idGet) =>{
      setIdGet(idGet)
  }
  return (
    <div className="main">
        <LeftSide idGetNextFinal={idGetFunction}/>
        <RightSideChoise  />
    </div>
  );
}

export default Choice;
