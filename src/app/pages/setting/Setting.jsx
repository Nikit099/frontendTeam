import React, { useState } from 'react';
import './setting.css'
import { Graphs } from './Graphs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { faker } from '@faker-js/faker';

const Setting = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
      );
      const [options,setOptions] = useState(
        {responsive: true,
        plugins: {
          title: {
            display: true,
          },
        },
      })
      const labels = ["01.01","10.01" ,"20.01" ,"30.01" ,"01.02" ,"10.02" ,"20.02","30.02", ];
      const [data, setData] = useState ({
        labels,
        datasets: [
          {
            label: 'Temperature',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgba(255, 159, 159, 0.9)',
            backgroundColor: 'rgba(255, 159, 159, 0.9)',
          },
        ],
      })

    const clickMan = (e) =>{
        if(e.target.id==="blrb_1"){
            setData({
                labels,
                datasets: [
                  {
                    label: 'Temperature',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgba(255, 159, 159, 0.9)',
                    backgroundColor: 'rgba(255, 159, 159, 0.9)',
                  },
                ],
              })
            setOptions(
                {responsive: true,
                plugins: {
                  title: {
                    display: true,
                  },
                },
              })
        }
        if(e.target.id==="blrb_2"){
            setData({
                labels,
                datasets: [
                  {
                    label: 'Освещенность',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
                    borderColor: 'rgba(255, 159, 159, 0.9)',
                    backgroundColor: 'rgba(255, 159, 159, 0.9)',
                  },
                ],
              })
            setOptions(
                {responsive: true,
                plugins: {
                  title: {
                    display: true,
                  },
                },
              })
        }
        if(e.target.id==="blrb_3"){
            setData({
                labels,
                datasets: [
                  {
                    label: 'Влажность',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgba(255, 159, 159, 0.9)',
                    backgroundColor: 'rgba(255, 159, 159, 0.9)',
                  },
                ],
              })
            setOptions(
                {responsive: true,
                plugins: {
                  title: {
                    display: true,
                  },
                },
              })
        }
    }
    return (
        <div>

              <div className="header">
        <div className="name">Ольга</div>
        <img alt='' src="./media/arrow-left-circle.png"/>
    </div>
    <div className="top">

        <div className="top__left">

            <div className="under_header">

                <div className="under_header_title_1">
                    <div className="state_titles_point">Температура</div>
                    <div className="state_titles_bot_point">0-100 °C</div>
                </div>

                <div className="under_header_title_1">
                    <div className="state_titles_point">Освещенность</div>
                    <div className="state_titles_bot_point">0-30k Lux</div>
                </div>

                <div className="under_header_title_1">
                    <div className="state_titles_point">Влажность</div>
                    <div className="state_titles_bot_point">0-100 %</div>
                </div>

                <div className="under_header_title_1">
                    <div className="state_titles_point">Размер</div>
                    <div className="state_titles_bot_point">Стандартный</div>
                </div>

            </div>

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
                        <div className="norms_panel_into_stat">0-100 °C</div>
                        <div className="norms_panel_into_stat">0-30k Lux</div>
                        <div className="norms_panel_into_stat">0-100 %</div>
                    </div>

                    <div className="norms_panel_into">
                        <img alt='' src="./media/rotate-cw.png"/>
                        <img alt='' src="./media/rotate-cw.png"/>
                        <img alt='' src="./media/rotate-cw.png"/>
                    </div>

                    <div className="norms_panel_into__input">
                        <input className="norms__input" placeholder="Введите значение от - до"/>
                        <input className="norms__input" placeholder="Введите значение от - до"/>
                        <input className="norms__input" placeholder="Введите значение от - до"/>
                    </div>

                </div>

                <div className="norms__button__div">
                    <button className="norms__button">Принять</button>
                </div>
            </div>
        </div>

        <div className="top__right">
            <img alt='' calss="plant__img" src="./media/plant.png"/>
        </div>
    </div>


    <div className="bottom">

        <div className="bottom__left">

            <div className="bottom__left__title">
                График
            </div>

            <div className="bottom__left__buttons">
                <div className="bottom__left__radio__button" >
                    <input id="blrb_1" type="radio" name="bottom__left__radio__button" value="1" onClick={clickMan} />
                    <label for="blrb_1">Температура</label>
                    
                </div>
                 
                <div className="bottom__left__radio__button" >
                    <input id="blrb_2" type="radio" name="bottom__left__radio__button" value="2" onClick={clickMan}/>
                    <label for="blrb_2">Освещенность</label>
                </div>
                 
                <div className="bottom__left__radio__button" >
                    <input id="blrb_3" type="radio" name="bottom__left__radio__button" value="3" onClick={clickMan}/>
                    <label for="blrb_3">Влажность</label>
                </div>
            </div>

            <div className="graf">
                <Graphs options={options} data={data}/>
                <img alt='' className="graf_img" src="./media/graf.svg"/>
            </div>

        </div>

        <div className="bottom__right">
            <div className="bottom__right__title">
                Темы
            </div>

            <div className="bottom__right__radio__buttons">
                <div className="bottom__right__radio__button">
                    <input id="brrb_1" type="radio" name="bottom__right__radio__button" value="1" />
                    <label for="brrb_1">Шляпа</label>
                </div>
                 
                <div className="bottom__right__radio__button">
                    <input id="brrb_2" type="radio" name="bottom__right__radio__button" value="2"/>
                    <label for="brrb_2">Новогодняя</label>
                </div>
                 
                <div className="bottom__right__radio__button">
                    <input id="brrb_3" type="radio" name="bottom__right__radio__button" value="3"/>
                    <label for="brrb_3">LOVE</label>
                </div>

                <div className="bottom__right__radio__button">
                    <input id="brrb_4" type="radio" name="bottom__right__radio__button" value="4"/>
                    <label for="brrb_4">Ржумен</label>
                </div>

            </div>

            <div className="themes__line__input__block">
                <input className="themes__line__input" placeholder="Введите новое имя питомца"/>
                <img alt='' className="themes__line__input__img" src="./media/check-circle.png"/>
            </div>

            <div className="bottom__right__buttons">
                <button className="themes__button__one">Смена типа растения</button>
            </div>
            <div className="bottom__right__buttons">
                <button className="themes__button__two">Удалить растение</button>
            </div>
            <div className="bottom__right__buttons">
                <button className="themes__button__tree">Выйти из аккаунта</button>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Setting;