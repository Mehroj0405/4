import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "./Indenfikatsiya.css";

const Indenfikatsiya = () => {
  return (
    <div>
      <div>
        <div class="identificationImg"></div>

        <div class="identification">
          <h1 style={{ marginBlockStart: "4rem", marginBlockEnd: "1rem" }}>
            Онлайн идентификация
          </h1>
          <div class="flex-bars">
            <div class="leftbar">
              <p>
                Без идентификации возможно совершать операции на сумму не более
                1'100 сомони в календарный месяц. Пройдя on-line идентификацию,
                Вы получите возможность совершать операции на сумму не более
                3'000 сомони в календарный месяц. Прохождение идентификации
                бесплатно. Чтобы получить возможность платить и переводить
                операции с большими лимитами, а также снятие наличных с
                банкоматов необходимо обратится в офисы.
              </p>
            </div>
            <div class="rightbar">
              <div class="text-inputs">
                <div class="flex">
                  <input
                    type="text"
                    class="text-input"
                    placeholder="Введите своё имя"
                  />
                  <p>*Укажите точно как в паспорте</p>
                </div>
                <div class="flex">
                  <input
                    type="text"
                    class="text-input"
                    placeholder="Введите свою фамилию"
                  />
                  *Укажите точно как в паспорте
                </div>
              </div>
              <div class="flex flex-input">
                <input type="file" class="file-input" />
                <p>*Фото паспорта с основной стороны</p>
              </div>
              <div class="flex flex-input">
                <input type="file" class="file-input" />
                <p>*Фото паспорта с оборотной стороны (там где прописка)</p>
              </div>
              <div class="flex flex-input">
                <input type="file" class="file-input" />
                <p>*Фото лица с паспорта (селфи)</p>
              </div>
            </div>
          </div>
          <div class="confirm-checkbox">
            <input type="checkbox" /> Я принимаю условия
            <a href="http://zudamal.tj/doc/%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0%20.docx">
              пользовательского соглашения
            </a>
            и согласен на обработку персональных данных
          </div>
          <button type="submit" class="btn-submit">
            Продолжить
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Indenfikatsiya;
