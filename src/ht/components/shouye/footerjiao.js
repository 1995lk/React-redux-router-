import React, { Component } from 'react'

class Myjiao extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="jiao-foot">
                <strong>Copyright © 2018-2019</strong>
                <a href="http://www.chenxun.org">Reshiram</a>
                <span> All rights reserved.</span>
                <b>Version 2.5.0</b>
            </div>
        );
    }
}
 
export default Myjiao;
