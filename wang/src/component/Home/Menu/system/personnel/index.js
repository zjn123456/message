import React, { Component } from 'react';
import { Table, Input, Button, Popconfirm, Form, LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import './style.css'
import '../style.css'

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);
class EditableCell extends React.Component {
    state = {
        editing: false,
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }

    save = () => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                    <div
                                        className="editable-cell-value-wrap"
                                        style={{ paddingRight: 24 }}
                                        onClick={this.toggleEdit}
                                    >
                                        {restProps.children}
                                    </div>
                                )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{
                key: '0',
                id: '001',
                name: '小王',
                telenum: '11111111111',
                authority: '这是权限',
                password: '123123'
            }, {
                key: '1',
                id: '002',
                name: '张三',
                telenum: '22222222222',
                authority: '这是权限',
                password: '123123'
            }],
            count: 2,
        };
        this.columns = [{
            title: '人员ID',
            dataIndex: 'id',
            width: '30%',
            editable: true,
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '手机号',
            dataIndex: 'telenum',
        }, {
            title: '权限',
            dataIndex: 'authority',
        }, {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    <div className='tabOperation'>
                        <a onClick={() => {this.watch(record)}}>查看</a>
                        <a onClick={() => {this.editor(record)}}>编辑</a>
                        <Popconfirm title="真的要删除掉吗？" onConfirm={() => this.handleDelete(record.key)}>
                            <a href="javascript:;">删除</a>
                        </Popconfirm>
                    </div>
                );
            },
        }];

    }
    watch(record) {
        this.state.dataSource.map((item, index) => {
            console.log(index);
            if(record.key == index) {
                localStorage.setItem('data', JSON.stringify(item))
            }
        })
        this.props.history.push('/home/personnelDetail');
    }
    editor(record) {
        this.state.dataSource.map((item, index) => {
            if(record.key == index) {
                localStorage.setItem('data', JSON.stringify(item))
            }
        })
        this.props.history.push('/home/personnelCompile');
    }
    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            id: `00${count + 1}`,
            name: '写出你的名字吧',
            telenum: `告诉我们你的手机号码好吗`,
            authority: '加个权限吧',
            password: '设置一个属于自己的密码吧'
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }

    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    }
    componentWillMount(){
        let userMessages = {};
        userMessages.user_id = localStorage.getItem('user_id');
        userMessages.user_token = localStorage.getItem('user_token');
        userMessages.pageNum = 5;
        userMessages.pageSize = 1;
        localStorage.setItem('message', JSON.stringify(userMessages))
        fetch('http://47.105.56.151:8083/api/backuser/list', {
            method: 'POST',
            headers: {
                "Accept": "*/*",
                "Content-Type": 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(userMessages),
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
    }

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <LocaleProvider locale={zh_CN}>
                <div style={{ padding: 24, minHeight: 500 }} className='systemWrap'>
                    <div className='click'>
                        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }} >
                            添加人员
                        </Button>
                    </div>

                    <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        bordered
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
                        }}
                    />
                </div>
            </LocaleProvider>
        );
    }
}


export default EditableTable;