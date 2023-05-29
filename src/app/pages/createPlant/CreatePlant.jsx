import React from 'react';
import './plan2.css'

import Registration from './components/Registration';
import Plant from './components/Plant';
const CreatePlant = () => {
    return (
    <>
        <div className='create_plants'>
            <Registration/>
            <Plant/>
        </div>
    </>
    );
};

export default CreatePlant;