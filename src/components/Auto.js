import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Auto.css";
import New4 from "../image/ipoteka/4.png";
import New3 from "../image/ipoteka/3.png";
import New2 from "../image/ipoteka/2.png";
import New1 from "../image/ipoteka/1.png";
import News3 from "../image/ipoteka/3().png";
import News2 from "../image/ipoteka/2().png";
import News1 from "../image/ipoteka/1().png";
import Mehr1 from "../image/ipoteka/icon.png";
import Meha4 from "../image/ipoteka/icon.png";
import Footer from "./Footer";

const Auto = () => {
  const [activeId, setActiveId] = useState(1);
  const [activId, setActivId] = useState(1);
  const [counter, setCounter] = useState(0);
  const [mousId, setMous] = useState(1);
  const [mousdId, setMousd] = useState(1);
  const [mousesId, setMouses] = useState(1);
  const [datas, setDatas] = useState(0);
  const [data, setData] = useState(0);
  const [emoji, setEmoji] = useState("");
  const [mehr, setMehr] = useState("");
  useEffect(() => {}, [data]);
  useEffect(() => {}, [datas]);

  function decrement() {
    setCounter(counter + 1);
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

  function handleClick(id) {
    setActiveId(id);
  }

  function onChange(id) {
    setActivId(id);
  }

  function onChange(id) {
    setMous(id);
  }

  function setData1(value) {
    let res = (((value * 30) / 100 + 1000) / 12).toFixed(0);
    setData(value);
    setEmoji(res);
  }

  function setData2(value) {
    let res = (((value * 18) / 100 + 1000) / 12).toFixed(0);
    setDatas(value);
    setMehr(res);
  }

  return (
    <div>
      <div class="consumerLoansimg">
        <div
          style={{
            background: "transparent",
            paddingLeft: "100px",
            paddingTop: "10%",
            paddingBottom: "11%",
            width: " 90%",
          }}
        >
          <h1
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: " 500",
              fontSize: "64px",
              lineHeight: "75px",
              сolor: "white",
              textShadow: "0px 4px 17px rgba(0, 0, 0, 0.45)",
            }}
          >
            <p
              style={{
                color: "white",
                textShadow: "0px 4px 17px rgba(0, 0, 0, 0.45)",
              }}
            >
              {" "}
              Потребительские кредиты
              <br /> клиентам (Вавилон-М и Вавилон-Т))
            </p>
          </h1>
        </div>
      </div>

      <div className="ipoteknew" style={{ paddingBottom: "0%" }}>
        <div class="row">
          <div class="col-3">
            <div class="iconimg">
              <img src={New1} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>Онлайн-решение</h3>
              <p> за 2 минуты</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={New2} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>До 250 Тыс TJS</h3>
              <p>сумма кредита</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={New3} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>От 1 до 5 лет</h3>

              <p>срок кредита </p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={New4} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>Доставка кредита</h3>

              <p>на деботавую карту </p>
            </div>
          </div>
        </div>

        <div class="ipotecUSD">
          <h5>Рассчитайте свой кредит</h5>
          <div style={{ marginTop: "0.8%", paddingLeft: "2%" }}></div>
        </div>

        <div className={`cours1 ${activeId === 1 ? "active" : "hide"}`}>
          <div style={{ display: "flex", paddingBottom: "50px" }}>
            <div style={{ marginTop: "3%", paddingLeft: "10%" }}>
              <input
                class={`tj usd ${mousId === 1 && "active"} `}
                onClick={() => onChange(1)}
                style={{ borderRadius: "10px 0px 0px 10px" }}
                type="button"
                value="TJS"
              />
              <input
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
                class={`newclient1 actb ${mousesId === 1 && "active"} `}
                onClick={() => handle(1)}
                type="button"
                value="Новый клиент"
              />
              <input
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
                      // name="amount"
                      // value={data}
                      value={data}
                      onChange={(e) => setData(e.target.value)}
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
                        color: "#959595",

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
                        {/* {emoji} */}
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
                      value={data}
                      data-value="rangeValue"
                      id="rangeValue8"
                      onChange={(e) => setData1(e.target.value)}
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
                          {emoji}
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

        <div class="jack">
          <h1>Онлайн-заявка на кредит наличными</h1>
          <div
            class="row"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5%;",
              flexWrap: "unset",
            }}
          >
            <div class="col-1">
              <div>
                <img src={News1} alt="1" />
              </div>
              <h3>Заполните заявку</h3>
              <p>За 5 минут полностью онлайн</p>
            </div>
            <div class="col-2"></div>
            <div class="col-1">
              <div>
                <img src={News2} alt="2" style={{ marginLeft: "10%;" }} />
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
                <img src={News3} alt="3" />
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
            <h4>Шаг {counter} из 3. Получить кредит </h4>
            <input
              // onClick={counter}
              style={{ width: "100px", textAlign: "center", cursor: "pointer" }}
              type="range"
              min="0"
              max="250000"
              step="83333"
              // value={counter}
              // data-value="rangeValue"
              // id="rangeValue8"
              // onChange={(e) => setData2(e.target.value)}
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
              onClick={decrement}
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
                      onClick={decrement}
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
                      onClick={decrement}
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
              Нажимая кнопку «Продолжить » я подтверждаю, что ознакомлен и
              согласен с
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
                style={{ padding: "13px", width: "190px", marginLeft: "30px" }}
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
                      Сотруднки "МДО" с вами свяжутся
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

      {/* аниматсия */}

      <Footer />
    </div>
  );
};

export default Auto;
