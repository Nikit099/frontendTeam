import React from 'react';
import circle from '../images/check-circle.svg';
import dracena from '../images/dracena.png';
const Plant = () => {
    return (
    <div>
        <div class="right-background">
			<img className='right-background__dracena' alt='' src={dracena}/>
			<a href="/" class="plant-button-for-choice">
				<div class="plant-button-for-choice-content">
					<h2>Драцена</h2>
					<p>Спаржевые</p>
				</div>
				<img alt='' src={circle} class="check-circle" />
				<svg className="zoom-in" width="535px" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
				</svg>
			</a>
		</div>
    </div>
    );
};

export default Plant;