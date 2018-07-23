import React, { Component } from 'react';
import { DatePicker, Input, LocaleProvider, Table } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';
import './style.css'
import '../style.css'

const Search = Input.Search;
const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const dataSource = [{
    key: '1',
    time: '2017-10-09 22：00',
    name: '小王',
    contain: '西湖区湖底公园1号'
}, {
    key: '2',
    time: '2017-10-09 22：00',
    name: '小王',
    contain: '编辑“天鹅湾小区”'
}];

const columns = [{
    title: '操作时间',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '操作人',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '操作内容',
    dataIndex: 'contain',
    key: 'contain',
}];

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <LocaleProvider locale={zh_CN}>
                <div style={{ padding: 24, minHeight: 360 }} className='systemWrap'>
                    <div className='operationTop'>
                        <div className='time'>
                            <label>时间：</label>
                            <RangePicker
                                ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                                showTime
                                format="YYYY/MM/DD HH:mm:ss"
                                onChange={onChange}
                            />
                        </div>
                        <div className='pers'>
                            操作人：
                            <Search
                                placeholder="input search text"
                                enterButton="Search"
                                onSearch={value => console.log(value)}
                            />
                        </div>

                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{  //分页
                        total: dataSource.length, //数据总数量id
                        pageSize: 5,  //显示几条一页
                        defaultPageSize: 5, //默认显示几条一页
                        showSizeChanger: true,  //是否显示可以设置几条一页的选项
                        showQuickJumper: true,  //快速跳转至某页
                        showTotal: function () {  //设置显示一共几条数据
                            return '共' + dataSource.length + '条';
                        },
                    }}/>
                </div>
            </LocaleProvider>
        )
    }
}
export default App;