import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './style.scss';
import { changeDateIndex } from './store/actionCreator';
import Header from '../../components/header';

function TrainDate(props) {
    const [today, setTody] = useState((new Date()).getDate());
    let allNodes;

    const changeDay = (e, i) => {
        for(let i = 0; i < allNodes.length; i++) {
            if(i >= today) {
                allNodes[i].className = 'month-item';
            }
        }
        
        props.submitIndex(i);
        allNodes[i].className = 'month-item tody';
        // e.target.className = 'month-item tody';
    };

    const getAllNodes = () => {
        let nodeList = [];
        for(let i = 0; i <= 31; i++) {
            if(i === 0) {
                nodeList.push(<div className="month-item" key={i}></div>);
            }else if(i === today) {
                nodeList.push(<div className="month-item" key={i} onClick={(e) => {changeDay(e, i)}}>今天</div>);
            }else if(i < today) {
                nodeList.push(<div className="month-item past" key={i}>{i}</div>);
            }else{
                nodeList.push(<div className="month-item" key={i} onClick={(e) => {changeDay(e, i)}}>{i}</div>);
            }
            
        }
        return nodeList;
    };

    useEffect(() => {
        setTimeout(() => {
            allNodes = document.getElementsByClassName('month-item');
            allNodes[props.dateValue].className = 'month-item tody';
        }, 100);
    })
    
    return (
        <div className="train-data-wrap">
            <Header>火车票</Header>
            <div className="train-week">
                <span className="special-week">日</span>
                <span>一</span>
                <span>二</span>
                <span>三</span>
                <span>四</span>
                <span>五</span>
                <span className="special-week">六</span>
            </div>
            <div className="train-month">
                <h5>2019年7月</h5>
                <div className="month-detail">
                    {
                        getAllNodes()
                    }
                </div>
            </div>
        </div>
    )
};

const mapState = (state) => ({
    dateValue: state.getIn(['trainDate', 'index'])
});

const mapDispatch = (dispatch) => ({
    submitIndex(data) {
        dispatch(changeDateIndex(data));
    }
});

export default connect(mapState, mapDispatch)(TrainDate);