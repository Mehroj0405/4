import React from 'react';
import "./Lits.css"
import sss from "../image/corporate/private1.png"
import srs from "../image/corporate/private2.png"
import overs from "../image/privateClient/private3.png"
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Lits = () => {
    return (
        <div>


            <div class="legal">

                <div style={{ padding: "80px 100px 70px 100px" }}>
                    <h1 style={{
                        fontFamily: "Roboto", fontWeight: "500px", fontStyle: "normal", fontSize: "48px",
                        lineHeight: "56px", color: "#03416A"
                    }}


                    >Бизнес кредит</h1>

                </div>
            </div>


            <div class="private" style={{ padding: "55px 100px 380px 100px" }}>
                <div style={{ display: "flex" }}>
                    <div>
                        <NavLink to="./registr"><img src={sss} alt="photo" /></NavLink>
                    </div>
                    <div style={{
                        width: "670px",
                        paddingeft: "30px",
                        marginLeft: "20px"
                    }}>
                        <h6>Кредит для Бизнеса</h6>
                        <p>Кредит в сомони.</p>
                    </div>
                </div>
                <div style={{ display: "flex", paddingTop: "30px" }}>
                    <div>
                        <NavLink to="./auto"><img src={srs} alt="photo" /></NavLink>
                    </div>
                    <div style={{
                        width: "670px",
                        paddingLeft: "30px"
                    }}>
                        <h6>Потребительские кредиты клиентам (Вавилон-М и Вавилон-Т)</h6>
                        <p>Минимальная сумма кредита и максимальная сумма кредита От 440 до 250 000 сомони</p>
                    </div>
                </div>
                <div style={{ display: "flex", paddingTop: "30px" }}>
                    <div>
                        <NavLink to="./kurs"><img src={overs} alt="photo" /></NavLink>
                    </div>
                    <div style={{
                        width: " 670px",
                        paddingLeft: " 30px"
                    }}>
                        <h6>Банк для юридических лиц</h6>
                        <p>Минимальная сумма кредита и максимальная сумма кредита От 440 до 250 000 сомони</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div >
    );
}

export default Lits;
