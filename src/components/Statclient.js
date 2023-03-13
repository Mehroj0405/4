import React from "react";
import "./Statclient.css";
import karta from "../image/privateClient/statClient.png";
import Uslug from "../image/uslugi/icon.png";
import Footer from "./Footer";

const Statclient = () => {
  return (
    <div>
      <div class="color">
        <div class="text">
          <h1
            style={{
              width: "424px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "40px",
              lineHeight: "47px",
              color: " #03416A",
              paddingTop: "2%;",
            }}
          >
            Дебетовые карты
          </h1>
        </div>
        <div
          class="target"
          style={{
            display: "flex",
            padding: "30px 10px 10px 100px",
            height: "197px;",
          }}
        >
          <img
            className="phtoss"
            src={karta}
            alt="photo"
            style={{
              position: "absolute",
              width: "436px",
              left: "840px",
              top: "137px;",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "49px",
          paddingBottom: "26px;",
        }}
      >
        <h1
          style={{
            width: "413px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "30px",
            lineHeight: "35px",
            textAlign: "center",

            color: "#000000;",
          }}
        >
          Оформите заявку и получите карту Зудамал
        </h1>
      </div>

      <div class="registration">
        <div
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "8%",
            paddingBottom: "8%;",
          }}
        >
          <input class="text" type="text" placeholder="ФИО*" />
          <p>Укажите точно как в паспорте</p>

          <p></p>
          <div style={{ display: "flex;" }}>
            <div style={{ width: "100%", paddingRight: "5%;" }}>
              <input
                class="number"
                type="number"
                placeholder="Номер телфона*"
              />
            </div>
            <div style={{ width: "100%;" }}>
              <select class="number" placeholder="Электронная почта">
                <option value="0">Город*</option>
                <option value="1">Душанбе</option>
                <option value="2">Худжанд</option>
                <option value="3">Педжикент</option>
                <option value="4">Куляб</option>
                <option value="5">Бохтар</option>
              </select>
            </div>
          </div>
          <div class="next1">
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
          </div>
          <div class="next" style={{ width: "100%", background: "#F5F7F9;" }}>
            <img
              src={Uslug}
              alt=" иконка"
              style={{ padding: "10px 15px 20px 15px;" }}
            />
            <h5>Мы гарантируем безопасность и сохранность ваших данных</h5>
            <input class="button" type="button" value="Заказать карту" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Statclient;
