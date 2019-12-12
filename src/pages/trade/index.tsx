import React from 'react';
import { Row, Col, Divider } from 'antd';
import styles from './index.css';
import Order from './orders/Order';
import MsgBox from './MsgBox';
import DealTab from './deals/DealTab';

export default function() {
    return (
        <div className={styles.normal}>
            <Row type="flex" justify="space-between">
                <Col span={22}>
                    <Order />
                    <Divider>订单状态</Divider>
                    <DealTab />
                </Col>
                <Col span={2}>
                    <MsgBox />
                </Col>
            </Row>
        </div>
    );
}
