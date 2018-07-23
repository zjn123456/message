import React, { Component } from 'react';
import Routerview from './router/route';   // 登录之后进去的页面的路由管理
import config from './router/router.config';
import { BrowserRouter } from 'react-router-dom';
import Login from './component/Login';  // 登录页面
import 'antd/dist/antd.css';
import './App.css';

class App extends Component{
    constructor() {
        super()
        this.state = {
            isLogin: false,  // 是否是登录状态
            tokens: '',
        }
        this.userLogin = this.userLogin.bind(this);
    }
    userLogin (value, data, cb) {
        console.log(data)
        const { telenum, password } = value;
        const { token } = data;
        this.setState({
            tokens: token
        })
    }
    componentWillMount() {
        const oldToken = localStorage.getItem('user_token');
        console.log(oldToken);
        if ( oldToken ) {
            this.setState({
                isLogin:true
            })
        }
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    {
                        this.state.isLogin ? <Routerview routes={config.routes}/> : <Login userLogin={this.userLogin}/>
                    }
                </BrowserRouter>
            </div>
        )
    };
}

export default App;
