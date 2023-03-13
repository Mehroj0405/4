import React, { useState, useEffect } from "react";
import "./Depozit.css";
import Deps5 from "../image/uslugi/icon.png";
import Uslug from "../image/uslugi/icon.png";
import Meha4 from "../image/ipoteka/icon.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Depozit = () => {
  const [activeId, setActiveId] = useState(1);
  const [activId, setActivId] = useState(1);
  const [data, setData] = useState(0);
  const [period, setPeriod] = useState(1);
  const [datas, setDatas] = useState(0);
  const [emoji, setEmoji] = useState("");
  const [emojis, setEmojis] = useState("");

  useEffect(() => {}, [data]);
  useEffect(() => {}, [datas]);

  function handleClick(id) {
    setActiveId(id);
  }

  function onChange(id) {
    setActivId(id);
  }

  function setData1(value) {
    console.log(period);
    let res = (((value * 5) / 100 + 1000) / 12).toFixed(2);
    setData(value);
    setEmoji(res);
  }

  function setData2(value) {
    let res = (((value * 4) / 100 + 1000) / 12).toFixed(2);
    setDatas(value);
    setEmojis(res);
  }

  return (
    <div>
      <div class="depositsimg">
        <div
          style={{
            background: "transparent",
            padding: "80px 100px 70px 100px;",
          }}
        >
          <h1
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: " 500",
              fontSize: "48px",
              lineHeight: "56px",

              color: "#03416A",
            }}
          >
            Депозиты
          </h1>
          <div class="depositsbutton">
            <input type="button" value="ОТКРЫТЬ ВКЛАД" />
          </div>
        </div>
      </div>

      <div class="deposits1">
        <div
          style={{
            paddingLeft: "13px",
            paddingTop: "5%",
            paddingBottom: "2%;",
          }}
        >
          <h1>Выбирайте условия </h1>
        </div>
        <div>
          <ul>
            <li>
              Используйте опцию пополнения, чтобы увеличить свои накопления
            </li>
            <li>Получайте лучшие условия с премиальный обслуживанием </li>
            <li>
              Снимайте деньги, когда вам удобно с опцией частичного снятия
            </li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", paddingTop: "7%;" }}>
        <h3
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "30px",
            lineHeight: "130%",
            /* identical to box height, or 39px */

            color: "#023B69;",
          }}
        >
          ОТКРЫТЬ ВКЛАД
        </h3>
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
          {/* <input
              id="range"
              onchange="myFunction3(this.value)"
              value=""
              class="text"
              type="text"
              placeholder="Фамилия, имя и отчество"
              required="required"
            /> */}

          <input
            class="form-control"
            type="text"
            placeholder="Фамилия, имя и отчество"
          />

          <p>Укажите точно как в паспорте</p>

          <p></p>
          <div style={{ display: "flex;" }}>
            <div>
              {/* <input
                  onchange="myFunction1(this.value)"
                  class="number1"
                  type="number"
                  id="range1"
                  value=""
                  placeholder="Номер телфона"
                  required="required"
                /> */}
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput"></label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Номер телфона"
                  />
                </div>
              </form>

              <p>Мы отправим решение по заявке на указанный номер</p>
            </div>
            <div style={{ marginLeft: "5%;" }}>
              {" "}
              {/* <input
                  onchange="myFunction2(this.value)"
                  class="number"
                  type="email"
                  id="range2"
                  placeholder="Электронная почта"
                  required="required"
                /> */}
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput"></label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Электронная почта"
                  />
                </div>
              </form>
              <p>На данный email будет направлена информация по заявке</p>
            </div>
          </div>

          <h3>
            Нажимая кнопку «Заказать карту » я подтверждаю, что ознакомлен и
            согласен с{" "}
            <NavLink
              to="../doc/обработка_персональных_данных_Зудамал"
              target="_blank"
              style={{ borderBottom: "2px solid;" }}
            >
              условиями выпуска и обслуживания дебетовых карт и на обработку
              моих персональных данных.
            </NavLink>
          </h3>

          <div class="next">
            {/* <button id="btn" class="button" onclick="">
                Продолжить
              </button> */}
            <button
              style={{
                marginLeft: "120px",
                padding: "13px",
                width: "190px",
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
              }}
              type="button"
              id="btn"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Продолжить
            </button>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      {/* Modal title */}
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body" style={{ textAlign: "center" }}>
                    Блогадарим вас !
                  </div>
                  <div class="modal-body" style={{ textAlign: "center" }}>
                    Ваш запрос принять
                  </div>
                  <div class="modal-body" style={{ textAlign: "center" }}>
                    Сотрунки "МДО" с вами свяжутся{" "}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Закрить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ipotecUSD">
        <h5
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: " normal",
            fontSize: "50px",

            lineHeight: "130%;",

            color: "#000000;",
          }}
        >
          Рассчитайте свой годовой доход
        </h5>
        <div style={{ marginTop: " 2%", paddingLeft: "13%" }}>
          <input
            // class="tj1 active usd"

            class={` tj usd ${activId === 1 && "active"} `}
            onClick={() => onChange(1)}
            style={{ borderRadius: "10px 0px 0px 10px;" }}
            type="button"
            value="TJS"
          />
          <input
            // class="tj1 usd"
            class={` tj usd ${activId === 2 && "active"} `}
            onClick={() => onChange(2)}
            type="button"
            style={{ marginLeft: "-3.2%;" }}
            value="USD"
          />
        </div>
      </div>

      <div
        className={`cours1 ${activId === 1 ? "active" : "hide"}`}
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingBottom: "15%;",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            class="courses"
            style={{ border: "none", width: "100%", height: "0%;" }}
          >
            <div
              style={{
                background: " #eeeeee",
                height: "83px",
                marginBottom: "-15px;",
              }}
            >
              <p style={{ padding: "20px 0px 0px 20px;" }}>Сумма вклада</p>
              <input
                onkeyup="myFunction(this)"
                onblur="myFunc(this)"
                id="rangeValue"
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

              <div
                class="d-flex"
                style={{
                  justifyContent: "space-between",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHight: "18px",
                  color: "#959595",
                  flex: "none",
                  order: "0",
                  flexGrow: "0;",
                  padding: "0px 10px",
                  background: "#ffffff",
                }}
              >
                <p>10тыс</p>
                <p>20тыс</p>
                <p>30тыс</p>
                <p>40тыс</p>
                <p>50тыс</p>
              </div>
              <h6 style={{ marginTop: "10px;" }}>Срок кредита</h6>
              <div>
                <button
                  name="srok"
                  data-Value="1"
                  className={` bloc dab ${period === 1 && "active"} `}
                  onClick={() => {
                    setPeriod(1);
                  }}
                  type="button"
                  value="1"
                >
                  1 год
                </button>
                <button
                  name="srok"
                  data-Value="1"
                  // class="bloc active dab"
                  className={` bloc dab ${period === 2 && "active"} `}
                  onClick={() => {
                    setPeriod(2);
                  }}
                  type="button"
                  value="2"
                >
                  2 года
                </button>
                <button
                  name="srok"
                  data-Value="1"
                  // class="bloc active dab"
                  className={` bloc dab ${period === 3 && "active"} `}
                  onClick={() => {
                    setPeriod(3);
                  }}
                  type="button"
                  value="3"
                >
                  3 года
                </button>
              </div>
            </div>
            <div style={{ display: "flex", paddingTop: "5%;" }}>
              <input
                type="checkbox"
                name="123"
                id="123"
                style={{ marginTop: "2px;" }}
              />
              <p
                style={{
                  paddingLeft: "1%;",
                  fontFamily: "Roboto",
                  fontStyle: " normal;",
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "18px",
                  /* identical to box height */

                  color: "#959595",
                }}
              >
                Рассчитать с вычетом 12% налога
              </p>
            </div>
          </div>
          <div class="depositsBusiness3">
            <div style={{ display: "flex;" }}>
              <div style={{ background: "#ffffff;", marginBottom: "-15px;" }}>
                <p
                  style={{ padding: "20px 0px 0px 20px", marginBottom: "6%;" }}
                >
                  Ваш годовый доход{" "}
                </p>
                <span
                  data-value="summa"
                  id="summa"
                  class="summa"
                  style={{ paddingLeft: "20px;" }}
                >
                  {/* 1000 */}
                  {emoji}
                </span>
                <span style={{ FontFamily: "Roboto", fontSize: "30px;" }}>
                  {" "}
                  TJS
                </span>
              </div>
              <div
                style={{
                  background: " #ffffff",

                  marginTop: "-70px",
                  paddingLeft: "315px",
                }}
              >
                <p style={{ padding: "20px 0px 0px 20px;" }}>
                  Процентная ставка
                </p>
                <span
                  style={{
                    padding: "0px 0px 5px 20px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "30px",
                    lineHeight: "35px",

                    color: "#000000",
                  }}
                >
                  5 %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "2 block" */}

      <div
        // class="cours1 cours"
        className={`cours1 ${activId === 2 ? "active" : "hide"}`}
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingBottom: "15%;",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            class="courses"
            style={{ border: "none", width: "100%", height: "0%;" }}
          >
            <div
              style={{
                background: "#eeeeee",
                height: "83px",
                marginBottom: "-15px",
              }}
            >
              <p style={{ padding: "20px 0px 0px 20px;" }}>Сумма вклада</p>
              <input
                onkeyup="myFunction1(this)"
                onblur="myFunc1(this)"
                id="rangeValue1"
                // value="10000"
                value={data}
                style={{
                  fontSize: "23px",
                  padding: "0px 0px 0px 20px",
                  width: "150px",
                  background: "transparent",
                  border: " none",
                }}
              />
            </div>
            <div>
              {/* <input
                id="range1"
                class="range"
                type="range"
                name=""
                value="10000"
                min="10000"
                max="50000"
                onChange="rangeSlide1(this.value)"
              /> */}

              <input
                style={{ width: "650px", cursor: "pointer" }}
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
                  justifyContent: "space-between",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "18px;",
                  /* identical to box height */

                  color: "#959595",

                  /* Inside Auto Layout */

                  flex: "none",
                  order: " 0",
                  flexGrow: "0;",
                  padding: "0px 10px",
                  background: " #ffffff",
                }}
              >
                <p>10тыс</p>
                <p>20тыс</p>
                <p>30тыс</p>
                <p>40тыс</p>
                <p>50тыс</p>
              </div>
              <h6 style={{ marginTop: "10px;" }}>Срок кредита</h6>
              <div>
                <input
                  id="srok"
                  data-Value="1"
                  class="bloc active dabf"
                  type="button"
                  name="srok"
                  value="1 год"
                />
                <input
                  data-Value="2"
                  class="bloc dabf"
                  type="button"
                  value="2 год"
                />
              </div>
            </div>
            <div style={{ display: " flex", paddingTop: "5%;" }}>
              <input
                type="checkbox"
                name="123"
                id="123"
                style={{ marginTop: "2px;" }}
              />
              <p
                style={{
                  paddingLeft: " 1%",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "18px",
                  /* identical to box height */

                  color: "#959595",
                }}
              >
                Рассчитать с вычетом 12% налога
              </p>
            </div>
            {/* <script type="text/javascript">
                    function rangeSlide1(value) {
                        console.log(value)
                        var hup1 = value;
                        var hup1 = Number(hup1);
                        var summa1 = document.getElementById('summa1').innerText;
                        var srok1 = dabf[activeTab4].getAttribute('data-value');
                        srok1 = Number(srok1);
                        document.getElementById('summa1').innerText = (hup1 * srok1 * 0.04).toFixed(2);
                        document.getElementById('rangeValue1').value = value;
                    };
                    function myFunction1(event) {
                        console.log(event.value)
                        var x = document.getElementById("range1");
                        var fup1 = event.value;
                        var fup1 = Number(fup1);
                        x.value = event.value == '' ? 10000 : event.value;
                        var summa1 = document.getElementById('summa1').innerText;
                        var srok1 = dabf[activeTab4].getAttribute('data-value');
                        srok1 = Number(srok1);
                        document.getElementById('summa1').innerText = (fup1 * srok1 * 0.04).toFixed(2);
                    }
                    function myFunc1(event) {
                        event.value = event.value < 10000 ? 10000 : event.value;
                    }
                </script> */}
          </div>
          <div class="depositsBusiness3">
            <div style={{ display: "flex;" }}>
              <div style={{ background: "#ffffff", marginBottom: "-15px;" }}>
                <p
                  style={{ padding: "20px 0px 0px 20px", marginBottom: "6%;" }}
                >
                  Ваш годовый доход{" "}
                </p>
                <span
                  data-value="summa1"
                  id="summa1"
                  class="summa"
                  style={{ paddingLeft: "20px;" }}
                >
                  {/* 1000 */}
                  {/* {emoji} */}
                  {emojis}
                </span>
                <span style={{ fontFamily: "Roboto", fontSize: "30px;" }}>
                  {" "}
                  USD
                </span>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  marginBottom: "-15px",
                  paddingLeft: "10%",
                  paddingRight: " 5%;",
                }}
              >
                <p style={{ padding: "20px 0px 0px 20px;" }}>
                  Процентная ставка
                </p>
                <span
                  style={{
                    padding: "0px 0px 5px 20px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "30px",
                    lineHeight: "35px",

                    color: "#000000",
                  }}
                >
                  4 %
                </span>
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

      <Footer />
    </div>
  );
};

export default Depozit;
