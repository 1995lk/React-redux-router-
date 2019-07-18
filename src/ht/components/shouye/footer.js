import React, { Component } from 'react'

import  shezhi from './image/mokuai/shezhi.png'
import  zhenbang from './image/mokuai/zhenbang.png'
import  qizi from './image/mokuai/qizi.png'
import  wuxing from './image/mokuai/wuxing.png'

class MyFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="mokuai-fu">
                <div className="mokuai1">
                    <div>
                        <img src={shezhi} alt=""/>
                    </div>

                    <span>系统总内存</span>
                    <br/>
                    <b>1G</b>
                </div>

                <div className="mokuai2">
                    <div>
                        <img src={zhenbang} alt=""/>
                    </div>
                    <span>内存空间</span>
                    <br/>
                    <b>496.44 MB</b>
                </div>

                <div className="mokuai3">
                    <div>
                        <img src={qizi} alt=""/>
                    </div>
                    <span>系统正常运行时间</span>
                    <br/>
                    <b>152338 min</b>
                </div>

                <div className="mokuai4">
                    <div>
                        <img src={wuxing} alt=""/>
                    </div>
                    <span className="span1">系统负载</span>
                    <br/>
                    <b>5分钟：0.03</b>
                    <br/>
                    <span className="span2">10分钟：0.03</span>
                    <br/>
                    <span className="span3">15分钟：0.10</span>
                </div>
    </div>
        );
    }
}
 
export default MyFooter;
