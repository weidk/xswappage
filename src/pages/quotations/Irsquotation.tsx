import React from 'react';
import { Table } from 'antd';
import styles from './Irsquotation.css';

interface IrsquotationProps {}

class Irsquotation extends React.Component<IrsquotationProps, any> {
    constructor(props: IrsquotationProps) {
        super(props);
        this.state = {
            orderdata: [],
        };
    }
    columns = [
        {
            title: '深度',
            dataIndex: 'depth',
            filters: [
                {
                    text: '一档',
                    value: '一档',
                },
                {
                    text: '二档',
                    value: '二档',
                },
                {
                    text: '三档',
                    value: '三档',
                },
                {
                    text: '四档',
                    value: '四档',
                },
                {
                    text: '五档',
                    value: '五档',
                },
            ],
            onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: '账户主体类型',
            dataIndex: 'instype',
        },
        {
            title: '合约品种',
            dataIndex: 'contracts',
        },
        {
            title: '买单总量(百万)',
            dataIndex: 'buyamt',
        },
        {
            title: '买可成交量(百万)',
            dataIndex: 'buydealamt',
        },
        {
            title: '买价(%/BP)',
            dataIndex: 'buyprice',
        },
        {
            title: '卖价(%/BP)',
            dataIndex: 'sellprice',
        },
        {
            title: '卖单总量(百万)',
            dataIndex: 'sellamt',
        },
        {
            title: '卖可成交量(百万)',
            dataIndex: 'selldealamt',
        },
    ];

    componentDidMount() {}

    render() {
        return (
            <div className={styles.normal}>
                <Table columns={this.columns} dataSource={this.state.orderdata} />
            </div>
        );
    }
}

export default Irsquotation;
