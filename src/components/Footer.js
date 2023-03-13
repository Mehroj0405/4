import React from "react";
import "./Footer.css";
import footerImg from "../image/footer.png";
import facebook from "../image/facebook.png";
import twiter from "../image/twitter.png";
import instagram from "../image/instagram.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="wrapper">
          <div className="footer-links">
            <div className="footer-link">
              <p> О банке</p>
              <a href="#"   className="mekha"   >История</a>
              <a     className="mekha"     href="doc/Хисоботи Молияви Аудит .pdf" target="_blank">
                Документы и отчетность
              </a>
            </div>
            <div className="footer-link">
              <p>Наши адреса</p>
              <a href="#"   className="mekha"    >Обратная связь</a>
              <a href="#"    className="mekha"    >ООО МДО «ЗУДАМАЛ» имеет представительства в:</a>
              <a href="#"   className="mekha"    >Ховалинг адрес Исмоили Сомони.</a>
              <a href="#"    className="mekha"   >
                Куляб адрес Шахри кулоб кучаи исмоили сомони 20 кв 26.
              </a>
              <a href="#" className="mekha">
                Турсунзаде адрес: П. Тоджиев 22.
              </a>
              <a href="#" className="mekha">
                Вахдат адрес: Фирдавси 45
              </a>
              <a href="#" className="mekha">
                Восе адрес: Рохи Охан.
              </a>
              <a href="#" className="mekha">
                Чимтепа адрес: Рудаки улица Сомон.
              </a>
              <a href="#" className="mekha">
                Вопросы и ответы
              </a>
            </div>
            <div className="footer-link">
              <p>Пресс-центр</p>
              <a href="#" className="mekha">
                Интерактивные услуги
              </a>
            </div>

            <div className="footer-link">
              <p>КОНТАКТЫ</p>
              <a href="" className="mekha">
                (+992 44) 600 -64-64
              </a>
              <br />
              <a href="" className="mekha">
                (+992 44) 600 -67-67
              </a>
              <br />
              <a href="" className="mekha">
                (+992 44) 600 -65-65
              </a>
              <br />
              <a href="" className="mekha">
                (+992 44) 600 -64-24
              </a>
              <br />
              <a className="mekha" href="mailto:Zudamal@tolikiston.com">
                Zudamal@tojikiston.com
              </a>
              <br />
              <div className="ssilka" style={{ display: "flex" }}>
                <a href="#">
                  <img className="" src={instagram} />
                </a>
                <a href="#">
                  <img className="" src={twiter} />
                </a>
                <a href="#">
                  <img className="" src={facebook} />
                </a>
              </div>
              <br />
              <a className="mekha" href="">
                Адрес: Таджикистан, город Душанбе, улица Айни 40
              </a>
              <br />
              <a className="mekha" href="">
                НБТ №0000133 от 24 декабря 2020 года
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className="img">
          {/* style="width: 37%; height: 6%; left: 135px; top: 286px" */}
          <img className="" src={footerImg} />

          <p></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
