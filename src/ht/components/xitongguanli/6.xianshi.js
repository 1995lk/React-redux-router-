import React, { Component } from 'react';

// import  left from './image/tu/left.png'
// import  right from './image/tu/right.png'
// import  upjian from './image/tu/up jian (1).png'
// import  quanping from './image/tu/quanping.png'

class Xianshi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="tv-1">
            <span>显示</span>
            <select className="select-1">
                <option>10</option>
                <option>25</option>
                <option selected>50</option>
                <option>100</option>
            </select>
            <span className="span1">条</span>
            <span className="span2">搜索角色名称：</span>
            <input type="text"/>
        </div>
        );
    }
}

export default Xianshi;