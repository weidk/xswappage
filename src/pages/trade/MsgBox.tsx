
import React from 'react';
import { Typography } from 'antd';
import styles from './MsgBox.css';

const { Title,Text } = Typography;

export default function() {
  return (
    <div className={styles.normal}>
      <Title level={2} style={{textAlign: 'center'}}>-消息盒子-</Title>
      <Text>这是普通的消息 </Text><br />
      <Text type="warning">这是成交之类的消息</Text><br />
      <Text type="danger">这是风控等错误消息</Text><br />
    </div>
  );
}
