import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import TicketDate from '../../components/ticketDate';

import './style.scss';



function TrainTicket(props) {
   
    const getAllTicket = () => {
        let allNodes = [];
        for(let i = 0; i < 7; i++) {
            allNodes.push(
                <div className="ticket-item" key={i}>
                    <Link to={'/ticket_detail'}>
                        <span>11:55</span>
                        <span><i>始</i> 北京</span>
                        <span>1461</span>
                        <span>￥156.5</span>
                        <span>07:00</span>
                        <span><i>终</i> 上海</span>
                        <span>19时5分</span>
                        <span>无座100张</span>
                    </Link>
                </div>
            )
        }
        return allNodes;
    };
    
    return (
        <div className="train-data-wrap">
            <Header>
                <p>北京<i className="iconfont icon-chufadaodaxiao"></i> 上海</p>
            </Header>
            <div className="ticket-content">
                <TicketDate></TicketDate>
                <div className="ticket-info">
                    {getAllTicket()}
                </div>
            </div>
        </div>
    )
};

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(TrainTicket);