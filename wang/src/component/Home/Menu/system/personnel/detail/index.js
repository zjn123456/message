import React, { Component } from 'react';
import { Checkbox, Button } from 'antd';
import  './style.css'
import '../../style.css'

const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const options = [
    { label: '首页', value: '首页' },
    { label: '房产管理（查看）', value: '房产管理（查看）' },
    { label: '房产管理（操作）', value: '房产管理（操作）' },
    { label: '水费管理（查看）', value: '水费管理（查看）' },
    { label: '水费管理（操作）', value: '水费管理（操作）' },
    { label: '电费管理（查看）', value: '电费管理（查看）' },
    { label: '电费管理（操作）', value: '电费管理（操作）' },
    { label: '财务管理（查看）', value: '财务管理（查看）' },
    { label: '财务管理（操作）', value: '财务管理（操作）' },
    { label: '发票管理', value: '发票管理' },
    { label: '收据管理', value: '收据管理' },
    { label: '报修管理', value: '报修管理' },
    { label: '用户管理', value: '用户管理' },
    { label: '审核', value: '审核' },
    { label: '通知管理', value: '通知管理' },
    { label: '系统管理', value: '系统管理' },
    { label: '意见反馈', value: '意见反馈' },
];

class App extends Component {
    constructor() {
        super()
    }
    render() {
        const data = JSON.parse(localStorage.getItem('data'));
        return (
            <div className='systemWrap'>
                <h3>人员信息</h3>
                <div className='systemMsg'>
                    <div>
                        <label>姓名</label><input type='text' defaultValue={data.name} disabled="disabled"/>
                    </div>
                    <div>
                        <label>手机号</label><input type='text' defaultValue={data.telenum} disabled="disabled"/>
                    </div>
                    <div>
                        <label>密码</label><input type='text' defaultValue={data.password} disabled="disabled"/>
                    </div>
                </div>
                <h3>权限</h3>
                <div className='systemAuthority'>
                    <CheckboxGroup options={options} onChange={onChange} />
                </div>
                <div className='systemBtns'>
                    <Button onClick={() => this.cancel()}>取消</Button>
                    <Button type="primary">保存</Button>
                </div>
            </div>
        )
    }
}
export default App;