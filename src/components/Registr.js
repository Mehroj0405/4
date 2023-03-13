import React, { useState, useEffect } from "react";
import "./Registr.css";
import loan2 from "../image/loan/2.png";
import loan4 from "../image/loan/4.png";
import loan3 from "../image/loan/3.png";
import loan5 from "../image/loan/5.png";
import loan6 from "../image/loan/6.png";
import loan7 from "../image/loan/7.png";
import loan8 from "../image/ipoteka/icon.png";
import Footer from "./Footer";
// import { func } from "prop-types";

const Registr = () => {
  const [activeId, setActiveId] = useState(1);
  const [activsId, setActivsId] = useState(1);
  const [emoji, setEmoji] = useState("");
  const [emojis, setEmojis] = useState("");
  const [data, setData] = useState(0);
  const [datas, setDatas] = useState(0);
  const [onclick, setOnclick] = useState(1);
  const [mousId, setMous] = useState(1);

  // АЙ НОМИ ФУНКСИЯ ТОЖЕ ЗАВИСТ
  useEffect(() => {}, [data]);
  useEffect(() => {}, [datas]);

  function handlClick(id) {
    setOnclick(id);
  }

  function handleChange(id) {
    setActivsId(id);
  }

  function handleClick(id) {
    setActiveId(id);
  }

  function onChange(id) {
    setMous(id);
  }

  function setData1(value) {
    let res = (((value * 5) / 100 + 1000) / 3).toFixed(2);
    setData(value);
    setEmoji(res);
  }

  function setData2(value) {
    let res = (((value * 30) / 100 + 1000) / 12).toFixed(2);
    setDatas(value);
    setEmojis(res);
  }

  return (
    <div>
      <div class="loanimg">
        <div
          style={{
            background: "transparent",
            paddingLeft: "100px",
            paddingTop: "5%",
          }}
        >
          <h1
            style={{
              fontFamily: "Roboto ",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "50px",
              lineHeight: "59px",

              color: "#03416A",

              textShadow: "0px 4px 17px rgba(0, 0, 0, 0.45)",
            }}
          >
            Кредит для бизнеса
          </h1>
        </div>
        <div class="loanbutton">
          <input class="lbutton" type="button" value="Рассчитать кредит" />
          <a href="#callMee">
            <input
              class="lbutton1"
              type="button"
              value="Заполнить заявку"
              style={{ border: "none", marginLeft: " 2%", color: "#ffffff" }}
            />
          </a>
        </div>
      </div>

      {/* <></> */}

      <div className="ipoteknew" style={{ paddingBottom: "0%" }}>
        <div class="row" style={{ display: "flex", justifyContent: "center" }}>
          <div class="col-3">
            <div class="iconimg">
              <img src={loan2} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>От 1 до 2 лет</h3>
              <p>срок </p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={loan3} alt="icon1" style={{ left: "25%" }} />
            </div>
            <div class="textipotek">
              <h3>До 250 000 TJS </h3>
              <p>cумма</p>
            </div>
          </div>
          <div class="col-3">
            <div class="iconimg">
              <img src={loan4} alt="icon1" />
            </div>
            <div class="textipotek">
              <h3>Для ЮЛ и ИП</h3>
              <p>
                кредит на расчетный счёт
                <br /> компании
              </p>
            </div>
          </div>
        </div>

        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1%",
            paddingBottom: "10%",
          }}
        >
          <div
            class="col-5"
            style={{ background: " #DBEBF6", marginBottom: "1%" }}
          >
            <h1 className="hs">С залогами или без</h1>
            <p>
              Кредиты с разными видами обеспечения
              <br /> или без залога
            </p>
          </div>
          <div
            class="col-5"
            style={{
              background: "#DBEBF6",
              marginLeft: "2%",
              marginBottom: " 1% ",
            }}
          >
            <h1 className="hs">Без скрытых комиссий</h1>
            <p>
              Нет комиссий за выдачу и сопровождение
              <br /> кредита
            </p>
          </div>
          <div class="col-5" style={{ background: "#DBEBF6" }}>
            <h1 className="hs">Возвращайте, как удобно</h1>
            <p>
              Выбирайте график и погашайте кредит
              <br /> любым доступным способом
            </p>
          </div>
          <div
            class="col-5"
            style={{ background: "#DBEBF6", marginLeft: "2%" }}
          >
            <h1 className="hs">Экономьте на налогах</h1>
            <p>
              Кредит учитывается в балансе и снижает
              <br /> налоговую нагрузку
            </p>
          </div>
        </div>

        <div class="ipotecUSD" style={{ paddingBottom: "3%" }}>
          <h5>Как получить кредит</h5>
        </div>

        <div
          class="row"
          style={{ paddingLeft: " 100px", paddingRight: "100px" }}
        >
          <div class="col-4">
            <div
              style={{
                width: "28%",
                height: "60%",
                border: " 3px solid #E2E2E2",
                borderRadius: "50%",
                marginLeft: "35%",
              }}
            >
              <img src={loan5} alt="loan5" />
            </div>
            <h2>Оставьте заявку</h2>
            <p>
              Вам позвонит менеджер
              <br />и поможет подобрать кредит
            </p>
          </div>
          <div class="col-4">
            <div
              style={{
                width: "28%",
                height: " 60%",
                border: "3px solid #E2E2E2",
                borderRadius: "50%",
                marginLeft: "35%",
              }}
            >
              <img
                src={loan6}
                alt="loan6"
                style={{ position: "relative", left: "24%", top: "24%" }}
              />
            </div>
            <h2>Предоставьте документы</h2>
            <p>
              Мы проверим данные и проведём
              <br />
              оценку бизнеса на кредитоспособность
            </p>
          </div>
          <div class="col-4">
            <div
              style={{
                width: "28%",
                height: "60%",
                border: " 3px solid #E2E2E2",
                borderRadius: "50%",
                marginLeft: "35%",
              }}
            >
              <img
                src={loan7}
                alt="loan7"
                style={{ position: "relative;", left: "20%", top: "33%" }}
              />
            </div>
            <h2>Получите кредит</h2>
            <p>
              Деньги придут на счёт
              <br />
              после подписания договора
            </p>
          </div>
        </div>

        {/* <></> */}

        <div id="callMee" class="callMee">
          <h4>Пройдите проверку и получите предварительное предложение</h4>
          <div class="callNumber">
            <h6>Мобильный телефон</h6>
            +<input type="number" value="992" />
          </div>
          <div class="callButton">
            <input type="button" value="Перезвонить мне" />
          </div>
          <div class="iconText">
            <img src={loan8} alt="iconimg" />
            <h5>Мы гарантируем безопасность и сохранность ваших данных</h5>
          </div>
        </div>

        <div class="hot">
          <h2>Кредитование бизнеса</h2>
        </div>
        {/* "USD1 active iqbol" */}

        <div
          style={{
            marginTop: "0.8%",
            paddingLeft: "2%",
            paddingBottom: "10%;",
          }}
        >
      
        </div>
      </div>

      <div class="action">
        <h3>Полезно знать</h3>
        <div style={{ paddingTop: "2%", paddingBottom: "2%;" }}>
          <input
            className={`actions jac ${activsId === 1 && "active"} `}
            onClick={() => handleChange(1)}
            type="button"
            value="Основные условия кредита"
          />
          <input
            className={`actions jac ${activsId === 2 && "active"} `}
            onClick={() => handleChange(2)}
            type="button"
            value="Необходимые документы"
            style={{ marginLeft: "3%;" }}
          />
        </div>
        {/* action1 active taj */}
        <div class={`action1 taj  ${activsId === 1 ? "active" : "hide"}  `}>
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
        <div class={`action1 taj ${activsId === 2 ? "active" : "hide"}  `}>
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

export default Registr;
