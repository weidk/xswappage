
import React from 'react';
import { Table } from 'antd';
import styles from './StandBondFutureQuotation.css';

interface StandBondFutureQuotationProps {}

class StandBondFutureQuotation extends React.Component<StandBondFutureQuotationProps, any> {
  constructor(props: StandBondFutureQuotationProps) {
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
      title: '合约品种',
      dataIndex: 'contracts',
    },
    {
      title: '买单总量(千万)',
      dataIndex: 'buyamt',
    },
    {
      title: '买可成交量(千万)',
      dataIndex: 'buydealamt',
    },
    {
      title: '买价(元)',
      dataIndex: 'buyprice',
    },
    {
      title: '卖价(元)',
      dataIndex: 'sellprice',
    },
    {
      title: '卖单总量(千万)',
      dataIndex: 'sellamt',
    },
    {
      title: '卖可成交量(千万)',
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

export default StandBondFutureQuotation;
