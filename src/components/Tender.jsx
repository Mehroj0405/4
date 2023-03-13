import React from 'react';
import "./Tender.css"
import tender from "../image/tender2.jpg"
import Footer from './Footer';

const Tender = () => {
    return (
        <div>
            <div class="privateimg">

                <div style={{ padding: "80px 100px 70px 100px" }}>
                    <h1 style={{
                        fontfamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "48px",
                        lineHeight: "56px",

                        color: "#03416A;"
                    }}>Тендер</h1>
                </div>
            </div>


            <div class="private" style={{ padding: " 55px 100px 380px 100px" }}>
                <div style={{ display: "flex" }}>
                    <div>
                        <img src={tender} style={{ height: "200px" }} alt="photo" />
                    </div>
                    <div style={{
                        width: "670px ",
                        paddingLeft: "30px"
                    }}  >
                        <h5><b>Документация для участия в тендере</b></h5>
                        <p></p>
                        <p style={{ color: "black>" }}> 1. Выписка из единного государственного реестра юридических лиц.</p>
                        <p style={{ color: "black" }}> 2. Свидетельство о государственной регистрации.</p>
                        <p style={{ color: "black" }}>3. ИНН.</p>
                        <p style={{ color: "black" }}>4. Справка от налоговой о режиме налогооблажения.</p>
                        <p style={{ color: "black" }}>5. Реквизиты организации.</p>
                        <p style={{ color: "black" }}>6. Паспорт руководителя.</p>
                        <p style={{ color: "black" }}>7. Юридический адрес.</p>





                    </div>


                </div>


                <div style={{ padding: " 55px 100px 380px 300px;" }}>
                    <h6>Тендер на закупку обородувание</h6>

                    <a href="doc/Offer_Zudamal_v1.xlsx" target="_blank"><u>№001-29/06/22 Закупаемое обородувание</u></a>
                    <p style={{ color: "gray", fontSize: "13px" }}>ООО МДО "Зудамал" сохраняет за собой права не приобретать предложенный товар и при этом не быть привлечен к ответственности.</p>
                </div>


            </div>

            <Footer />
        </div >
    );
}

export default Tender;
