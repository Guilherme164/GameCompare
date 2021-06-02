import React, { useState } from "react";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default function Horizontal(props) {
    const [valor, setValor] = useState(0);

    const handleChange = value => {
        setValor(value);
        props.setDiscountFilter(value);
    };

    const toolTip = value => 'Desconto mín. ' + value + '%';

    return (
        <div className='slider'>
            <div className='slider-label'>Desconto mín. <b style={{ color: "#38ef7d" }}>{valor}</b>%</div>
            <Slider
                min={0}
                max={100}
                step={5}
                value={valor}
                tooltip={false}
                onChange={handleChange}
            />
        </div>
    )
}