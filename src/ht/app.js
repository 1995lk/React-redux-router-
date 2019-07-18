import React, { Component } from 'react';
import Myshoye from './zonghe/index首页';
import Myxtgl from './zonghe/index系统用户管理';
import Myjsgl from './zonghe/index角色';
import Mycdgl from './zonghe/index菜单管理';
import Myrzgl from './zonghe/index操作日志';

import {
    Route,
} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <section className="todoapp">
                <div>
                    <Route exact path='/' component={Myshoye}/>
                    <Route path='/xtgl' component={Myxtgl}/>
                    <Route path='/jsgl' component={Myjsgl}/>
                    <Route path='/cdgl' component={Mycdgl}/>
                    <Route path='/rzgl' component={Myrzgl}/>
                </div>
            </section>
        );
    }
}


export default App;