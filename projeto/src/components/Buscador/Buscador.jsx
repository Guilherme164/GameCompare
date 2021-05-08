import React  from "react";
import "./style.scss";
import "../../assets/img/search.svg";
export default function Buscador() {
    let timer;

    // document.addEventListener('input', e => {
    //     const el = e.target;

    //     if (el.matches('[data-color]')) {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    //         }, 100)
    //     }
    // })
    return (
        <article className="search"> 
        <form class="form__group field">
            <input type="input" class="form__field" placeholder="Pesquisar jogo:" id="search" name="search" />
            <label for="name" class="form__label">Pesquisar jogo:</label>
            {/* <button id="search_btn" name="search_btn" onClick="buscar()">
                {/* 
                </button>             */}
            <button><i className="icon"></i></button>
        </form>
        </article>

    );
}