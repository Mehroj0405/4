import React from 'react';
import "./Uslugi.css"
import dep4 from "../image/uslugi/4.png"
import dep3 from "../image/uslugi/3.png"
import dep2 from "../image/uslugi/2.png"
import dep1 from "../image/uslugi/1.png"
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
const Products = () => {
    return (
        <div>
            <div class="headerimg">

                <div class="servisText">
                    <h1
                        style={{
                            fontFamily: " Roboto", fontStyle: "normal", fontWeight: "500", fontSize: "48px", lineHeight: "56px", color: " #03416A;"
                        }}>
                        Популярные продукты и услуги</h1>

                </div>
            </div>

            <div class="contain " style={{ display: "flex", flexWrap: "wrap" }}   >
                <div class="uslugi ">
                    <NavLink to="./istoriya" ><img src={dep1} />
                        <h1>Узнайте свою кредитную историю</h1>
                        <p>Закажите отчёт и подключите уведомления, чтобы быть в курсе любых изменений</p>
                    </NavLink>
                </div>
                <div class="uslugi ">
                    <NavLink to="./stat"><img src={dep2} />
                        <h1>Дебетовые карты</h1>
                        <p>Выберите подходящую карту: сравните бонусы и выгоду</p>
                    </NavLink>
                </div>
                <div class="uslugi ">
                    <NavLink to="./final"><img src={dep3} />
                        <h1>Ипотека на готовое жильё</h1>
                        <p>Рассчитайте условия с нашим калькулятором</p>
                    </NavLink>
                </div>
                <div class="uslugi ">
                    <NavLink to="./depozit"><img src={dep4} />
                        <h1>Депозиты</h1>
                        <p>Сберегите накопления — откройте вклад онлайн</p>
                    </NavLink>
                </div>



            </div>
            <Footer />


        </div >
    );
}

export default Products;
