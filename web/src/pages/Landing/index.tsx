import React from 'react';

import logoImg from '../../assets/images/logo.png'
import locationIcon from '../../assets/images/icons/location.svg'

import './styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-top-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Trip" />
                    <h1>Sua plataforma de <br/> viagens.</h1>
                </div>
            </div>

            <div id="page-landing-bottom-content" className="container">
                <h2>Seja bem-vindo.</h2>
                <h3>O que deseja fazer?</h3>
                <div className="buttons-container">
                    <a href="" className="leisure-points">
                        <img src={locationIcon} alt="Pontos de lazer" />
                        <p>Encontrar pontos de lazer</p>
                    </a>

                    <a href="" className="utility-points">
                        <img src={locationIcon} alt="Pontos de utilidades" /> 
                        <p>Encontrar pontos de utilidades</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing