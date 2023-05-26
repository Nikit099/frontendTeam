import React from 'react';
import './styles/index.css'
import './styles/slider.css'
import './styles/square-plant-icon.css'
import './styles/top-panel.css'
import './styles/rectangular-plant-icon.css'
const Main = () => {
    return (
        <div>
                <div class="top-panel">
        <div class="search">
            <img alt='' src="images/search_icon.png" />
            <form action="" method="get">
                <input name="s" placeholder="Найти" type="search" />
            </form>
        </div>
        <div class="slider">
            <img alt='' src="images/frown.png" id="slider-left-icon" />
            <input type="range" min="1" max="100" value="50" class="myRange" />
            <img alt='' src="images/smile.png" id="slider-right-icon" />
        </div>
        <div class="logo">
            <a href="/">
                <img alt='' src="images/logoEMP.png" width="77" height="77" />
            </a>
        </div>

    </div>
    <div id="notifications-table">
        <div class="square-buttons">
            <div class="transparent">
                <button class="square-button">
                    <div class="button-head-background"></div>
                    <div class="red-lamp"></div>
                    <div class="button-text">
                        <div class="button-title">Владик</div>
                        <div class="button-description">Срочно поставьте в
                            теплое место</div>
                    </div>
                    <div class="button-icons">
                        <img alt='' src="images/battery-half.png" class="left-button-small-icon" height="23px" width="23px" />
                        <div class="button-small-icons">
                            <img alt='' src="images/fire.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/dawn.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/rain.png" class="right-button-small-icon" height="23px" width="23px" />
                        </div>
                    </div>
                    <img alt='' src="images/plant_photo.png" class="plant-icon" height="182" width="182" />
                    <img alt='' src="images/frozen.png" class="state-icon" height="48px" width="47px" />
                </button>
                <button class="square-button">
                    <div class="button-head-background"></div>
                    <div class="red-lamp"></div>
                    <div class="button-text">
                        <div class="button-title">Максим</div>
                        <div class="button-description">Срочно обильно полейте</div>
                    </div>
                    <div class="button-icons">
                        <img alt='' src="images/battery-half.png" class="left-button-small-icon" height="23px" width="23px" />
                        <div class="button-small-icons">
                            <img alt='' src="images/fire.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/dawn.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/rain.png" class="right-button-small-icon" height="23px" width="23px" />
                        </div>
                    </div>
                    <img alt='' src="images/plant_photo.png" class="plant-icon" height="182" width="182" />
                    <img alt='' src="images/frozen.png" class="state-icon" height="48px" width="47px" />
                </button>
            </div>
            <div class="transparent">
                <button class="square-button">
                    <div class="button-head-background"></div>
                    <div class="red-lamp"></div>
                    <div class="button-text">
                        <div class="button-title">Иван</div>
                        <div class="button-description">Срочно поставьте под солнце</div>
                    </div>
                    <div class="button-icons">
                        <img alt='' src="images/battery-half.png" class="left-button-small-icon" height="23px" width="23px" />
                        <div class="button-small-icons">
                            <img alt='' src="images/fire.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/dawn.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/rain.png" class="right-button-small-icon" height="23px" width="23px" />
                        </div>
                    </div>
                    <img alt='' src="images/plant_photo.png" class="plant-icon" height="182" width="182" />
                    <img alt='' src="images/frozen.png" class="state-icon" height="48px" width="47px" />
                </button>
                <button class="square-button">
                    <div class="button-head-background"></div>
                    <div class="red-lamp"></div>
                    <div class="button-text">
                        <div class="button-title">Кирилл</div>
                        <div class="button-description">Срочно поставьте в
                            теплое место</div>
                    </div>
                    <div class="button-icons">
                        <img alt='' src="images/battery-half.png" class="left-button-small-icon" height="23px" width="23px" />
                        <div class="button-small-icons">
                            <img alt='' src="images/fire.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/dawn.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/rain.png" class="right-button-small-icon" height="23px" width="23px" />
                        </div>
                    </div>
                    <img alt='' src="images/plant_photo.png" class="plant-icon" height="182" width="182" />
                    <img alt='' src="images/frozen.png" class="state-icon" height="48px" width="47px" />
                </button>
            </div>
            <div class="transparent">
                <button class="square-button">
                    <div class="button-head-background"></div>
                    <div class="red-lamp"></div>
                    <div class="button-text">
                        <div class="button-title">Степан</div>
                        <div class="button-description">Срочно уберите с солнца</div>
                    </div>
                    <div class="button-icons">
                        <img alt='' src="images/battery-half.png" class="left-button-small-icon" height="23px" width="23px" />
                        <div class="button-small-icons">
                            <img alt='' src="images/fire.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/dawn.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/rain.png" class="right-button-small-icon" height="23px" width="23px" />
                        </div>
                    </div>
                    <img alt='' src="images/plant_photo.png" class="plant-icon" height="182" width="182" />
                    <img alt='' src="images/frozen.png" class="state-icon" height="48px" width="47px" />
                </button>
                <button class="square-button">
                    <div class="button-head-background"></div>
                    <div class="red-lamp"></div>
                    <div class="button-text">
                        <div class="button-title">Никита</div>
                        <div class="button-description">Срочно уберите с солнца</div>
                    </div>
                    <div class="button-icons">
                        <img alt='' src="images/battery-half.png" class="left-button-small-icon" height="23px" width="23px" />
                        <div class="button-small-icons">
                            <img alt='' src="images/fire.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/dawn.png" class="right-button-small-icon" height="23px" width="23px" />
                            <img alt='' src="images/rain.png" class="right-button-small-icon" height="23px" width="23px" />
                        </div>
                    </div>
                    <img alt='' src="images/plant_photo.png" class="plant-icon" height="182" width="182" />
                    <img alt='' src="images/frozen.png" class="state-icon" height="48px" width="47px" />
                </button>
            </div>
        </div>
        <div class="notifications-tabs">
            <input type="button" id="prev" value="Назад" />
            <input type="button" id="next" value="Вперед" />
        </div>
    </div>

    <div class="rectangular-buttons">
        <button class="rectangular-button">
            <img alt='' src="images/Nina-plant.png" class="rectangular-button-plant-icon" width="202px" height="188px" />
            <div class="rectangular-button-state-display">
                <img alt='' src="images/emoji-pleased.png" class="rectangular-button-plant-state-icon" />
            </div>
            <div class="rectangular-button-head-background"></div>
            <div class="rectangular-button-text">
                <div class="rectangular-button-title">Нина</div>
                <div class="rectangular-button-description">Dracena Fr.</div>
                <div class="rectangular-button-description">Полейте через 2 часа</div>
            </div>
            <div class="rectangular-button-small-icons">
                <img alt='' src="images/fire.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/dawn.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/rain.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/battery-half.png" class="rectangular-button-small-icon" height="23px" width="23px" />
            </div>
            <div class="rectangular-button-timeline">
                <img alt='' src="images/timeline.png" />
            </div>
        </button>
        <button class="rectangular-button">
            <img alt='' src="images/Nina-plant.png" class="rectangular-button-plant-icon" width="202px" height="188px" />
            <div class="rectangular-button-state-display">
                <img alt='' src="images/emoji-pleased.png" class="rectangular-button-plant-state-icon" />
            </div>
            <div class="rectangular-button-head-background"></div>
            <div class="rectangular-button-text">
                <div class="rectangular-button-title">Нина</div>
                <div class="rectangular-button-description">Dracena Fr.</div>
                <div class="rectangular-button-description">Полейте через 2 часа</div>
            </div>
            <div class="rectangular-button-small-icons">
                <img alt='' src="images/fire.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/dawn.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/rain.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/battery-half.png" class="rectangular-button-small-icon" height="23px" width="23px" />
            </div>
            <div class="rectangular-button-timeline">
                <img alt='' src="images/timeline.png" />
            </div>
        </button>
        <button class="rectangular-button">
            <img alt='' src="images/Nina-plant.png" class="rectangular-button-plant-icon" width="202px" height="188px" />
            <div class="rectangular-button-state-display">
                <img alt='' src="images/emoji-pleased.png" class="rectangular-button-plant-state-icon" />
            </div>
            <div class="rectangular-button-head-background"></div>
            <div class="rectangular-button-text">
                <div class="rectangular-button-title">Нина</div>
                <div class="rectangular-button-description">Dracena Fr.</div>
                <div class="rectangular-button-description">Полейте через 2 часа</div>
            </div>
            <div class="rectangular-button-small-icons">
                <img alt='' src="images/fire.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/dawn.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/rain.png" class="rectangular-button-small-icon" height="23px" width="23px" />
                <img alt='' src="images/battery-half.png" class="rectangular-button-small-icon" height="23px" width="23px" />
            </div>
            <div class="rectangular-button-timeline">
                <img alt='' src="images/timeline.png" />
            </div>
        </button>
    </div>

        </div>
    );
};

export default Main;