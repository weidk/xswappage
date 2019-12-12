import React from 'react';
import { Tabs } from 'antd';
import styles from './DealTab.css';
import DealsInfoIRS from './DealsInfoIRS';
import DealsInfoStandBondFuture from './DealsInfoStandBondFuture';

const { TabPane } = Tabs;

export default function() {
    return (
        <div className={styles.normal}>
            <Tabs defaultActiveKey="2" tabPosition="left">
                {/*<TabPane tab="IRS" key="1">*/}
                    {/*<DealsInfoIRS />*/}
                {/*</TabPane>*/}
                <TabPane tab="标债远期" key="2">
                    <DealsInfoStandBondFuture />
                </TabPane>
            </Tabs>
        </div>
    );
}
