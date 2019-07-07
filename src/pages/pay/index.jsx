import React, { useState, createRef } from 'react';

import Header from '../../components/header';
import Stroke from '../../components/stroke';

import './style.scss';

function Pay() {

    let index = 0;
    const [tel, setTel] = useState('');
    const showNode = createRef();
    const childTicket = createRef();

    const ShowInfo = () => {
        showNode.current.style.display = 'none';
    }     

    const hiddenInfo = () => {
        showNode.current.style.display = 'block';
    }

    const expandMore = () => {
        index++;
        if(index %2) {
            childTicket.current.style.height = '80px';
        }else {
            childTicket.current.style.height = '25px';
        }
    }

    const chooseSeat = (index) => {
        const allNodes = document.getElementsByClassName('icon-zuowei');
        for(let i = 0; i < 3; i++) {
            allNodes[i].style.color = '#9e9e9e';
        }
        allNodes[index].style.color = '#1ba9ba';
    }
    
    return ( 
        <div className="pay-wrap">
            <Header className="pay-header">订单填写</Header>
            <Stroke></Stroke>
            <div className="pay-tricket-info">
                <p>坐席</p>
                <p>商务座<span>￥2492.5</span></p>
            </div>
            <div className="login-account">
                <div className="account">
                    <p>推荐登录12306账号</p>
                    <p>登陆后享12306出票特权</p>
                </div>
                <i className="iconfont icon-right"></i>
            </div>
            <div className="person-info">
                <div className="input-user-info" ref={showNode}>
                    <i
                     className="iconfont icon-thin-_unable_una"
                     onClick={ShowInfo}
                    >
                    </i>
                    <div className="user-name clearfix">
                        <span>姓名<i className="iconfont icon-wenhao"></i></span>
                        <input type="text" placeholder="乘客姓名"/>
                        <p ref={childTicket}>
                            <span>成人票</span>
                            <i 
                             className="iconfont icon-down"
                             onClick={expandMore}
                             ></i>
                            <span>儿童票</span>
                        </p>
                    </div>
                    <div className="user-name clearfix">
                        <span>身份证</span>
                        <input type="text" placeholder="证件号码"/>
                    </div>
                </div>
                <div className="add-person">
                        <p onClick={hiddenInfo}>添加成人</p>
                        <p>添加儿童</p>
                    </div>
            </div>
            <div className="user-tel">
                <span>联系电话</span>
                <input
                 type="text" 
                 value={tel} 
                 placeholder="通知出票信息"
                 onChange={(e) => {setTel(e.target.value)}}
                />
                <i 
                 className="iconfont icon-chazishanchudaibiankuang"
                 onClick={() => {setTel('')}}
                 >
                </i>
            </div>
            <div className="choose-seat">
                <div className="online-choose">
                    <p>在线选座</p>
                    <p>0/1</p>
                </div>
                <div className="choose-position">
                    <div className="seat-position specail-seat">
                        <span>窗</span>
                        <p>
                            <span onClick={() => {chooseSeat(0)}}>A</span>
                            <i className="iconfont icon-zuowei"></i>
                        </p>
                    </div>
                    <div className="seat-position">
                        <p>
                            <span onClick={() => {chooseSeat(1)}}>C</span>
                            <i className="iconfont icon-zuowei"></i>
                        </p>
                        <span>过道</span>                      
                    </div>
                    <div className="seat-position">                      
                        <p>
                            <span onClick={() => {chooseSeat(2)}}>F</span>
                            <i className="iconfont icon-zuowei"></i>
                        </p>
                        <span>窗</span>
                    </div>
                </div>
            </div>
            <div className="warning-tip">
                优先按指定坐席出票，若指定坐席无票，将转购其他坐席
            </div>
            <div className="pay-footer">
                <div className="ticket-desc">
                    <p>普通预定</p>
                    <span>出票较慢</span>
                </div>
                <div className="pay-btn">
                    <p>快速出票</p>
                    <span>￥40/份 赠60元代金券</span>
                </div>
            </div>
        </div>
    )
}

export default Pay;