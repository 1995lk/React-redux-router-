import React, { Component } from 'react';

import  left from './image/tu/left.png'
import  right from './image/tu/right.png'
import  upjian from './image/tu/up jian (1).png'
import  quanping from './image/tu/quanping.png'

class Mainsy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="breadmenu-1">
                <a href="#"><img src={left} className="left1" alt=""/></a>
                <a href="#" className="size-1" >首页</a>
            <div className="bread-nav">
                <a href="#">
                    <img src={right} className="right1" alt=""/>
                </a>
                <a href="#">
                    <span className="num">页面操作</span>
                    <img src={upjian} className="up-1" alt=""/>
                </a>
                <a href="#">
                    <img src={quanping} className="quanp" alt=""/>
                </a>
            </div>
        </div>
        );
    }
}

export default Mainsy;