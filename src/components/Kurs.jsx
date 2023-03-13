import React from 'react';
import "./Kurs.css"
import legal4 from "../image/legal/4.png"
import legal3 from "../image/legal/3.png"
import legal2 from "../image/legal/2.png"
import legal1 from "../image/legal/1.png"
import icons from "../image/ipoteka/icon.png"
import Footer from './Footer';

const Kurs = () => {
    return (
        <div>
            <div class="legalimg">

                <div style={{
                    background: "transparent",
                    paddingLeft: "100px",
                    paddingTop: "5%"
                }}
                >
                    <h1 style={{
                        fontFamily: " Roboto",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "50px",
                        lineHeight: "59px",


                        color: "#03416A",

                        color: "#03416A", height: "219px"
                    }}
                    >Банк для юридических лиц
                    </h1>
                </div>

            </div>

            <div class="tomy">
                <div class="tomy1">
                    <h1>Платежи 24/7</h1>
                    <p>внутри банка</p>
                </div>

                <div class="tomy1">
                    <a href="#schet">
                        <input type="button" value="Открыть счёт" /></a>
                </div>
            </div>


            <div class="ipoteknew" style={{ paddingBottom: "10%;" }}>
                <div class="newtomy">
                    <h1>
                        Почему предпринимателям выгодно сотрудничать с Зудамалом
                    </h1>
                    <p>Открытие и ведение расчётного счёта возможно без визита в банк, а спектр услуг подойдет как начинающим,
                        так и уже действующим бизнесменам. Поэтому каждый пятый российский предприниматель доверяет нам
                        финансовое сопровождение своего бизнеса.

                    </p>
                </div>
                <div class="tomtext">
                    <h1>От этих условий невозможно отказаться</h1>
                </div>
                <div class="row">
                    <div class="col-6" style={{ display: "flex", paddingTop: "3%;" }}>
                        <div>
                            <img src={legal1} alt="legal1" />
                        </div>
                        <div class="styles">
                            <h1>Нет лишних платежей</h1>
                            <p>Нет оборотов — не платите за обслуживание </p>
                        </div>
                    </div>
                    <div class="col-6" style={{ display: "flex", paddingTop: "3%;" }}>
                        <div>
                            <img src={legal2} alt="legal2" />
                        </div>
                        <div class="styles">
                            <h1>Крутой банк</h1>
                            <p>Ваш персональный менеджер будет всегда на связи</p>
                        </div>
                    </div>
                    <div class="col-6" style={{ display: 'flex', paddingtop: "6%;" }}  >
                        <div>
                            <img src={legal3} alt="legal3" />
                        </div>

                        <div class="styles">
                            <h1>3 % на остаток</h1>
                            <p>по счёту «Налоговая копилка»</p>
                        </div>

                    </div>
                    <div class="col-6" style={{ display: "flex", paddingTop: "3%;" }}>
                        <div>
                            <img src={legal4} alt="legal4" />
                        </div>
                        <div class="styles">
                            <h1>Выгодный эквайринг</h1>
                            <p>Бесплатное подключение и аренда терминалов,
                                работа с основными платёжными системами,
                                зачисление денег на счёт на следующий рабочий день</p>
                        </div>
                    </div>
                </div>


                <div class="callMee">
                    <div class="callMeeStart" id="schet">
                        <h1>Заявка на открытие счёта</h1>
                        <h4>Заполните самостоятельно или с помощью менеджера</h4>
                    </div>
                    <div class="callNumber">
                        <h6>Мобильный телефон</h6>
                        +<input type="number" value="992" />

                    </div>
                    <div class="callButton">
                        <input type="button" value="Перезвонить мне" />
                    </div>
                    <div class="iconText">
                        <img src={icons} alt="iconimg" />
                        <h5>Мы гарантируем безопасность и сохранность ваших данных</h5>
                    </div>
                    <div class="callMeeFinish">
                        <h3>Нажимая кнопку «Заполнить онлайн» или «Перезвонить мне»,
                            вы подтверждаете, что согласны на обработку персональных данных</h3>
                    </div>

                </div>





            </div>

            <Footer />

        </div >


    );
}

export default Kurs;
