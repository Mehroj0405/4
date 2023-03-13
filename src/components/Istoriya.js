import React, { useState } from "react";
import "./Istoriya.css";
import ipotec1 from "../image/ipoteka/1.png";
import ipotec2 from "../image/ipoteka/2.png";
import ipotec3 from "../image/ipoteka/3.png";
import ipotec4 from "../image/ipoteka/4.png";
import ipotecs1 from "../image/ipoteka/1().png";
import ipotecs2 from "../image/ipoteka/2().png";
import ipotecs3 from "../image/ipoteka/3().png";
import icon from "../image/ipoteka/icon.png";
import Meha4 from "../image/ipoteka/icon.png";
import { NavLink } from "react-router-dom";

const Istoriya = () => {
  const [activeId, setActiveId] = useState(1);

  // АЙ НОМИ ФУНКСИЯ ТОЖЕ ЗАВИСТ

  function handleClick(id) {
    setActiveId(id);
  }

  return (
    <div>
      <div class="clickServiceimg">
        <div style={{ padding: "80px 100px 230px 100px;" }}>
          <h1
            style={{
              fontFamily: "Roboto",
              fontStyle: " normal",
              fontWeight: "500",
              fontSize: "48px",
              lineHeight: "56px",
              paddingTop: "70px",
              paddingLeft: "40px",

              color: "#03416A;",
            }}
          >
            Узнать свою <br /> кредитную историю
          </h1>
        </div>
      </div>

      <div class="ipoteknew">
        <div class="row">
          <div class="col-3">
            <div class="iconimg">
              <img src={ipotec1} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>Онлайн-решение</h3>
              <p> за 2 минуты</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={ipotec2} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>До 250 Тыс </h3>
              <p> сумма кредита</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={ipotec3} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>От 1 до 2 лет </h3>
              <p> срок кредита</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={ipotec4} alt="icon1" />
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
                <img src={ipotecs1} alt="1" />
              </div>
              <h3>Заполните заявку</h3>
              <p>За 5 минут полностью онлайн</p>
            </div>
            <div class="col-2"></div>
            <div class="col-1">
              <div>
                <img src={ipotecs2} alt="2" style={{ marginLeft: "10%" }} />
              </div>
              <h3>2 минуты</h3>
              <p>Дождитесь одобрения</p>
            </div>
            <div
              class="col-2"
              style={{ marginLeft: "-12.5%", marginRight: "-5.5%;" }}
            ></div>
            <div class="col-1">
              <div>
                <img src={ipotecs3} alt="3" />
              </div>
              <h3>Получите деньги</h3>
              <p>В отделении Зудамал</p>
            </div>
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
              style={{ padding: "13px", width: "190px" }}
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

export default Istoriya;
