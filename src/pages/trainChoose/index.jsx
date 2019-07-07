import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/header';

import { exchangeAddress } from './store/actionCreator';
import weekFormat from '../../utils/weekFormat';
import './style.scss';
import img1 from '../../assets/images/icon_qiang.png';
import img2 from '../../assets/images/icon_rail.png';
import img3 from '../../assets/images/icon-order.png';
import { dispatch } from 'rxjs/internal/observable/range';

function TrainChoose(props) {
    
    const [month, setMonth] = useState((new Date()).getMonth()+1)
    const [isExchange, setisExchange] = useState(true);
    const today = (new Date()).getDate();

    const address1 = (
        <Fragment>
            <Link to="/city/start">{props.start}</Link>
            <i
                className="iconfont icon-jiaohuan"
                onTouchStart={props.changeExchangeValue}
                >
            </i>
            <Link to="/city/end">{props.end}</Link>
        </Fragment>
    )

    const address2 = (
        <Fragment>
            <Link to="/city/end">{props.end}</Link>
            <i
                className="iconfont icon-jiaohuan"
                onTouchStart={props.changeExchangeValue}
                >
            </i>
            <Link to="/city/start">{props.start}</Link>
        </Fragment>
    )
    
    return (
        <div className="trainchoose-root">
            <Header>火车票</Header>
            <div className="top-title"></div>
            <div className="choose-content">
                <div className="choose-city">
                    <div className="exchange-city">
                        {
                            props.exchange ?  address1 : address2
                        }
                    </div>
                    <div className="choose-date">
                        <Link to='/train_date'>
                            <p>{month}月{props.day}日<span>周{weekFormat(props.day%7)}{props.day === today ? "（今天）" : "" }</span></p>
                        </Link>
                    </div>
                    <div className="only-train">
                        <input type="checkbox" id="only"/>
                        <span></span>
                        <i className="iconfont icon-icon-check-empty"></i>
                        <label htmlFor="only">只看高铁/动车</label>
                    </div>
                    <div className="search-btn">
                        <Link to="/ticket">搜索</Link>
                    </div>
                </div>
                <div className="tab-items">
                    <div className="tab-item">
                        <img src={img1} alt=""/>
                        <p>抢票</p>
                    </div>
                    <div className="tab-item">
                        <img src={img2} alt=""/>
                        <p>火车境外</p>
                    </div>
                    <div className="tab-item">
                        <img src={img3} alt=""/>
                        <p>我的订单</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    day: state.getIn(['trainDate', 'index']),
    start: state.getIn(['city', 'start']),
    end: state.getIn(['city', 'end']),
    exchange: state.getIn(['trainChoose', 'exchange'])
})

const mapDispatch = (dispatch) => ({
    changeExchangeValue() {
        dispatch(exchangeAddress());
    }
})

export default connect(mapState, mapDispatch)(TrainChoose);