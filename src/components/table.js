import React from 'react'
import {Table, Icon} from 'antd'

export default class myTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = []

        for (var i = 0; i < 20; i++) {
            data.push({
                key: i,
                name: `undefined${i}`,
                age: 22,
                address: `山东`,
                remark: 'http://www.songhao888.cn/',
                operate: ''
            })
        }

        this.setState({
            tDate: data
        })
        /*let用法*/
        var a = [];
        for (let i = 0; i < 5; i++) {
          a[i] = function () {
            console.log(i);
          };
        }
        a[1](); // 1 每轮数据
    }

    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const columns = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: '备注',
            width: '20%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">个人博客</a>
            }
        }, {
            title: '删除',
            width: '20%',
            dataIndex: 'operate',
            render(text){
              return <a href="#">删除</a>
            }
        }]

        const { selectedRowKeys } = this.state

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
        )
    }
}
