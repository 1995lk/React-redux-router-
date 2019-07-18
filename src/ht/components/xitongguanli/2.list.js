import React, { Component } from 'react';
import  user2 from './image/user2-160x160.jpg'
import  greend from './image/greend.png'
import  kongzhitai from './image/tu/kongzhitai.png'
import  taiyangsun61 from './image/tu/taiyangsun61.png'
import  iconfontlock from './image/tu/iconfontlock.png'
import  buju from './image/tu/buju.png'
import  tubiao from './image/tu/tubiao.png'
import  diannao from './image/tu/diannao.png'
import  biaodan1 from './image/tu/biaodan1.png'
import  biaoge from './image/tu/biaoge.png'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <ul className="menu-1">


            <div>
                <a href="#"> <img src={user2} className="tou-img" alt=""/>
                    <span className="menu-sp" >test</span>
                </a>
                <a href="#">
                    <p className="txt">test</p>
                     <img src={greend} className="greend" alt=""/>
                     <span className="span">Online</span>
                </a>
            </div>

            <li>
                <a href="#"> <img src={kongzhitai} className="biaotou" alt=""/> 我的控制台</a>
                <dl className="chil">
                    <dt>分类目录</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>
                </dl>
            </li>


            <li>
                <a href="#"><img src={taiyangsun61} className="biaotou" alt=""/> 系统管理</a>
                <dl>
                    <dt>分类目录</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>

                </dl>
            </li>

            <li>
                <a href="#"><img src={iconfontlock} className="biaotou" alt=""/> 权限管理</a>
                <dl>
                    <dt>分类目录</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>
                    
                </dl>
            </li>

            <li>
                <a href="#"><img src={buju} className="biaotou" alt=""/> 布局选项vvv</a>
                <dl>
                    <dt>布局选项</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>
                   
                </dl>
            </li>


            <li>
                <a href="#"><img src={tubiao} className="biaotou" alt=""/> 图表</a>
                <dl>
                    <dt>分类目录</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>
                    
                </dl>
            </li>


            <li>
                <a href="#"><img src={diannao} className="biaotou" alt=""/> 用户界面元素</a>
                <dl>
                    <dt>分类目录</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>
                   
                </dl>
            </li>


            <li>
                <a href="#"><img src={biaodan1} className="biaotou" alt=""/> 表单表单表单</a>
                <dl>
                    <dt>分类目录</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>
                    
                </dl>
            </li>


            <li>
                <a href="#"><img src={biaoge} className="biaotou" alt=""/> 表格</a>
                <dl>
                    <dt>分类目录</dt>
                    <dd>1、基本语句</dd>
                    <dd>2、基础理论精讲之值类型</dd>
                    
                </dl>
            </li>


        </ul>
        );
    }
}
 
export default Main;
