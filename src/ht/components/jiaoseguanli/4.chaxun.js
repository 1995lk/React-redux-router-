import React, { Component } from 'react';

import  fangdajing from './image/系统管理/fangdajing.png'

class Chaxun extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="navchaxun">
        <div>
            <h3>查询条件</h3>
        </div>
        <div className="name">
            <span>用户名:</span>
            <input type="text" placeholder="请输入用户名"/>
            <span className="span2">登录名:</span>
            <input type="text" placeholder="请输入登录名"/>
            <button>
                <img src={fangdajing} alt=""/>
                查询
            </button>
        </div>
    </div>
        );
    }
}

export default Chaxun;