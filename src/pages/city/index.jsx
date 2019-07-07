import React, { useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/header';

import { changeStart, changeEnd } from './store/actionCreator';
import './style.scss';


function City(props) {

    const [value, setValue] = useState('');

    const search = (
        <div className="topInput">
            <i className="iconfont icon-search1187938easyiconnet"></i>
            <i className="iconfont icon-chazishanchudaibiankuang" onClick={() => {setValue('')} }></i>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} placeholder="城市、车站的中文或拼音"/>
        </div>
    );
    
    return (
        <div className="city-wrap">
            <Header search={search}></Header>
            <div className="city-choose">
                <span className="active">国内</span>
                <span className="">国际/港澳台</span>
            </div>
            <div className="city-item">
                <div className="location-city">
                    <div className="city-header">定位/历史</div>
                    <div className="detail-city">
                        <span>定位</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>北京</span>
                    </div>
                </div>
                <div className="location-city">
                    <div className="city-header">热门</div>
                    <div className="detail-city">
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>北京</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>上海</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>广州</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>深圳</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>南京</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>武汉</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>北京</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>上海</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>广州</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>深圳</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>南京</span>
                        <span onClick={(e) => {props.getTargetCity(props.match.params.id, e, props)}}>武汉</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    start: state.getIn(['city', "start"]),
    end: state.getIn(['city', "end"]),

})

const mapDispatch = (dispatch) => ({
    getTargetCity(type, e, props) {
        if(type === 'start') {
            var result = e.target.innerText;
            dispatch(changeStart(result));
        }else {
            var result = e.target.innerText;
            dispatch(changeEnd(result));
        }
        props.history.push('/');
    }
})

const newCity = withRouter(City)

export default connect(mapState, mapDispatch)(newCity);