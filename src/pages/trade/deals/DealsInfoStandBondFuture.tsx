import React from 'react';
import { Table, Button, Col, Row } from 'antd';
import styles from './DealsInfoStandBondFuture.css';

interface DealsInfoStandBondFutureProps {}

class DealsInfoStandBondFuture extends React.Component<DealsInfoStandBondFutureProps, any> {
    constructor(props: DealsInfoStandBondFutureProps) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            orderdata: [],
        };
    }
    columns = [
        {
            title: '客户端编号',
            dataIndex: 'clordid',
        },
        {
            title: '状态',
            dataIndex: 'state',
            filters: [
                {
                    text: '有效',
                    value: '有效',
                },
                {
                    text: '冻结',
                    value: '冻结',
                },
                {
                    text: '成交',
                    value: '成交',
                },
                {
                    text: '撤销',
                    value: '撤销',
                },
            ],
            onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: '本方',
            dataIndex: 'self',
        },
        {
            title: '合约品种',
            dataIndex: 'contracts',
        },
        {
            title: '方向',
            dataIndex: 'side',
            filters: [
                {
                    text: 'BID',
                    value: 'BID',
                },
                {
                    text: 'OFR',
                    value: 'OFR',
                },
            ],
            onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: '价格(元)',
            dataIndex: 'price',
        },
        {
            title: '剩余报价量(千万)',
            dataIndex: 'restprinciple',
        },
        {
            title: '报价量(千万)',
            dataIndex: 'nominalprincipal',
        },
        {
            title: '开平',
            dataIndex: 'oc',
            filters: [
                {
                    text: '开仓',
                    value: '开仓',
                },
                {
                    text: '平仓',
                    value: '平仓',
                },
            ],
            onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: '订单类型',
            dataIndex: 'ordertype',
            filters: [
                {
                    text: '限价',
                    value: '限价',
                },
                {
                    text: '点击成交FAK',
                    value: '点击成交FAK',
                },
            ],
            onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: '有效时间',
            dataIndex: 'validtime',
        },
        {
            title: '来源',
            dataIndex: 'from',
            filters: [
                {
                    text: '终端',
                    value: '终端',
                },
                {
                    text: 'API',
                    value: 'API',
                },
            ],
            onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: '订单编号',
            dataIndex: 'validtime',
        },
        {
            title: '本方交易员ID',
            dataIndex: 'traderid',
        },
    ];

    componentDidMount() {}

    onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className={styles.normal}>
                <Table
                    rowSelection={rowSelection}
                    columns={this.columns}
                    dataSource={this.state.orderdata}
                />
                <Row>
                    <Col span={2} push={22}>
                        <Button>撤销订单</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DealsInfoStandBondFuture;
