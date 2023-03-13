import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Photo from "../image/photo.png";
import { NavLink } from "react-router-dom";
import Photo1 from "../image/photo1.png";
import Qurbon from "../image/qurbon.png";
import zudamal from "../image/zudaml.png";
import ipoteca from "../image/ipoteka.png";
import Dom from "../image/dom-ipotek.png";
import Vector from "../image/Vector.png";
import Cart from "../image/car.png";
import invin from "../image/free-icon-identification.png";
import Vector1 from "../image/Vector (1).png";
import Vector2 from "../image/Vector (2).png";
import img1 from "../image/valut/USD.png";
import img2 from "../image/valut/EUR.png";
import img3 from "../image/valut/RUB.png";
import "./Home.css";
import Footer from "./Footer";

function Example() {
  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const [mousId, setMous] = useState(1);
  const [mousdId, setMousd] = useState(1);
  const [mousesId, setMouses] = useState(1);
  const [dolarId, setDolar] = useState(1);
  const [evroId, setEvro] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [datas, setDatas] = useState(0);
  const [datan, setDatan] = useState(0);
  const [result, setResult] = useState(0);
  const [results, setResults] = useState(0);
  const [natija, setNatija] = useState(0);
  const [data, setData] = useState(0);
  const [emoji, setEmoji] = useState("");
  const [mehr, setMehr] = useState("");
  const [count, setCount] = useState("");
  const [counts, setCounts] = useState("");
  const [countss, setCountss] = useState("");
  const [cours, setCours] = useState("");
  useEffect(() => {}, [data]);
  useEffect(() => {}, [datas]);
  useEffect(() => {}, [datan]);

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

  function handles(id) {
    setDolar(id);
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

  function setData3(value) {
    let res = (((value * 4) / 100 + 1000) / 12).toFixed(0);
    setDatan(value);
    setCount(res);
  }

  function setData4(value) {
    let res = (((value * 5) / 100 + 1000) / 12).toFixed(0);
    setResult(value);
    setCounts(res);
  }

  function setData5(value) {
    let res = (((value * 28) / 100 + 1000) / 12).toFixed(0);
    setResults(value);
    setCountss(res);
  }

  function setData6(value) {
    let res = (((value * 16) / 100 + 1000) / 12).toFixed(0);
    setNatija(value);
    setCours(res);
  }

  return (
    <div>
      <div class="identify">
        <NavLink to="./fikatsiya">
          <img className="mekha" src={invin} alt="iconimg" />
          <h3 className="mekha">Идентификация</h3>
        </NavLink>
      </div>

      <div>
        <div className="slider">
          <div className={`slide ${activeId === 1 ? "active" : "hide"}`}>
            <div className="text">
              <h1>Онлайн кредит для бизнеса</h1>
            </div>
            <div className="target">
              <Button
                variant="btn btn-primary"
                className="vvv"
                onClick={handleShow}
              >
                Подробнее
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>МДО “Зудамал”</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h1 className="zagalovak1">
                    МДО “Зудамал” всегда открыт новым возможностям
                    сотрудничества.
                  </h1>

                  <h2 className="zagalovak2">
                    Развитие и расширение бизнеса предполагает регулярное
                    инвестирование. Вопрос о потребности в финансовых вложениях
                    рано или поздно возникает как у начинающих индивидуальных
                    предпринимателей, так и вполне успешных бизнесменов. ООО ЗАО
                    “Зудамал” предлагает вам кредит для развития вашего бизнеса.
                  </h2>
                  <div className="dvizhimoe">
                    <h6>
                      Обеспечение: <p>движимое/недвижимое имущество.</p>
                    </h6>
                  </div>
                  <div className="obespch">
                    <h6>
                      Сумма: <p>от 1 000 до 500 000 сомони.</p>
                    </h6>
                  </div>
                  <div className="mesyats3">
                    <h6>
                      Продолжительность займа: <p>от 1 до 36 месяцев.</p>{" "}
                    </h6>
                  </div>

                  <h3 className="usloviyas">Условия кредитования:</h3>

                  <ul>
                    <li>Юридические лица, зарегистрированные в РТ;</li>
                    <li>Опыт работы не менее 6 месяцев;</li>
                    <li>Соответствие бизнеса по законодательству РТ;</li>
                    <li>Отсутствие обязательств перед третьими лицами;</li>
                    <li>Наличие залогового обеспечения.</li>
                  </ul>

                  <h3>Цель кредита:</h3>
                  <ul></ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Закрить
                  </Button>
                </Modal.Footer>
              </Modal>

              <NavLink class="ctb" to="/registr">
                <button className="btn btn-outline-danger   mekha ">
                  Подать заявку
                </button>
                <img src={Photo} />
              </NavLink>
            </div>
          </div>
          <div className={`slide ${activeId === 2 ? "active" : "hide"}`}>
            <div className="text">
              <h1 className="ipotecs">Ипотека</h1>
              <p className="pipoteck">Преобретайте дом своей мечты</p>
            </div>
            <div class="target1">
              <a class="ctb" href="#">
                <button
                  id="jimy"
                  type="button"
                  class="btn btn-primary   mekha        "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Подробнее
                </button>
              </a>
              <NavLink class="cta" to="">
                <button className="mekha">Подать заявку</button>
              </NavLink>
              <img className="phots" src={Photo1} />
            </div>
          </div>
          <div className={`slide ${activeId === 3 ? "active" : "hide"}`}>
            <div class="text">
              <h1>Денежные переводы</h1>
            </div>
            <div className="target">
              <Button variant="primary" className="vvv" onClick={handleShow}>
                Подробнее
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>МДО “Зудамал”</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h1 className="zagalovak1">
                    МДО “Зудамал” всегда открыт новым возможностям
                    сотрудничества.
                  </h1>

                  <h2 className="zagalovak2">
                    Развитие и расширение бизнеса предполагает регулярное
                    инвестирование. Вопрос о потребности в финансовых вложениях
                    рано или поздно возникает как у начинающих индивидуальных
                    предпринимателей, так и вполне успешных бизнесменов. ООО ЗАО
                    “Зудамал” предлагает вам кредит для развития вашего бизнеса.
                  </h2>
                  <div className="dvizhimoe">
                    <h6>
                      Обеспечение: <p>движимое/недвижимое имущество.</p>
                    </h6>
                  </div>
                  <div className="obespch">
                    <h6>
                      Сумма: <p>от 1 000 до 500 000 сомони.</p>
                    </h6>
                  </div>
                  <div className="mesyats3">
                    <h6>
                      Продолжительность займа: <p>от 1 до 36 месяцев.</p>{" "}
                    </h6>
                  </div>

                  <h3 className="usloviyas">Условия кредитования:</h3>

                  <ul>
                    <li>Юридические лица, зарегистрированные в РТ;</li>
                    <li>Опыт работы не менее 6 месяцев;</li>
                    <li>Соответствие бизнеса по законодательству РТ;</li>
                    <li>Отсутствие обязательств перед третьими лицами;</li>
                    <li>Наличие залогового обеспечения.</li>
                  </ul>

                  <h3>Цель кредита:</h3>
                  <ul>
                    <li>Финансирование инвестиционных проектов;</li>
                    <li>Финансирование оборотных и основных средств.</li>
                  </ul>

                  <h3>Необходимые документы:</h3>
                  <ul>
                    <li>Кредитная заявка;</li>
                    <li>Учредительные документы;</li>
                    <li>ИНН;</li>
                    <li>
                      Свидетельство о государственной регистрации
                      индивидуального предпринимателя, лицензия и/или патент для
                      предпринимателей или справка о зарплате для работника
                      бюджетной или коммерческой сферы.
                    </li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Закрить
                  </Button>
                </Modal.Footer>
              </Modal>

              <NavLink class="ctb" to="/registr">
                <button className="btn btn-outline-danger  mekha   ">
                  Подать заявку
                </button>
                <img src={Photo} />
              </NavLink>
            </div>
          </div>
        </div>

        <div class="block">
          <div
            class={`block1 tab ${activeId === 1 && "active"}`}
            onClick={() => handleClick(1)}
          >
            <p>Онлайн-кредит</p>
            <h3>Заполните заявку на кредит онлайн</h3>
          </div>
          <div
            class={`block1 tab ${activeId === 2 && "active"}`}
            onClick={() => handleClick(2)}
          >
            <p>Ипотека</p>
            <h3>Преобретайте дом своей мечты</h3>
          </div>

          <div
            class={`block1 tab ${activeId === 3 && "active"}`}
            onClick={() => handleClick(3)}
          >
            <p>Денежные переводы</p>
            <h3>Отправляйте деньги по Таджикистану</h3>
          </div>
        </div>

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
                <h5 class="modal-title" id="staticBackdropLabel">
                  МДО “Зудамал”
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h1>
                  МДО “Зудамал” всегда открыт новым возможностям сотрудничества.
                </h1>
                <h2>
                  Развитие и расширение бизнеса предполагает регулярное
                  инвестирование. Вопрос о потребности в финансовых вложениях
                  рано или поздно возникает как у начинающих индивидуальных
                  предпринимателей, так и вполне успешных бизнесменов. ООО ЗАО
                  “Зудамал” предлагает вам кредит для развития вашего бизнеса.
                </h2>
                <div className="obesp">
                  <h6>Обеспечение:</h6>
                  <p>движимое/недвижимое имущество.</p>
                </div>
                <div className="samma">
                  <h6>Сумма:</h6>
                  <p>от 1 000 до 500 000 сомони.</p>
                </div>
                <div className="zayma">
                  <h6>Продолжительность займа:</h6>
                  <p>от 1 до 36 месяцев.</p>
                </div>

                <h3>Условия кредитования:</h3>
                <ul>
                  <li>Юридические лица, зарегистрированные в РТ;</li>
                  <li>Опыт работы не менее 6 месяцев;</li>
                  <li>Соответствие бизнеса по законодательству РТ;</li>
                  <li>Отсутствие обязательств перед третьими лицами;</li>
                  <li>Наличие залогового обеспечения.</li>
                </ul>

                <h3>Цель кредита:</h3>
                <ul>
                  <li>Финансирование инвестиционных проектов;</li>
                  <li>Финансирование оборотных и основных средств.</li>
                </ul>

                <h3>Необходимые документы:</h3>
                <ul>
                  <li>Кредитная заявка;</li>
                  <li>Учредительные документы;</li>
                  <li>ИНН;</li>
                  <li>
                    Свидетельство о государственной регистрации индивидуального
                    предпринимателя, лицензия и/или патент для предпринимателей
                    или справка о зарплате для работника бюджетной или
                    коммерческой сферы.
                  </li>
                </ul>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Закрыт
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <>Modal ipotecka</> */}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  ИПОТЕКА
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h2>
                  Для населения Таджикистана МДО “Зудамал” представляет вашему
                  вниманию привлекательную кредитную программу по ипотеке.
                  Теперь у каждого из вас есть возможность приобрести желаемую
                  недвижимость.
                </h2>
                <h3>Основные условия кредита:</h3>
                <div className="skredit">
                  <h6>Сумма кредита:</h6>
                  <p>
                    от 1 000 до 250 000 сомони или эквивалентно
                    <br />в долларах США;
                  </p>
                </div>
                <div className="protsentnaya">
                  <h6>Процентная ставка:</h6>
                  <p>
                    30% годовых в сомони, 18% годовых
                    <br />в долларах США;
                  </p>
                </div>
                <div className="srok72">
                  <h6>Срок кредита:</h6>
                  <p>до 72 месяцев;</p>
                </div>
                <div className="zalogovoe">
                  <h6>Залоговое обеспечение:</h6>
                  <p>недвижимость;</p>
                </div>

                <h2>
                  Кредит выдается на покупку жилья
                  <br />
                  Ипотечный кредит предоставляется лицам старше 20 лет с хорошей
                  репутацией.
                </h2>
                <h3>Необходимые документы:</h3>
                <ul>
                  <li>Кредитная заявка;</li>
                  <li>
                    Паспорт гражданина Республики Таджикистан, подтверждающий
                    место жительства;;
                  </li>
                  <li>ИНН.</li>
                </ul>

                <div className="innn">
                  <h2>
                    Нашим клиентам мы предлагаем хорошие условия и максимальная
                    надежность.
                  </h2>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Закрыт
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <>Modal perevod</> */}
        <div
          class="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Денежный перевод
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="bistro">
                  <h2>
                    ВАМ НЕОБХОДИМО ОТПРАВИТЬ ИЛИ ПОЛУЧИТЬ ДЕНЬГИ? ДЕНЕЖНЫЕ
                    ПЕРЕВОДЫ В ЛЮБУЮ ТОЧКУ МИРА! БЫСТРО! НАДЕЖНО! ВЫГОДНО!
                  </h2>
                </div>
                <br />

                <p>
                  Денежные переводы предназначены для перемещения денежных
                  средств от отправителя к получателю с помощью МДО “Зудамал”
                </p>
                <p>
                  МДО “Зудамал” нацелен на предоставлени клиентам быстрый и
                  надёжный способ отправки и получения денежных средств.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Закрыт
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="search">
          <h1>Поиск по сайту</h1>
          <form action="/search/">
            <input
              class="search index__search"
              // type="search"
              // name="text"  
              // value=""
              required
              placeholder="Я ищу"
              // onchange="mainSearchHandler"
            />

            <input className="naytis" type="button" value="Найти" />
          </form>
        </div>

        {/* <>News</> */}

        <div class="news">
          <div class="click">
            <NavLink to="/novosti" style={{ textDecoration: "none" }}>
              Hовости
            </NavLink>
          </div>
          <div class="news1">
            <NavLink to="/idiqurbon">
              <div class="news2">
                <img src={Qurbon} />
                <p className="mekha">С праздником Курбан Байрам!</p>
              </div>
            </NavLink>
            <NavLink to="./">
              <div class="news2">
                <img src={zudamal} />
                <p className="mekha">Новая ипотечная программа с "Zudamal"</p>
              </div>
            </NavLink>
            <a href="">
              <div class="news2">
                <img src={ipoteca} />
                <p className="mekha">Ипотека для иностранцев</p>
              </div>
            </a>
          </div>
        </div>

        {/* <>dom</> */}

        <div class="ipotek">
          <div class="text">
            <div class="text1">
              <h1>Преимущества ипотеки в Zudamal</h1>
            </div>
            <div class="tex2">
              <div class="row">
                <div class="col-lg-6">Подача заявки онлайн</div>
                <div class="col-lg-7">1 визит на оформление</div>
                <div class="col-lg-6">
                  Досрочное погашение без визитов в банк
                </div>
              </div>
            </div>
          </div>
          <div class="dom">
            <img src={Dom} />
          </div>
        </div>
      </div>

      {/* <></> */}

      <div className="content">
        <div class="container">
          <div
            class={`must  pab ${activeId === 1 && "active"} `}
            onClick={() => handleClick(1)}
          >
            <img src={Vector} alt="" />
            <h1>Рассчитать кредит наличными</h1>
          </div>
          <div
            class={`must  pab ${activeId === 2 && "active"} `}
            onClick={() => handleClick(2)}
          >
            <img src={Vector1} alt="" />
            <h1>Рассчитать ипотеку</h1>
          </div>
          <div
            class={`must  pab ${activeId === 3 && "active"} `}
            onClick={() => handleClick(3)}
          >
            <img src={Vector2} alt="" />
            <h1>Рассчитать выгоду по вкладу</h1>
          </div>
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
                      value={natija}
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
                      value={natija}
                      data-value="rangeValue"
                      id="rangeValue8"
                      onChange={(e) => setData6(e.target.value)}
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
                          {/* {emoji} */}
                          {cours}
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
                        {/* 16 фоиза */}
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
                        18%.
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
        {/* <></> */}
        <div class={`cours1 ${activeId === 2 ? "active" : "hide"}`}>
          <div style={{ display: "flex", paddingBottom: "50px" }}>
            <div style={{ marginTop: "3%", paddingLeft: "10%" }}>
              <input
                // class="tj active usdl"
                className={`tj usd ${mousId === 1 && "active"} `}
                onClick={() => onChange(1)}
                style={{ borderRadius: "10px 0px 0px 10px" }}
                type="button"
                value="TJS"
              />
              <input
                // class="tj usdl"
                className={`tj usd ${mousId === 2 && "active"} `}
                onClick={() => onChange(2)}
                type="button"
                style={{ marginLeft: "-4px" }}
                value="USD"
              />
            </div>
            <div
              class="newclientHome"
              style={{ marginTop: " 40px", paddingLeft: "40%" }}
            >
              <input
                class="newclient1 active actbl"
                type="button"
                value="Новый клиент"
              />
              <input
                class="newclient1 actbl"
                type="button"
                value="Повторный клиент"
              />
            </div>
          </div>
          <div style={{ display: " flex" }}>
            {/* "homePovtor active nels1" */}
            <div class={`homePovtor ${mousId === 1 ? "active" : "nels1"} `}>
              {/* homePovtor1 active nels" */}
              <div class={`homePovtor1 ${activeId === 1 ? "active" : "nels"} `}>
                <div class="courses" style={{ border: " none", width: "100%" }}>
                  <div
                    style={{
                      background: "#eeeeee",
                      height: "83px",
                      marginBottom: " -15px",
                    }}
                  >
                    <p style={{ padding: "20px 0px 0px 20px" }}>
                      Сумма кредита
                    </p>
                    <input
                      onkeyup="myFunction71(this)"
                      onblur="myFunc71(this)"
                      id="rangeValue71"
                      value={data}
                      style={{
                        padding: "0px 0px 0px 20px",
                        width: "2220px",
                        background: "transparent",
                        border: "none",
                      }}
                    />

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
                  <div>
                    <div
                      class="d-flex"
                      style={{
                        justifyContent: "space-between",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "15px",
                        lineHeight: "18px",
                        /* identical to box height */

                        color: "#959595",

                        /* Inside Auto Layout */

                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                        padding: "0px 10px",
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
                  <div>
                    <input
                      class="bloc active dabo"
                      data-value="1"
                      type="button"
                      value="1 год"
                    />
                    <input
                      class="bloc dabo"
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
                        <span data-value="summa" id="summa7">
                          {emoji}
                        </span>
                        TJS
                      </span>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                      <p style={{ marginBottom: "15px" }}>Процентная ставка</p>
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
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <a href="clickService.html">
                      <input
                        class="button"
                        type="button"
                        value="Получить ипотеку"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class={`homePovtor1 ${activeId === 2 ? "active" : "nels"} `}>
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
                      onkeyup="myFunction71(this)"
                      onblur="myFunc71(this)"
                      id="rangeValue71"
                      value={results}
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
                      id="range71"
                      class="range"
                      type="range"
                      name=""
                      value={data}
                      min="1000"
                      max="250000"
                      onChange={(e) => setData1(e.target.value)}
                    /> */}

                    <input
                      style={{ width: "600px", cursor: "pointer" }}
                      type="range"
                      min="0"
                      max="250000"
                      step="100"
                      value={results}
                      data-value="rangeValue"
                      id="rangeValue8"
                      onChange={(e) => setData5(e.target.value)}
                    />
                    <div
                      class="d-flex"
                      style={{
                        justifyContent: "space-between",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: " 15px",
                        lineHeight: "18px",
                        /* identical to box height */

                        color: " #959595",

                        /* Inside Auto Layout */

                        flex: "none;",
                        order: "0",
                        flexGrow: "0",
                        padding: "0px 10px",
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
                  <div>
                    <input
                      class="bloc active dabo7"
                      data-value="1"
                      type="button"
                      value="1 год"
                    />
                    <input
                      class="bloc dabo7"
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
                        <span data-value="summa" id="summa71">
                          {/* {emoji} */}
                          {countss}
                        </span>
                        TJS
                      </span>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                      <p style={{ marginBottom: "15px" }}>Процентная ставка</p>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: " 500",
                          fontSize: "30px",
                          lineHeight: "35px",

                          color: "#000000",
                        }}
                      >
                        28%
                      </span>
                    </div>
                  </div>
                  <div>
                    <a href="clickService.html">
                      <input
                        class="button"
                        type="button"
                        value="Получить ипотеку"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* homePovtor nels1 */}
            <div class={`homePovtor ${mousId === 2 ? "active" : "nels1"} `}>
              <div class="homePovtor2 active nels2">
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
                      onkeyup="myFunction72(this)"
                      onblur="myFunc72(this)"
                      id="rangeValue72"
                      value={data}
                      style={{
                        padding: "0px 0px 0px 20px",
                        width: " 150px",
                        background: "transparent",
                        border: " none",
                      }}
                    />
                    {/* <input
                      style={{ width: "600px", cursor: "pointer" }}
                      type="range"
                      min="0"
                      max="250000"
                      step="100"
                      value={datas}
                      data-value="rangeValue"
                      id="rangeValue8"
                      onChange={(e) => setData1(e.target.value)}
                    /> */}
                  </div>
                  <div>
                    {/* <input
                      id="range72"
                      class="range"
                      type="range"
                      name=""
                      value={data}
                      min="1000"
                      max="20000"
                      onChange="rangeSlide72(this.value)"
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
                        justifyContent: "space-between",
                        fontFamily: " Roboto",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "15px",
                        lineHeight: "18px",
                        /* identical to box height */

                        color: "#959595",

                        /* Inside Auto Layout */

                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                        padding: "0px 10px",
                        background: "#ffffff",
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
                      class="bloc active dabo72"
                      data-value="1"
                      type="button"
                      value="1 год"
                    />
                    <input
                      class="bloc dabo72"
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
                  <div style={{ display: " flex", marginTop: "40px" }}>
                    <div style={{ marginLeft: "40px" }}>
                      <p style={{ marginBottom: "15px" }}>Ежемесячной платёж</p>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: " 500",
                          fontSize: "30px",
                          lineHeight: "35px",

                          color: " #000000",
                        }}
                      >
                        <span data-value="summa" id="summa72">
                          {emoji}
                        </span>
                        USD
                      </span>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                      <p style={{ marginLeft: "100px" }}>Процентная ставка</p>
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
                        18%
                      </span>
                    </div>
                  </div>
                  <div>
                    <a href="clickService.html">
                      <input
                        class="button"
                        type="button"
                        value="Получить ипотеку"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="homePovtor2 nels2">
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
                      onkeyup="myFunction73(this)"
                      onblur="myFunc73(this)"
                      id="rangeValue73"
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
                      id="range73"
                      class="range"
                      type="range"
                      name=""
                      value="1000"
                      min="1000"
                      max="20000"
                      onChange="rangeSlide73(this.value)"
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
                        justifyContent: "space-between",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "15px",
                        lineeight: "18px",
                        /* identical to box height */

                        color: " #959595",

                        /* Inside Auto Layout */

                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                        padding: "0px 10px",
                        background: "#ffffff",
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
                      class="bloc active dabo73"
                      data-value="1"
                      type="button"
                      value="1 год"
                    />
                    <input
                      class="bloc dabo73"
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
                <div class="courses1" style={{ width: " 100%" }}>
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
                        <span data-value="summa" id="summa73">
                          {mehr}
                        </span>
                        USD
                      </span>
                    </div>
                    <div style={{ marginLeft: "100px" }}>
                      <p style={{ marginBottom: "15px" }}>Процентная ставка</p>
                      <span
                        style={{
                          fontFamily: " Roboto",
                          fontStyle: " normal",
                          fontWeight: "500",
                          fontSize: "30px",
                          lineHeight: "35px",

                          color: "#000000",
                        }}
                      >
                        16%
                      </span>
                    </div>
                  </div>
                  <div>
                    <a href="clickService.html">
                      <input
                        class="button"
                        type="button"
                        value="Получить ипотеку"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <></> */}
        <div class={`cours1 ${activeId === 3 ? "active" : "hide"}`}>
          <div
            style={{
              marginTop: "3%",
              paddingLeft: "10%",
              paddingBottom: "30px",
            }}
          >
            <input
              // class="tj active usd75"
              class={` tj usd75 ${dolarId === 1 && "active"}`}
              onClick={() => handles(1)}
              style={{ borderRadius: "10px 0px 0px 10px" }}
              type="button"
              value="TJS"
            />
            <input
              // class="tj usd75"
              class={` tj usd75 ${dolarId === 2 && "active"}`}
              onClick={() => handles(2)}
              type="button"
              style={{ marginLeft: "-4px" }}
              value="USD"
            />
          </div>

          <div
            className={` homevklad homeDohod ${
              dolarId === 1 ? "active" : "hide"
            } `}
            // class="homevklad active homeDohod"
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              paddingBottom: "15%",
            }}
          >
            <div style={{ display: " flex" }}>
              <div
                class="courses"
                style={{ border: " none", width: "100%", height: "0%" }}
              >
                <div
                  style={{
                    background: "#eeeeee",
                    height: "83px",
                    marginBottom: "-15px",
                  }}
                >
                  <p style={{ padding: "20px 0px 0px 20px" }}>Сумма вклада</p>
                  <input
                    onkeyup="myFunction76(this)"
                    onblur="myFunc76(this)"
                    id="rangeValue76"
                    value={result}
                    style={{
                      fontSize: "23px",
                      padding: "0px 0px 0px 20px",
                      width: "150px",
                      background: "transparent",
                      border: "none;",
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
                    value={result}
                    data-value="rangeValue"
                    id="rangeValue8"
                    onChange={(e) => setData4(e.target.value)}
                  />
                  <div
                    class="d-flex"
                    style={{
                      justifyContent: "space-between",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: " 15px",
                      lineHeight: "18px",
                      /* identical to box height */

                      color: "#959595",

                      /* Inside Auto Layout */

                      flex: "none",
                      order: " 0",
                      flexGrow: " 0",
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
                  <h6 style={{ marginTop: " 10px" }}>Срок кредита</h6>
                  <div>
                    <input
                      id="srok"
                      data-Value="1"
                      class="bloc active dab75"
                      type="button"
                      name="srok"
                      value="1 год"
                    />
                    <input
                      id="srok"
                      data-Value="2"
                      class="bloc dab75"
                      type="button"
                      value="2 год"
                    />
                    <input
                      id="srok"
                      data-Value="3"
                      class="bloc dab75"
                      type="button"
                      value="3 год"
                    />
                  </div>
                </div>
                <div style={{ display: " flex", paddingTop: "5%" }}>
                  <input
                    type="checkbox"
                    name="123"
                    id="123"
                    style={{ marginTop: "2px" }}
                  />
                  <p
                    style={{
                      paddingLeft: "1%",
                      fontFamily: "Roboto;",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "15px",
                      lineHeight: "18px;",

                      color: " #959595;",
                    }}
                  >
                    Рассчитать с вычетом 12% налога
                  </p>
                </div>
              </div>
              <div class="depositsBusiness3" style={{ height: "130px" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <p
                      style={{
                        padding: " 20px 0px 0px 20px",
                        marginBottom: "6%",
                      }}
                    >
                      Ваш годовый доход
                    </p>
                    <span
                      data-value="summa"
                      id="summa75"
                      class="summa"
                      style={{ paddingLeft: "20px" }}
                    >
                      {/* {emoji} */}
                      {counts}
                    </span>
                    <span style={{ fontFamily: "Roboto", fontSize: "30px" }}>
                      TJS
                    </span>
                  </div>
                  <div style={{ paddingLeft: "10%", paddingRight: "5%" }}>
                    <p style={{ padding: " 20px 0px 0px 20px" }}>
                      Процентная ставка
                    </p>
                    <span
                      style={{
                        padding: " 0px 0px 5px 20px",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "30px",
                        lineHeight: "35px",

                        color: " #000000;",
                      }}
                    >
                      5 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` homevklad homeDohod ${
              dolarId === 2 ? "active" : "hide"
            } `}
            // class="homevklad homeDohod"

            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              paddingBottom: "15%",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                class="courses"
                style={{ border: " none", width: " 100%", height: " 0%" }}
              >
                <div
                  style={{
                    background: " #eeeeee",
                    height: "83px",
                    marginBottom: "-15px;",
                  }}
                >
                  <p style={{ padding: " 20px 0px 0px 20px" }}>Сумма вклада</p>
                  <input
                    onkeyup="myFunction76(this)"
                    onblur="myFunc76(this)"
                    id="rangeValue76"
                    value={datan}
                    style={{
                      fontSize: "23px",
                      padding: "0px 0px 0px 20px",
                      width: "150px",
                      background: "transparent",
                      border: "none;",
                    }}
                  />
                </div>
                <div>
                  {/* <input
                    style={{ width: "600px" }}
                    type="range"
                    min="0"
                    max="250000"
                    step="100"
                    value={data}
                    data-value="rangeValue"
                    id="rangeValue8"
                    onChange={(e) => setData3(e.target.value)}
                  /> */}

                  <input
                    style={{ width: "600px", cursor: "pointer" }}
                    type="range"
                    min="0"
                    max="250000"
                    step="100"
                    value={datan}
                    data-value="rangeValue"
                    id="rangeValue8"
                    onChange={(e) => setData3(e.target.value)}
                  />

                  <div
                    class="d-flex"
                    style={{
                      justifyContent: "space-between",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "15px",
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
                    <p>10тыс</p>
                    <p>20тыс</p>
                    <p>30тыс</p>
                    <p>40тыс</p>
                    <p>50тыс</p>
                  </div>
                  <h6 style={{ marginTop: "10px" }}>Срок кредита</h6>
                  <div>
                    <input
                      id="srok"
                      data-Value="1"
                      class="bloc active dab76"
                      type="button"
                      name="srok"
                      value="1 год"
                    />
                    <input
                      data-Value="2"
                      class="bloc dab76"
                      type="button"
                      value="2 год"
                    />
                  </div>
                </div>
                <div style={{ display: "flex", paddingTop: "5%" }}>
                  <input
                    type="checkbox"
                    name="123"
                    id="123"
                    style={{ marginTop: " 2px" }}
                  />
                  <p
                    style={{
                      paddingLeft: "1%",
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
              </div>
              <div class="depositsBusiness3">
                <div style={{ display: " flex" }}>
                  <div style={{ background: "#ffffff", marginBottom: "-15px" }}>
                    <p
                      style={{
                        padding: "20px 0px 0px 20px",
                        marginBottom: "6%",
                      }}
                    >
                      Ваш годовый доход
                    </p>
                    <span
                      data-value="summa1"
                      id="summa76"
                      class="summa"
                      style={{ paddingLeft: "20px" }}
                    >
                      {/* {emoji} */}
                      {count}
                    </span>
                    <span style={{ fontFamily: "Roboto", fontSize: "30px" }}>
                      USD
                    </span>
                  </div>
                  <div
                    style={{
                      background: " #ffffff",
                      marginBottom: "-15px",
                      paddingLeft: "10%",
                      paddingRight: "5%",
                    }}
                  >
                    <p style={{ padding: " 20px 0px 0px 20px" }}>
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
        </div>
      </div>

      {/* <>Auto</> */}

      <div class="hero">
        <div class="text">
          <div class="text1">
            <h1>Кредит наличным под ваши нужды</h1>
            <p>Выберите цель кредита, и мы подберем оптимальное предложение</p>
          </div>
          <div class="text2" style={{ display: "flex" }}>
            <input type="text" value="Автомобиль" className="autom" />
            <NavLink to="./auto">
              <input type="button" value="Купить авто" className="carsd" />
            </NavLink>
          </div>
        </div>
        <div class="car">
          <img src={Cart} alt="авто" />
        </div>
      </div>

      {/* <>Kurs valyt</> */}

      <div class="valut">
        <div>
          <h2
            style={{
              fontFamily: "Roboto",
              fontStyle: " normal",
              fontWeight: "500",
              fontSize: "35px",
              lineHeight: " 41px",
              /* identical to box height */
              paddingBottom: "35px",

              color: " #000000",
            }}
          >
            Курс валют
          </h2>
          <div id="current_date_time_block2"></div>
        </div>

        <div class="valut2">
          <div class="valut1">
            <div style={{ paddingLeft: "27px", paddingRight: "27px" }}>
              <div
                class="row"
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: " normal",
                  fontSize: "20px",
                  lineHeight: "23px",
                  paddingTop: "35px",
                  paddingBottom: "16px",
                  marginBottom: "30px",

                  color: "#cacaca",
                  borderBottom: "2px solid #cacaca",
                }}
              >
                <div class="col-4" style={{ paddingLeft: "3.5%" }}>
                  Валюта
                </div>
                <div class="col-3">Курс НБТ</div>
                <div class="col-3">Покупка</div>
                <div class="col-2">Продажа</div>
              </div>
              <div class="container" style={{ display: "block" }}>
                <div>
                  <div
                    class="row"
                    style={{ paddingBottom: "15px padding-top: 20px" }}
                  >
                    <div class="col-4" style={{ display: "flex" }}>
                      <img src={img1} alt="Доллар" />
                      <h1>USD</h1>
                      <p>Доллар США</p>
                    </div>
                    <div class="col-3" data-value="USD">
                      <h3>11.3210&nbsp;$</h3>
                    </div>
                    <div class="col-3">
                      <h3>11.3350&nbsp;$</h3>
                    </div>
                    <div class="col-2">
                      <h3>11.3400&nbsp;$</h3>
                    </div>
                  </div>
                  <div class="row" style={{ paddingBottom: "1px" }}>
                    <div class="col-4" style={{ display: "flex" }}>
                      <img src={img2} alt="Доллар" />
                      <h1>EUR</h1>
                      <p>Евро</p>
                    </div>
                    <div class="col-3" data-value="EUR">
                      <h3>13.4052 &euro;</h3>
                    </div>
                    <div class="col-3">
                      <h3>13.3500&nbsp;€</h3>
                    </div>
                    <div class="col-2">
                      <h3>13.7000&nbsp;€</h3>
                    </div>
                  </div>
                  <div class="row" style={{ paddingBottom: "15px" }}>
                    <div class="col-4" style={{ display: "flex" }}>
                      <img src={img3} alt="Доллар" />
                      <h1>RUB</h1>
                      <p>Российский рубль</p>
                    </div>
                    <div class="col-3" data-value="RUB">
                      <h3>0.1541&nbsp;₽</h3>
                    </div>
                    <div class="col-3">
                      <h3>0.1520&nbsp;₽</h3>
                    </div>
                    <div class="col-2">
                      <h3>0.1570&nbsp;₽</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="converter-valut">
            <div style={{ paddingLeft: " 32px ", paddingRight: "36px" }}>
              <h4
                style={{
                  paddingTop: "31.28px",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: " 23px",

                  color: " #000000",
                }}
              >
                Конвертер валют
              </h4>
              <div
                style={{
                  display: "flex",
                  paddingTop: "30.17px",
                  borderBottom: "1px solid #000000",
                }}
              >
                <div class="number" style={{ marginBottom: "3px" }}>
                  <input
                    id="input"
                    type="text"
                    style={{
                      height: "20px",
                      width: "100px",
                      border: " none",
                      background: "transparent",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <select
                    id="select"
                    style={{
                      marginLeft: "130px",
                      border: " none",
                      background: "transparent",
                      outline: "none",
                      fontFamily: "Roboto",
                      fontStyle: " normal",
                      fontWeight: "normal",
                      fontSize: "20px",
                      lineHeight: "23px",

                      color: "#000000;",
                    }}
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUB">RUB</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  paddingTop: "28px",
                  borderBottom: "1px solid #a5a5a5a5",
                }}
              >
                <div
                  class="number"
                  style={{ display: " flex", marginBottom: "-15px" }}
                >
                  <span>=</span>
                  <input
                    id="result"
                    class="result"
                    type="text"
                    style={{
                      height: "20px",
                      width: "100px",
                      border: " none",
                      background: "transparent",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <select
                    style={{
                      marginLeft: "120px",
                      border: " none",
                      background: "transparent",
                      outline: " none",
                      fontFamily: " Roboto",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "20px",
                      lineHeight: "23px",

                      color: "#000000;",
                    }}
                  >
                    <option value="TJS">TJS</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Example;
