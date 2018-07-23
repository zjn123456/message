import React, { Component } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import './style.css';
import{ Login } from '../../services/example';

const FormItem = Form.Item;
// 登录页面
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            loading: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    // 点击登录
    clickEvent() {
        const { form, userLogin } = this.props;
        const { getFieldValue } = this.props.form;
        const tele = getFieldValue('telenum');  // 手机号码
        const password = getFieldValue('password');  // 密码
        const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        let userMessage = {};
        userMessage.account = tele;
        userMessage.password = password;
        form.validateFields((err, values) => {
            if (!err && userLogin) {
                if (tele && password && reg.test(tele) && password.length > 5) {
                    this.setState({
                        flag: false,
                    })
                    Login({
                        account: tele,
                        password: password
                    }).then((res) => {
                        localStorage.setItem('user_id', JSON.stringify(res.uid))
                        localStorage.setItem('user_token', res.token)
                        window.location.href = '/home'
                    });
                } else {
                    this.setState({
                        flag: true,
                    })
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='wrap'>
                <h2 className='Tit Titleft'>
                    房产管理系统
                </h2>
                <h2 className='Tit'>
                    登录
                </h2>
                <div className='main'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Alert
                            message="用户名或登陆密码不正确"
                            type="error"
                            className={
                                this.state.flag ? 'show' : 'hide'
                            }
                        />
                        <FormItem className='topForm'>
                            {getFieldDecorator('telenum', {
                                rules: [{ required: true, message: '请输入您的手机号' }],
                            })(
                                <Input placeholder="请输入手机号" />
                            )}
                        </FormItem>
                        <FormItem className='downForm'>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入您的密码' }],
                            })(
                                <Input type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                    </Form>
                </div>
                <Button
                    type="primary"
                    size='large'
                    htmlType="submit"
                    className="login-form-button"
                    loading={this.state.loading}
                    onClick={() => this.clickEvent()}>
                    立即登录
            </Button>
    </div>
    )
    }
}

export default Form.create()(App);