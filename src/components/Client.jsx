import React from 'react';
import "./Client.css"
import client from "../image/privateClient/private1.png"
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Client = () => {
    return (
        <div>
            <div class="privateimg">

                <div style={{ padding: "80px 100px 70px 100px" }}>
                    <h1 style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "48px",
                        lineHeight: "56px",

                        color: "#03416A"
                    }}>Услуги частным клиентам</h1>
                </div>
            </div>




            <div class="private" style={{ padding: "55px 100px 380px 100px    " }}>
                <div style={{ display: "flex" }}>
                    <div>
                        <NavLink to="./auto"><img src={client} alt="photo" /></NavLink>
                    </div>
                    <div style={{
                        width: "670px",
                        paddingLeft: "30px"
                    }}>
                        <h6>Потребительский кредит</h6>
                        <p>Кредиты под залог ювелирных изделий (золота, драгоценных металлов
                            и лома) предоставляются индивидуальным предпринимателям, имеющим хорошую
                            кредитную историю в Организации.</p>
                    </div>
                </div>

            </div>


            <Footer />

        </div >
    );
}

export default Client;
