import React, { Component } from 'react';

// import  left from './image/tu/left.png'
// import  right from './image/tu/right.png'
// import  upjian from './image/tu/up jian (1).png'
// import  quanping from './image/tu/quanping.png'

class Jiao extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="jiao-foot">
                <strong>Copyright © 2018-2019</strong>
                <a href="http://www.chenxun.org">Reshiram</a>
                <span> All rights reserved.</span>
                <b>Version 2.5.0</b>
            </div>
        );
    }
}

export default Jiao;