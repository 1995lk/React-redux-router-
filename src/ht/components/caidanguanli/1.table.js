
import React,{Component} from 'react';
import { Table } from 'antd';

import 'antd/dist/antd.css';


const columns = [
  {
    title: '菜单名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '唯一标识',
    dataIndex: 'age',
    key: 'age',
    width: '10%',
  },
  {
    title: '菜单URL',
    dataIndex: 'address',
    key: 'address',
    width: '10%',
  },


  {
    title: '菜单类型',
    dataIndex: 'cdlx',
    width: '10%',
    key: 'cdlx',
  },

  {
    title: '菜单图标',
    dataIndex: 'cdtb',
    key: 'cdtb',
    width: '12%',
  },
  {
    title: '创建时间',
    dataIndex: 'cjtime',
    key: 'cjtime',
    width: '12%',
  },
  {
    title: '修改时间',
    dataIndex: 'xgtime',
    key: 'xgtime',
    width: '12%',
  },
  {
    title: '操作',
    dataIndex: 'cz',
    key: 'cz',
    width: '12%',
  },
];

const data = [
  {
    key: 1,
    name: '我的控制台.',
    age: 60,
    address: '哈哈#0',

    cdlx:"菜单",
    cdtb:'菜单图标',
    cjtime:'2017-08-08 22:52:02',
    xgtime:'2019-08-08 22:52:02',
    cz:"操作1",

    children: [

      {
        key: 2,
        name: '我的任务',
        age: 42,
        address: '哈哈#',

        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        
        key: 3,
        name: '我的信息',
        age: 42,
        address: '哈哈#1',

         cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
    ],
  },

  {
    key: 4,
    name: '系统管理',
    age: 60,
    address: '嘿嘿#',
    cdlx:"菜单",
    cdtb:'菜单图标',
    cjtime:'2017-08-08 22:52:02',
    xgtime:'2019-08-08 22:52:02',
    cz:"操作1",
    children: [
      {
        key: 5,
        name: '系统用户管理',
        age: 42,
        address: 'users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 6,
        name: '角色管理',
        age: 42,
        address: 'users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 7,
        name: '菜单管理',
        age: 42,
        address: 'users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 8,
        name: '操作日志',
        age: 42,
        address: '	/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
    ],
  },



  {
    key: 9,
    name: '权限管理',
    age: 60,
    address: '#',
    cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
    children: [
      {
        key: 10,
        name: '1：用户角色管理',
        age: 42,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 11,
        name: '2：菜单权限管理',
        age: 42,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 12,
        name: '3：账号权限授权',
        age: 42,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
    ],
  },

  {
    key: 13,
    name: '布局选项',
    age: 60,
    address: '#',
    cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
    children: [
      {
        key: 14,
        name: '1： Top Navigation',
        age: 42,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 15,
        name: '2： Boxed',
        age: 42,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 16,
        name: '3： Fixed',
        age: 42,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 17,
        name: '4： Collapsed Sidebar',
        age: 42,
        address:'/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
    ],
  },
  

  {
    key: 19,
    name: '图表',
    age: 72,
    address: '#',
    cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
    children: [
      {
        key: 20,
        name: '1： ChartJS',
        age: 16,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 21,
        name: '2： Morris',
        age: 16,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 22,
        name: '3： Flot',
        age: 16,
        address:'/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 23,
        name: '4： Inline charts',
        age: 16,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
    ],
  },

  {
    key: 24,
    name: '用户界面元素',
    age: 30,
    address: '#',
    cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
    children: [
      {
        key: 25,
        name: '1：General',
        age: 16,
        address: '/users',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 26,
        name: '2：Icons',
        age: 16,
        address: '#',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 27,
        name: '3：Buttons',
        age: 16,
        address:'#',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
      {
        key: 28,
        name: '4：Sliders',
        age: 16,
        address: '#',
        cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
      },
    ],
  },

  {
    key: 29,
    name: '表单',
    age: 32,
    address: '#',
    cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
  },
  {
    key: 30,
    name: '表格',
    age: 32,
    address: '#',
    cdlx:"菜单",
        cdtb:'菜单图标',
        cjtime:'2017-08-08 22:52:02',
        xgtime:'2019-08-08 22:52:02',
        cz:"操作1",
  },

];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Table columns={columns} rowSelection={rowSelection} dataSource={data} >
          <rowSelection/>
        </Table>
        </div>
      );
  }
}
 
export default About;
