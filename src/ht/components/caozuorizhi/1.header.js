import React, { Component } from 'react';
import  Image from './image/caidan.png'
import  xinfeng from './image/xinfeng.png'
import  lingdang from './image/lingdang.png'
import  xiaoqi from './image/xiaoqi.png'
import  user2 from './image/user2-160x160.jpg'
import  shezhi from './image/shezhi.png'


class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header-1 clearfix" >
            <ul id="tou" className="menu-left clearfix">
                <li className="no-boder">
                    <a href="#">Reshiram LTE</a>
                </li>
                <li>
                    <a href="#"><img src= {Image} className="user-image" /></a>
                </li>
            </ul>

            <ul className="menu-right clearfix" >

            <li>
                <a href="#">
                    <img src={xinfeng} className="user-image" />
                </a>
            </li>

                <li>
                    <a href="#">
                        <img src={lingdang} className="user-image" />
                    </a>
                </li>

                    <li>
                        <a href="#">
                            <img src={xiaoqi} className="user-image" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={user2} className="user-image" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={shezhi} className="user-image" />
                        </a>
                    </li>
            </ul>
        </div>
        );
    }
}
export default MyHeader;