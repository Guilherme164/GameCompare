import React, { useState, useEffect } from "react";
import "./style.css";
import { FaStar, FaPlus, FaChartLine } from 'react-icons/fa';

import VanillaTilt from 'vanilla-tilt';
import fitty from 'fitty';
function CardJogos({ jogo, page }) {
    const Logo = jogo.cover;
    const lojas = jogo.deals;

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".game-card"), {
            glare: true,
            "max-glare": .5
        });

        fitty('#' + jogo.plain, {
            minSize: 24,
            maxSize: 48,
        });
    });

    // price_cut > 0 puxar td-cut (class)  
    return (

        <div className="game-card">
            <div className="img-card">
                <img src={Logo}></img>
            </div>
            <div className="game-card-content">
                <div className="game-card-header">
                    <div className="game-card-title" id={jogo.plain}>
                        {jogo.name}
                    </div>
                </div>
                <hr></hr>
                <div className="main-deal">
                    <table className="game-card-table">
                        <tbody>
                            <tr>
                                <td className="td-left">Steam</td>
                                <td className="td-right"><span className="real">R$</span>65,90</td>
                                <td className="td-cut">50%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="other-deals">
                    <table className="game-card-table">
                        <tbody>
                            {lojas.map(function (lojas, i) {
                                return <tr key={lojas.id_deal}>
                                    <td className="td-left">{lojas.store_name}</td>
                                    <td className="td-right"><span className="real">R$</span>{lojas.price_new}</td>
                                    <td className="td-nocut"></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="game-card-toolbar">
                    <table className="toolbar-table">
                        <tbody>
                            <tr>
                                <td><a href="#"><FaStar /></a></td>
                                <td className="add-wishlist"><a href="#"><b><FaPlus />Wishlist</b></a></td>
                                <td><a href="#"><FaChartLine /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
export default CardJogos;