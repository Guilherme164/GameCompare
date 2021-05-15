import React from "react";
import "./style.css";

function Paginacao({ totalPages, handleClick }) {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    return (
        <div className="pagination">
            { pages.map(num => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                    className="paginationbutton"
                    key={num}
                    onClick={() => handleClick(num)}      
                    // href="javascript:'{() => handleClick(num)}"                   
                >{num}</a>
            ))}
        </div>
    );

}
export default Paginacao;