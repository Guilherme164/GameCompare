import React from "react";
import "./style.css";

function Paginacao({ totalPages, handleClick }) {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    return (
        <div class="pagination">
            { pages.map(num => (
                <button
                    className="paginationbutton"
                    key={num}
                    onClick={() => handleClick(num)}
                >{num}</button>
            ))}
        </div>
    );

}
export default Paginacao;