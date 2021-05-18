import React, { useState, useEffect, Fragment } from "react";
import "./style.css";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa';
import { ReactComponent as Spinner } from '../../assets/img/spinner.svg';
import VanillaTilt from 'vanilla-tilt';
import fitty from 'fitty';

import "./css-tooltip.css";

function CardJogos({ jogo, page }) {
    const [onWishlist, setOnWishlist] = useState('no'); //no, loading, yes
    const cover = jogo.cover;
    const lojas = jogo.deals;

    if (lojas.length > 1) { //se houverem lojas vendendo o jogo
        lojas.sort(function (a, b) { //ordena por preço ASC
            return parseFloat(a.price_new) - parseFloat(b.price_new);
        });
    }

    useEffect(() => {
        //efeito de card 3d
        VanillaTilt.init(document.querySelectorAll(".game-card"), {
            glare: true,
            "max-glare": .5
        });

        //dimensiona o titulo para caber no card
        fitty('#' + jogo.plain, {
            minSize: 24,
            maxSize: 48,
        });
    });

    function AddWishlist(props) {
        return (<span data-tooltip="Adicionar à Wishlist" style={{ fontSize: "14px" }}>
            <AiOutlineStar className="add-wishlist" size={30} onClick={() => setOnWishlist('loading')} />
        </span>)
    }

    function RemoveWishlist(props) {
        return (<span data-tooltip="Remover da Wishlist" style={{ fontSize: "14px" }}>
            <AiFillStar className="remove-wishlist" size={30} onClick={() => setOnWishlist('no')} />
        </span>)
    }

    function Preco(props) {
        if (props.preco > 0) {
            if (props.desconto > 0) {
                return (<span >
                    <span className="price-switch" data-tooltip="Preço anterior">
                        <span className="old-price"><span className="real">R$</span>
                            <span style={{ textDecoration: "line-through" }}>{props.precoAnterior}</span></span>
                        <span className="new-price"><span className="real">R$</span>{props.preco}</span>
                    </span>

                </span>)
            }
            else return <span><span className="real">R$</span>{props.preco}</span>
        }
        else return <span className="gratis">Grátis</span>
    }

    function Desconto(props) {
        if (props.desconto > 0)
            return <td className="td-cut">{props.desconto}%</td>
        else
            return <td className="td-nocut"></td>
    }

    return (
        <div className="game-card">
            <div className="img-card">
                <img src={cover}></img>
            </div>
            {onWishlist === "yes" && (
                <Fragment>
                    <div className="big-star-background"></div>
                    <div><AiFillStar className="big-star" size={60} /></div>
                </Fragment>
            )}
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
                                <td className="td-left">{lojas[0].store_name}</td>
                                <td className="td-right"><Preco preco={lojas[0].price_new} desconto={lojas[0].price_cut}
                                    precoAnterior={lojas[0].price_old} /></td>
                                <Desconto desconto={lojas[0].price_cut} />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="other-deals">
                    {lojas.length > 1 &&
                        <table className="game-card-table">
                            <tbody>
                                {lojas.slice(1).map(function (lojas, i) {
                                    return <tr key={lojas.id_deal}>
                                        <td className="td-left">{lojas.store_name}</td>
                                        <td className="td-right"><Preco preco={lojas.price_new} desconto={lojas.price_cut}
                                            precoAnterior={lojas.price_old} /></td>
                                        <Desconto desconto={lojas.price_cut} />
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    }
                    {lojas.length <= 1 &&
                        <div className="no-deals">Não foram encontrados outros preços para este jogo.</div>
                    }
                </div>
                <div className="card-info">...</div>
                <div className="game-card-toolbar">
                    <table className="toolbar-table">
                        <tbody>
                            <tr>
                                <td>
                                    {onWishlist === "no" && (<AddWishlist />)}
                                    {onWishlist === "loading" && (
                                        <Spinner onClick={() => setOnWishlist('yes')} />
                                    )}
                                    {onWishlist === "yes" && (<RemoveWishlist />)}
                                </td>
                                <td><a href="#"><FaChartLine size={25} /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
export default CardJogos;