import React, { useState, useEffect } from "react";
import Meha4 from "../image/ipoteka/icon.png";
import Meha1 from "../image/ipoteka/1.png";
import Meha2 from "../image/ipoteka/2.png";
import Meha3 from "../image/ipoteka/3.png";
import Mesa from "../image/ipoteka/4.png";
import Mesa2 from "../image/ipoteka/1().png";
import MMM from "../image/ipoteka/2().png";
import Mas from "../image/ipoteka/3().png";
import "./Final.css";
import { NavLink } from "react-router-dom";

const Final = () => {
  const [activeId, setActiveId] = useState(1);

  // АЙ НОМИ ФУНКСИЯ ТОЖЕ ЗАВИСТ

  function handleClick(id) {
    setActiveId(id);
  }

  const [show, setShow] = useState(false);
  const [mousId, setMous] = useState(1);
  const [mousdId, setMousd] = useState(1);
  const [mousesId, setMouses] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [datas, setDatas] = useState(0);
  const [data, setData] = useState(0);
  const [emoji, setEmoji] = useState("");
  const [mehr, setMehr] = useState("");
  useEffect(() => {}, [data]);
  useEffect(() => {}, [datas]);

  function handleClick(id) {
    setActiveId(id);
  }

  function onChange(id) {
    setMous(id);
  }

  function onChang(id) {
    setMousd(id);
  }

  function handle(id) {
    setMouses(id);
  }

  function onClick(id) {
    setMouses(id);
  }

  function setData1(value) {
    let res = (((value * 30) / 100 + 1000) / 12).toFixed(2);
    setData(value);
    setEmoji(res);
  }

  function setData2(value) {
    let res = (((value * 16) / 100 + 1000) / 12).toFixed(2);
    setDatas(value);
    setMehr(res);
  }

  return (
    <div>
      <div class="clickServiceimg">
        <div style={{ padding: "80px 100px 230px 100px;" }}>
          <h1
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: " 48px",
              lineHeight: "56px",

              color: "#03416A;",
              paddingTop: "60px",
              paddingLeft: "30px",
            }}
          >
            Ипотека
            <br /> на готовое жильё
          </h1>
        </div>
      </div>

      <div class="ipoteknew">
        <div class="row">
          <div class="col-3">
            <div class="iconimg">
              <img src={Meha1} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>Онлайн-решение</h3>
              <p> за 2 минуты</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={Meha2} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>До 250 Тыс </h3>
              <p> сумма кредита</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={Meha3} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>От 1 до 2 лет </h3>
              <p> срок кредита</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={Mesa} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>Доставка кредита</h3>
              <p> на бесплатную деботавую карту</p>
            </div>
          </div>
        </div>
        <div class="jack">
          <h1>Онлайн-заявка на кредит наличными</h1>
          <div
            class="row"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5%;",
              flexWrap: "nowrap",
            }}
          >
            <div class="col-1">
              <div>
                <img src={Mesa2} alt="1" />
              </div>
              <h3>Заполните заявку</h3>
              <p>За 5 минут полностью онлайн</p>
            </div>
            <div class="col-2"></div>
            <div class="col-1">
              <div>
                <img src={MMM} alt="2" style={{ marginLeft: "10%;" }} />
              </div>
              <h3>2 минуты</h3>
              <p>Дождитесь одобрения</p>
            </div>
            <div
              class="col-2"
              style={{ marginLeft: " -12.5%", marginRight: "-5.5%;" }}
            ></div>
            <div class="col-1">
              <div>
                <img src={Mas} alt="3" />
              </div>
              <h3>Получите деньги</h3>
              <p>В отделении или доставкой</p>
            </div>
          </div>
        </div>

        <div class="registration">
          <div class="right">
            <img src={Meha4} alt="icon" />
            <p>
              Заполнение анкеты не обязывает вас брать кредит наличными.
              Гарантируем: ваши данные останутся в безопасности.
            </p>
          </div>
          <div class="ranges">
            <h4>Шаг 1 из 3. Получить кредит </h4>
            <input
              class="onchang"
              id="rangeValues"
              value="0"
              type="range"
              min="0"
              max="100"
              style={{ width: "70%;" }}
            />
            <h3>+7% к одобрению за заполнение поля Фамилия</h3>
          </div>

          <div
            class="validation"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingBottom: "5%;",
            }}
          >
            <input
              id="range"
              onchange="myFunction3(this.value)"
              value=""
              class="text"
              type="text"
              placeholder="Фамилия, имя и отчество"
              required="required"
            />
            <p>Укажите точно как в паспорте</p>

            <p></p>
            <div style={{ display: "flex;" }}>
              <div>
                <input
                  onchange="myFunction1(this.value)"
                  class="number1"
                  type="number"
                  id="range1"
                  value=""
                  placeholder="Номер телфона"
                  required="required"
                />
                <p>Мы отправим решение по заявке на указанный номер</p>
              </div>
              <div style={{ marginLeft: "5%;" }}>
                {" "}
                <input
                  onchange="myFunction2(this.value)"
                  class="number"
                  type="email"
                  id="range2"
                  placeholder="Электронная почта"
                  required="required"
                />
                <p>На данный email будет направлена информация по заявке</p>
              </div>
            </div>

            <h3>
              Нажимая кнопку «Заказать карту » я подтверждаю, что ознакомлен и
              согласен с{" "}
              <a
                href="doc/обработка_персональных_данных_Зудамал.pdf"
                target="_blank"
                style={{ borderBottom: "2px solid;" }}
              >
                условиями выпуска и обслуживания дебетовых карт и на обработку
                моих персональных данных.
              </a>
            </h3>

            <div class="next">
              <button id="btn" class="button" onclick="">
                Продолжить
              </button>
            </div>
          </div>
        </div>
        <div>
          <h5>Рассчитайте свой кредит</h5>
        </div>
        <div style={{ marginTop: " 3%", paddingLeft: "10%" }}>
          {/* <input
            class="tj active usd"
            style={{ borderRadius: "10px 0px 0px 10px;" }}
            type="button"
            value="TJS"
          />
          <input
            class="tj usd"
            type="button"
            style={{ marginLeft: "-4px;" }}
            value="USD"
          /> */}
        </div>

        <div className={`cours1 ${activeId === 1 ? "active" : "hide"}`}>
          <div style={{ display: "flex", paddingBottom: "50px" }}>
            <div style={{ marginTop: "3%", paddingLeft: "10%" }}>
              <input
                // class="tj active usd"
                class={`tj usd ${mousId === 1 && "active"} `}
                onClick={() => onChange(1)}
                style={{ borderRadius: "10px 0px 0px 10px" }}
                type="button"
                value="TJS"
              />
              <input
                // class="tj usd"
                class={`tj usd ${mousId === 2 && "active"} `}
                onClick={() => onChange(2)}
                type="button"
                style={{ marginLeft: "-4px" }}
                value="USD"
              />
            </div>
            <div
              class="newclientHome"
              style={{ marginTop: "40px", paddingLeft: " 40%" }}
            >
              <input
                // class="newclient1 active actb"
                class={`newclient1 actb ${mousesId === 1 && "active"} `}
                onClick={() => handle(1)}
                type="button"
                value="Новый клиент"
              />
              <input
                // class="newclient1 actb"
                class={`newclient1 actb ${mousesId === 2 && "active"} `}
                onClick={() => handle(2)}
                type="button"
                value="Повторный клиент"
              />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className={` newselect ${mousId === 1 ? "active" : "prep"}`}>
              <div
                className={` povtor1  powers ${
                  mousesId === 1 ? "active" : "hide"
                }`}
              >
                <div class="courses" style={{ border: "none", width: "100%" }}>
                  <div
                    style={{
                      background: " #eeeeee",
                      height: "83px",
                      marginBottom: "-15px",
                    }}
                  >
                    <p style={{ padding: "20px 0px 0px 20px" }}>
                      Сумма кредита
                    </p>
                    <input
                      onkeyup="myFunction(this)"
                      onblur="myFunc(this)"
                      data-value="rangeValue"
                      id="rangeValue"
                      name="amount"
                      value={data}
                      style={{
                        padding: "0px 0px 0px 20px",
                        width: " 150px",
                        background: " transparent",
                        border: " none",
                      }}
                    />
                  </div>
                  <div>
                    {/* <input
                      id="range"
                      class="range"
                      type="range"
                      name=""
                      value="1000"
                      min="1000"
                      max="250000"
                      onchange="rangeSlide(this.value)"
                    /> */}

                    {/* <label for="customRange3" class="form-label"></label>
                    <input
                      type="range"
                      class="form-range"
                      min="0"
                      max="100"
                      step="0.5"
                      id="customRange3"
                    /> */}

                    <div>
                      <input
                        style={{ width: "600px", cursor: "pointer" }}
                        type="range"
                        min="0"
                        max="250000"
                        step="100"
                        value={data}
                        data-value="rangeValue"
                        id="rangeValue8"
                        onChange={(e) => setData1(e.target.value)}
                      />
                    </div>
                    <div
                      class="d-flex"
                      style={{
                        justifyContent: "space-between",
                        fontFamily: " Roboto",
                        fontStyle: "normal",
                        fontWeight: " normal",
                        fontSize: "15px",
                        lineHeight: " 18px",
                        /* identical to box height */

                        color: "#959595",

                        /* Inside Auto Layout */

                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                        padding: "   0px 10px ",
                        background: "#ffffff",
                      }}
                    >
                      <p>1тыс</p>
                      <p>50тыс</p>
                      <p>100тыс</p>
                      <p>150тыс</p>
                      <p>200тыс</p>
                      <p>250тыс</p>
                    </div>
                  </div>

                  <h6>Срок кредита</h6>
                  <div class="years">
                    <button
                      // class="bloc active dab"
                      class={` bloc dab ${mousId === 1 && "active"}`}
                      onClick={() => onChang(1)}
                      id="srok"
                      data-value="1"
                      data-test-id="creditTerm-1"
                      type="button"
                    >
                      <p>1 года</p>
                    </button>
                    <button
                      // class="bloc dab"
                      class={` bloc dab ${mousId === 2 && "active"}`}
                      onClick={() => onChang(2)}
                      id="srok"
                      data-value="2"
                      data-test-id="creditTerm-2"
                      type="button"
                    >
                      <p>2 года</p>
                    </button>
                  </div>
                  <h2>
                    Расчет калькулятора произведен по ставкам,действующим при
                    условии формления финансовой защиты к кредиту.Не является
                    публичной офертой.
                  </h2>
                </div>
                <div class="courses1" style={{ width: "100%" }}>
                  <h1>Наше предложение</h1>
                  <div style={{ display: "flex", marginTop: "40px" }}>
                    <div style={{ marginLeft: " 40px" }}>
                      <p style={{ marginBottom: "15px" }}>Ежемесячной платёж</p>
                      <span
                        style={{
                          fontFamily: " Roboto",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "30px",
                          lineHeight: "35px",

                          color: "#000000",
                        }}
                      >
                        <span data-value="summa" id="summa" class="summa">
                          {emoji}
                        </span>
                        TJS
                      </span>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                      <p style={{ marginBottom: "15px" }}>Процентная ставка</p>
                      <span
                        id="prosent"
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: " 500",
                          fontSize: "30px",
                          lineHeight: " 35px",

                          color: " #000000",
                        }}
                        class="prosent"
                      >
                        {/* {emoji} */}
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <NavLink to="/registr">
                      <input
                        class="button"
                        type="button"
                        value="Получить кредит"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* <>newselect prep</> */}
            <div class={` newselect ${mousId === 2 ? "active" : "prep"}`}>
              <div
                class={` povtor1  powers ${mousesId === 2 ? "active" : "hide"}`}
              >
                <div class="courses" style={{ border: " none", width: "100%" }}>
                  <div
                    style={{
                      background: "#eeeeee",
                      height: " 83px",
                      marginBottom: "-15px",
                    }}
                  >
                    <p style={{ padding: "20px 0px 0px 20px" }}>
                      Сумма кредита
                    </p>
                    <input
                      onkeyup="myFunction8(this)"
                      onblur="myFunc8(this)"
                      data-value="rangeValue"
                      id="rangeValue8"
                      name="amount"
                      value={data}
                      style={{
                        padding: "0px 0px 0px 20px",
                        width: "150px",
                        background: "transparent",
                        border: " none",
                      }}
                    />
                  </div>
                  <div>
                    {/* <input
                      id="range8"
                      class="range"
                      type="range"
                      name=""
                      value="1000"
                      min="1000"
                      max="20000"
                      onChange="rangeSlide8(this.value)"
                    /> */}

                    <input
                      style={{ width: "600px", cursor: "pointer" }}
                      type="range"
                      min="0"
                      max="250000"
                      step="100"
                      value={datas}
                      data-value="rangeValue"
                      id="rangeValue8"
                      onChange={(e) => setData2(e.target.value)}
                    />

                    <div
                      class="d-flex"
                      style={{
                        justifyContent: " space-between",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "15px",
                        lineHeight: " 18px",
                        /* identical to box height */

                        color: "#959595",

                        /* Inside Auto Layout */

                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                        padding: "0px 10px",
                        background: "#ffffff;",
                      }}
                    >
                      <p>1тыс</p>
                      <p>10тыс</p>
                      <p>15тыс</p>

                      <p>20тыс</p>
                    </div>
                  </div>
                  <h6>Срок кредита</h6>
                  <div>
                    <input
                      class="bloc active dab2"
                      data-value="1"
                      type="button"
                      name="srok"
                      value="1 год"
                    />
                    <input
                      class="bloc dab2"
                      data-value="2"
                      type="button"
                      value="2 год"
                    />
                  </div>
                  <h2>
                    Расчет калькулятора произведен по ставкам,действующим при
                    условии формления финансовой защиты к кредиту.Не является
                    публичной офертой.
                  </h2>
                </div>
                <div class="courses1" style={{ width: "100%" }}>
                  <h1>Наше предложение</h1>
                  <div style={{ display: "flex", marginTop: "40px" }}>
                    <div style={{ marginLeft: "40px" }}>
                      <p style={{ marginBottom: "15px" }}>Ежемесячной платёж</p>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",

                          fontWeight: "500",
                          fontSize: "30px",
                          lineHeight: "35px",

                          color: "#000000",
                        }}
                      >
                        <span data-value="summa" id="summa8" class="summa">
                          {mehr}
                        </span>
                        USD
                      </span>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                      <p style={{ marginBottom: "15px" }}>Процентная ставка</p>
                      <span
                        id="prosent"
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: " normal",
                          fontWeight: "500",
                          fontSize: " 30px",
                          lineHeight: "35px",

                          color: "#000000",
                        }}
                        class="prosent"
                      >
                        {/* 18% */}
                        16%
                      </span>
                    </div>
                  </div>
                  <div>
                    <a href="loan.html">
                      <input
                        class="button"
                        type="button"
                        value="Получить кредит"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div class="povtorusd pover1"> */}

              <div
                class={`povtorusd  pover1 ${
                  mousesId === 1 ? "active" : "hide"
                }`}
              >
                <div class="courses" style={{ border: "none", width: "100%" }}>
                  <div
                    style={{
                      background: "#eeeeee",
                      height: "83px",
                      marginBottom: "-15px",
                    }}
                  >
                    <p style={{ padding: "20px 0px 0px 20px" }}>
                      Сумма кредита
                    </p>
                    <input
                      onkeyup="myFunction9(this)"
                      onblur="myFunc9(this)"
                      data-value="rangeValue"
                      id="rangeValue9"
                      name="amount"
                      value={datas}
                      style={{
                        padding: "0px 0px 0px 20px",
                        width: "150px",
                        background: "transparent",
                        border: "none",
                      }}
                    />
                  </div>
                  <div>
                    {/* <input
                      id="range9"
                      class="range"
                      type="range"
                      name=""
                      value="1000"
                      min="1000"
                      max="20000"
                      onChange="rangeSlide9(this.value)"
                    /> */}
                    <input
                      style={{ width: "600px", cursor: "pointer" }}
                      type="range"
                      min="0"
                      max="250000"
                      step="100"
                      value={datas}
                      data-value="rangeValue"
                      id="rangeValue8"
                      onChange={(e) => setData2(e.target.value)}
                    />

                    <div
                      class="d-flex"
                      style={{
                        justifyContent: " space-between",
                        fontFamily: " Roboto",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: " 15px",
                        lineHeight: "18px",
                        /* identical to box height */

                        color: "#959595",

                        /* Inside Auto Layout */

                        flex: "none",
                        order: " 0",
                        flexGrow: "0",
                        padding: "0px 10px",
                        background: " #ffffff;",
                      }}
                    >
                      <p>1тыс</p>
                      <p>10тыс</p>
                      <p>15тыс</p>

                      <p>20тыс</p>
                    </div>
                  </div>

                  <h6>Срок кредита</h6>
                  <div>
                    <input
                      class="bloc active dab3"
                      data-value="1"
                      type="button"
                      name="srok"
                      value="1 год"
                    />
                    <input
                      class="bloc dab3"
                      data-value="2"
                      type="button"
                      value="2 год"
                    />
                  </div>
                  <h2>
                    Расчет калькулятора произведен по ставкам,действующим при
                    условии формления финансовой защиты к кредиту.Не является
                    публичной офертой.
                  </h2>
                </div>
                <div class="courses1" style={{ width: "100%" }}>
                  <h1>Наше предложение</h1>
                  <div style={{ display: "flex", marginTop: "40px" }}>
                    <div style={{ marginLeft: "40px" }}>
                      <p style={{ marginBottom: "15px" }}>Ежемесячной платёж</p>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "30px",
                          lineHeight: "35px",

                          color: " #000000",
                        }}
                      >
                        <span data-value="summa" id="summa9" class="summa">
                          {mehr}
                        </span>
                        USD
                      </span>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                      <p style={{ marginBottom: "15px" }}>Процентная ставка</p>
                      <span
                        id="prosent"
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: " 500",
                          fontSize: "30px",
                          lineHeight: "35px",

                          color: "#000000",
                        }}
                        class="prosent"
                      >
                        18%
                      </span>
                    </div>
                  </div>
                  <div>
                    <a href="loan.html">
                      <input
                        class="button"
                        type="button"
                        value="Получить кредит"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="action">
        <h3>Полезно знать</h3>
        <div style={{ paddingTop: "2%", paddingBottom: "2%;" }}>
          <input
            // class="actions active jac"
            className={`actions jac ${activeId === 1 && "active"} `}
            onClick={() => handleClick(1)}
            type="button"
            value="Основные условия кредита"
          />
          <input
            // class="actions jac"
            className={`actions jac ${activeId === 2 && "active"} `}
            onClick={() => handleClick(2)}
            type="button"
            value="Необходимые документы"
            style={{ marginLeft: "3%;" }}
          />
        </div>
        {/* action1 active taj */}
        <div class={`action1 taj  ${activeId === 1 ? "active" : "hide"}  `}>
          <div style={{ display: "flex;" }}>
            <b>Сумма кредита:</b>
            <h2>
              от 10 000 до 250 000 сомони или эквивалентно в долларах США;
            </h2>
          </div>
          <div style={{ display: "flex;" }}>
            <b>Процентная ставка:</b>
            <h2>26% годовых в сомони,</h2>
          </div>
          <div style={{ display: "flex;" }}>
            <b>Срок кредита:</b>
            <h2>до 72 месяцев;</h2>
          </div>
          <div style={{ display: "flex;" }}>
            <b>Залоговое обеспечение:</b>
            <h2>недвижимость;</h2>
          </div>
        </div>
        {/* "action1 taj" */}
        <div class={`action1 taj ${activeId === 2 ? "active" : "hide"}  `}>
          <div>
            <b
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "140%",
                /* or 22px */

                color: "#000000;",
              }}
            >
              • Патент;
            </b>
          </div>
          <div>
            <b
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: " normal",
                fontSize: "16px",
                lineHeight: "140%",
                /* or 22px */

                color: "#000000;",
              }}
            >
              • Сертификат.
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
