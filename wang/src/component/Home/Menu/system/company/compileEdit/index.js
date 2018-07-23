import React, { Component } from 'react';
import { Button, Table, Select } from 'antd';
import './style.css'
import '../../style.css'

const Option = Select.Option;
const select = (
    <div>
        <Select defaultValue="电表" style={{ width: 120 }} onChange={handleChange}>
            <Option value="水表">水表</Option>
            <Option value="电表">电表</Option>
        </Select>
    </div>
);

const add = (
    <span className='opt'>
        <a>+</a>
    </span>
);

const cut = (
    <span className='opt'>
        <a>+</a>
        <a>-</a>
    </span>
);

function handleChange(value) {
    console.log(`selected ${value}`);
}

const dataSource = [{
    key: '1',
    type: select,
    estate: select,
    id: 78788878,
    name: '西湖区湖底公园1号',
    option: add,
}, {
    key: '2',
    type: select,
    estate: select,
    id: 78788878,
    name: '西湖区湖底公园1号',
    option: cut ,
}];

const columns = [{
    title: '类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '小区',
    dataIndex: 'estate',
    key: 'estate',
}, {
    title: '客户号',
    dataIndex: 'id',
    key: '',
}, {
    title: '户名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '操作',
    dataIndex: 'option',
    key: 'option',
}];

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{ padding: 24, minHeight: 360 }} className='systemWrap companyMsg'>
                <h2>编辑公司</h2>
                <div>
                    <label>公司名称</label>
                    <input type='text'/>
                </div>
                <div className='companyTab'>
                    <label>管辖小区</label>
                    <Table dataSource={dataSource} columns={columns} pagination={false}/>
                </div>
                <div>
                    <label>收款账号</label>
                    <p>收款账号一旦确认后，不可更改，请认真核对后再提交</p>
                </div>
                <div>
                    <label>支付宝账号</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>微信账号</label>
                    <input type='text'/>
                </div>
                <Button type="primary">保存</Button>
            </div>
        )
    }
}
export default App;