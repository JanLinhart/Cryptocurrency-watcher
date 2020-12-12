import React from 'react';
import Navbar from './Navbar';
import './Kontakt.css'
function Kontakt() {
    return (
        <>
            <Navbar/>
            <div className="kontakt__strana">
            <div className="kontakt__box">
               <div className="box__obsah">
                <h1>Kontakt</h1>
                <h2>Kontakt na firmu</h2>
                <p>Email:Cryptoczech@gmail.com</p>
                <p>Telefon:737 159 038</p>

                <h2>Kontakt na ředitele</h2>
                <p>Sáva Sytý</p>
                <p>Email:Cryptoczech@gmail.com</p>
                <p>Telefon:727 169 038</p>

                <h2>Zřizující firma</h2>
                <p>Cryptoczech s.r.o</p>
                <p>Na nábřeží 2335</p>
                <p>Praha 1</p>
               </div>
            </div>
        </div>
        </>
    )
}

export default Kontakt

