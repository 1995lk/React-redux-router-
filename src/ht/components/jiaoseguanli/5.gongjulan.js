import React, { Component } from 'react';

import  shuaxin from './image/系统管理/shuaxin.png'
import  xinzeng from './image/系统管理/xinzeng.png'
import  bianji from './image/系统管理/bianji.png'
import  shanchu from './image/系统管理/dele.png'
import  xiangqing from './image/系统管理/xiangqing.png'

class Gongjulan extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="bagbox">
            <b>工具栏：</b>
            <button className="btn1">
                <img src={shuaxin} alt=""/>
                <a href="">刷新</a>
            </button>
            <button className="btn2">
                <img src={xinzeng} alt=""/>
                <a href="">新增</a>
            </button>
            <button className="btn3">
                <img src={bianji} alt=""/>
                <a href="">编辑</a>
            </button>
            <button className="btn4">
                <img src={shanchu} alt=""/>
                <a href="">删除</a>
            </button>
            <button className="btn5">
                <img src={xiangqing} alt=""/>
                <a href="">详情</a>
            </button>
        </div>
        );
    }
}

export default Gongjulan;