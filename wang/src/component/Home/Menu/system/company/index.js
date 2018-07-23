import React, { Component } from 'react';
import { Button, Icon, Input } from 'antd';
import { Link } from "react-router-dom"
import './style.css'
import '../style.css'

class App extends Component {
    constructor() {
        super()
    }
    toedit(e) {
        console.log(1)
        this.props.history.push('/home/edit')
    }
    toInfo(e) {
        this.props.history.push('/home/info')
    }
    render() {
        return (
            <div style={{ padding: 24, minHeight: 360 }} className='systemWrap'>
                <div className='click'>
                    <Button type="primary" onClick={() => {this.toInfo()}}>添加公司</Button>
                </div>
                <div className='companyList'>
                    <div className='companyInfo'>
                        <h3>衡阳白沙工业园区 <Icon type="form" onClick={(e) => {this.toedit(e)}} /></h3>
                        <h6>收款账号：</h6>
                        <div className='shroffAccount'>
                            <p>微信：<input type='text' value={123456789} disabled="disabled"/></p>
                            <p>支付宝：<input type='text' value={123456789} disabled="disabled"/></p>
                        </div>
                        <h6>管辖小区(2)：</h6>
                        <h6>富金春天小区</h6>
                        <div className='community'>
                            <p>电表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                            <p>水表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                        </div>
                        <h6>富金秋天小区</h6>
                        <div className='community'>
                            <p>电表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                            <p>水表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                        </div>
                    </div>
                    <div className='companyInfo'>
                        <h3>衡阳白沙工业园区 <Icon type="form" onClick={(e) => {this.toedit(e)}} /></h3>
                        <h6>收款账号：</h6>
                        <div className='shroffAccount'>
                            <p>微信：<input type='text' value={123456789} disabled="disabled"/></p>
                            <p>支付宝：<input type='text' value={123456789} disabled="disabled"/></p>
                        </div>
                        <h6>管辖小区(2)：</h6>
                        <h6>富金春天小区</h6>
                        <div className='community'>
                            <p>电表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                            <p>水表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                        </div>
                        <h6>富金秋天小区</h6>
                        <div className='community'>
                            <p>电表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                            <p>水表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                        </div>
                    </div>
                    <div className='companyInfo'>
                        <h3>衡阳白沙工业园区 <Icon type="form" onClick={(e) => {this.toedit(e)}} /></h3>
                        <h6>收款账号：</h6>
                        <div className='shroffAccount'>
                            <p>微信：<input type='text' value={123456789} disabled="disabled"/></p>
                            <p>支付宝：<input type='text' value={123456789} disabled="disabled"/></p>
                        </div>
                        <h6>管辖小区(2)：</h6>
                        <h6>富金春天小区</h6>
                        <div className='community'>
                            <p>电表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                            <p>水表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                        </div>
                        <h6>富金秋天小区</h6>
                        <div className='community'>
                            <p>电表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                            <p>水表</p>
                            <p>客户号: 8787878&nbsp;&nbsp;&nbsp;户名：富金1区</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;