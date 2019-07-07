import React from 'react';

import './style.scss';

function Stroke() {
    return (
        <div className="train-item-info">
            <div className="start-location">
                <p>广州南</p>
                <p>08:00</p>
                <p>07-14 周日</p>
            </div>
            <div className="start-location specail-center">
                <p>G86 高速运车</p>
                <p>
                    <span className="start-line"></span>
                    <span>时刻表</span>
                </p>
                <p>耗时6小时48分</p>
            </div>
            <div className="start-location">
                <p>上海虹桥</p>
                <p>14:48</p>
                <p>07-14 周日</p>
            </div>
        </div>
    )
}

export default Stroke;