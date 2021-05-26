import React, { useState } from "react";
import "./style.scss";
import { FaSearch } from 'react-icons/fa';

export default function Buscador({buscar}) {
    const [pesquisa, setPesquisa] = useState("");
    return (
        <article className="search">
            <form className="form__group field"
                onSubmit={(event) => {
                    event.preventDefault();
                    buscar({ pesquisa });
                }}>
                <div className="form1">
                    <input type="input" 
                    className="form__field" 
                    placeholder="Pesquisar jogo" 
                    onChange={(event) => {
                        setPesquisa(event.target.value);
                      }}
                    />
                    <label className="form__label">Pesquisar jogo</label>
                </div>
                <div className="form2">
                    <button type="submit" className="form__field search_btn" id="search_btn" name="search_btn">
                        <FaSearch></FaSearch></button>
                </div>
            </form>
        </article>

    );
}