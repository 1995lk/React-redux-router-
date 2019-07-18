import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../css/3xtgl.css';

import MyHeader from '../components/shouye/header';
import Myshouye from '../components/shouye/listshouye';
import Mychaxun from '../components/xitongguanli/4.chaxun';
import Mygj from '../components/xitongguanli/5.gongjulan';
import Mytv from '../components/xitongguanli/6.xianshi';
import Mytable from '../components/xitongguanli/7.biaodan';
import Myfoodjiao from '../components/shouye/footerjiao';


import {HashRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';


moment.locale('zh-cn');

if(module.hot)module.hot.accept();

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class XTGL extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              {/* <Icon type="pie-chart" /> */}
              <span className='tatle-lte'>
                  <NavLink to='/'>
                  Reshiram  LTE
                   </NavLink>
                </span>
        
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>我的控制台</span>
                </span>
              }
            >
              <Menu.Item key="7">1：我的任务</Menu.Item>
              <Menu.Item key="8">2：我的消息</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="alert" />
                  <span>系统管理</span>
                </span>
              }
            >
              <Menu.Item key="9">
                  <NavLink exact to="/xtgl" >
                    1：系统用户管理
                  </NavLink>
              </Menu.Item>
              


             
              <Menu.Item key="10">
                  <NavLink to="/jsgl" >
                  2：角色管理
                  </NavLink>
              </Menu.Item>
              


              
                <Menu.Item key="11">
                  <NavLink to="/cdgl">
                  3：菜单管理
                  </NavLink>
                </Menu.Item>




              <Menu.Item key="12">
                <NavLink to="/rzgl">
                4：操作日志
                </NavLink>
                </Menu.Item>


            </SubMenu>
            
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="lock" />
                  <span>权限管理</span>
                </span>
              }
            >
              <Menu.Item key="13">1：用户角色管理</Menu.Item>
              <Menu.Item key="14">2：菜单权限管理</Menu.Item>
              <Menu.Item key="15">3：账号权限授权</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="snippets" />
                  <span>布局选项</span>
                </span>
              }
            >
              <Menu.Item key="16">1： Top Navigation</Menu.Item>
              <Menu.Item key="17">2： Boxed</Menu.Item>
              <Menu.Item key="18">3： Fixed</Menu.Item>
              <Menu.Item key="19">4： Collapsed Sidebar</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="pie-chart" />
                  <span>图表</span>
                </span>
              }
            >
              <Menu.Item key="20">1： ChartJS</Menu.Item>
              <Menu.Item key="21">2： Morris</Menu.Item>
              <Menu.Item key="22">3： Flot</Menu.Item>
              <Menu.Item key="23">4： Inline charts</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub6"
              title={
                <span>
                  <Icon type="desktop" />
                  <span>用户界面元素</span>
                </span>
              }
            >
              <Menu.Item key="24">1：General</Menu.Item>
              <Menu.Item key="25">2：Icons</Menu.Item>
              <Menu.Item key="26">3：Buttons</Menu.Item>
              <Menu.Item key="27">4：Sliders</Menu.Item>
            </SubMenu>



            <Menu.Item key="28">
              <Icon type="form" />
              <span>表单</span>
            </Menu.Item>

            <Menu.Item key="29">
              <Icon type="table" />
              <span>表格</span>
            </Menu.Item>


          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <MyHeader/>

          </Header>

          <Content className='Content-height' >
            
           <Myshouye/>
          <Mychaxun/>
          <Mygj/>
          <Mytv/>
          <Mytable/>
            


          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Myfoodjiao/>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


export default XTGL;
// ReactDOM.render(<App />, document.getElementById('root'));


