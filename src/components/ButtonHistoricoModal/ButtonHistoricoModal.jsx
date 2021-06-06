import React, {Fragment, useState } from "react";
import "./style.scss";
import { FaChartLine } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistoricoModal from "../HistoricoModal";

function ButtonHistoricoModal(props) {
    //state e controladores do state da modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    return (
        <div className="mod">
            <span data-tooltip="Histórico de Preços" style={{ fontSize: "14px" }} onClick={handleShow}>
                <a href="/#"><FaChartLine size={25} /></a>
            </span>  
            { show ===false ? (<Fragment></Fragment>): 
                <HistoricoModal show={show} plain={props.plain} handleClose={handleClose} />
            }
        </div >

    );
}
export default ButtonHistoricoModal;