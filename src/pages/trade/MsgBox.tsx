import React from 'react';
import { Typography } from 'antd';
import styles from './MsgBox.css';

const { Title, Text } = Typography;

export default function() {
    return (
        <div className={styles.normal}>
            <Title level={2} style={{ textAlign: 'center' }}>
                -消息盒子-
            </Title>
            {/*<Text>这是普通的消息 </Text>*/}
            <br />
            <Text type="danger">
                服务端异常：clOrdId:ORDE20191211qtrd00000031,errorMsg:XSWAP新增订单时普通交易权限不足
                服务端异常：clOrdId:ORDE20191211qtrd00000032,errorMsg:XSWAP新增订单时接口报价权限不足
                服务端异常：clOrdId:ORDE20191211qtrd00000033,errorMsg:XSWAP撤销订单时普通交易权限不足
                服务端异常：clOrdId:ORDE20191209dhde54352634,errorMsg:XSWAP撤销订单时接口报价权限不足
            </Text>
            <br />
            {/*<Text type="danger">这是风控等错误消息</Text>*/}
            <br />
        </div>
    );
}
