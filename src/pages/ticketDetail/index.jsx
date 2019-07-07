import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import TicketDate from '../../components/ticketDate';
import Stroke from '../../components/stroke';

import './style.scss';

function TicketDetail() {
    return <div className="ticket-detail-wrap">
        <Header>K1278</Header>
        <TicketDate />
        <Stroke></Stroke>
        <div className="buy-ticket">
            <div className="second-ticket">
                <div className="second-ticket-price">
                    <span>二等座</span>
                    <span>￥793</span>
                </div>
                <div className="second-ticket-info">
                    <span>无票</span>
                    <Link to='/pay'>抢票</Link>
                </div>
            </div>
            <div className="second-ticket">
                <div className="second-ticket-price">
                    <span>一等座</span>
                    <span>￥1302.5</span>
                </div>
                <div className="second-ticket-info">
                    <span>有票</span>
                    <Link to='/pay'>预定</Link>
                </div>
            </div>
            <div className="second-ticket">
                <div className="second-ticket-price">
                    <span>商务座</span>
                    <span>￥2492.5</span>
                </div>
                <div className="second-ticket-info">
                    <span>9张</span>
                    <Link to='/pay'>预定</Link>
                </div>
            </div>
        </div>
        <div className="ticket-program">查看更多乘车方案：上车补票/买过站票</div>
    </div>
}

export default TicketDetail;