import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom"
import Routerview from '../../router/route';
import './style.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='homeWrap'>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => { console.log(broken); }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                        <div className="logo" > logo </div>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <Menu.Item key="1">
                                <Link to='/home/index'><Icon type="inbox" />首页</Link>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="laptop" />房产管理</span>}>
                                <Menu.Item key="2"><Link to='/home/residence'>住宅</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/home/plant'>厂房</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4">
                                <Link to='/home/lock'><Icon type="inbox" />缴费锁定</Link>
                            </Menu.Item>
                            <SubMenu key="sub2" title={<span><Icon type="notification" />电费管理</span>}>
                                <Menu.Item key="5">缴费记录</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />系统管理</span>}>
                                <Menu.Item key="6"><Link to='/home/personnel'>人员管理</Link></Menu.Item>
                                <Menu.Item key="7"><Link to='/home/company'>公司管理</Link></Menu.Item>
                                <Menu.Item key="8"><Link to='/home/operation'>操作日志</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#E4E4E4', padding: 0 }}>
                            <div className='pic'></div>
                            <div className='msg'>
                                Jay.Liu
                            </div>
                            <span>
                                退出
                            </span>
                        </Header>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <Routerview  routes={this.props.routes}/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Home;