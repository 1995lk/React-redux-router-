import React, { Component } from 'react';
import  xiaokongzhi from './image/tu/小控制.png'
import  xiaoyuhao from './image/tu/大于号.png'




class Mainnav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Dashb">
                <h1>Dashboard</h1>
                <small>Control panel</small>
                <div className="xiao-pic">
                    <img src={xiaokongzhi} className="koz" alt=""/>
                    <span className="home">Home</span>
                    <img src={xiaoyuhao} className="jiantou" alt=""/>
                    <span className="Das">Dashboard</span>
                </div>
        </div>
        );
    }
}

export default Mainnav;