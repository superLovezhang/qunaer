import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

function Header(props) {
    return (
        <header>
            <i 
             className="iconfont icon-left"
             onClick={() => {props.history.goBack(-1); }}
            >
            </i>
            <h1>
                <span>{props.children}</span>
            </h1>
            {
                props.search
            }
        </header>
    )
}

export default withRouter(Header);