import React from "react";
import Uslugi3 from "../image/uslugi/3.png";
import "./Novosti.css";
import Qurbon from "../image/qurbon.png";
import Istiqlol from "../image/uslugi/istiqloloiyat.png";
import kresla from "../image/uslugi/3.png";
import chelovek from "../image/uslugi/4.png";
import Vkladi from "../image/uslugi/5.1.png";
import Kompaniya from "../image/uslugi/6.1.png";

import para from "../image/uslugi/1.png";
import visa from "../image/uslugi/2.png";
import { NavLink } from "react-router-dom";

const Novosti = () => {
  return (
    <div>
      <div class="newsimg">
        <div className="nowos">
          <h1>Новости</h1>
        </div>
        {/* <style>
            .lang.active {
                color: #FFFFFF !important;
            }
        </style> */}
      </div>

      {/* <>beli fon</> */}

      <div class="contain">
        <div class="uslugi">
          <NavLink to="./idiqurbon">
            <img src={Qurbon} />
            <h1>С праздником Курбан Байрам!</h1>
            <p>
              Поздравляем вас с одним из самых значимых праздников мусульман -
              Курбан-Байрам!
            </p>
          </NavLink>
        </div>
        <div class="uslugi">
          <a href="clickService.html">
            <img src={Istiqlol} />
            <h1>C ДНЕМ НЕЗАВИСИМОСТИ РЕСПУБЛИКИ ТАДЖИКИСТАН!</h1>
            <p>
              Уважаемые таджикистанцы! Примите наши искренние поздравления с
              Днем Независимос...
            </p>
          </a>
        </div>
        <div class="uslugi">
          <a href="clickService.html">
            <img src={kresla} />
            <h1>Ипотека на готовое жильё</h1>
            <p>Рассчитайте условия с нашим калькулятором</p>
          </a>
        </div>
        <div class="uslugi">
          <a href="clickService.html">
            <img src={chelovek} />
            <h1>Вклады</h1>
            <p>Сберегите накопления — откройте вклад онлайн</p>
          </a>
        </div>
        <div class="uslugi">
          <a href="clickService.html">
            <img src={Vkladi} />
            <h1>Вклады</h1>
            <p className="vkladi">
              Сберегите накопления — откройте вклад онлайн
            </p>
          </a>
        </div>
        <div class="uslugi">
          <a href="clickService.html">
            <img src={Kompaniya} />
            <h1>Ипотека на готовое жильё</h1>
            <p>Рассчитайте условия с нашим калькулятором</p>
          </a>
        </div>
        <div class="uslugi">
          <a href="clickService.html">
            <img src={para} />
            <h1>Узнайте свою кредитную историю</h1>
            <p>
              Закажите отчёт и подключите уведомления, чтобы быть в курсе любых
              изменений
            </p>
          </a>
        </div>
        <div class="uslugi">
          <a href="">
            <img src={visa} />
            <h1>Дебетовые карты</h1>
            <p>Выберите подходящую карту: сравните бонусы и выгоду</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Novosti;
