import React from 'react';
import { Tabs } from 'antd';
import styles from './index.css';
import Irsquotation from './Irsquotation';
import StandBondFutureQuotation from './StandBondFutureQuotation';

const { TabPane } = Tabs;

export default function() {
    return (
        <div className={styles.normal}>
            <Tabs defaultActiveKey="2">
                {/*<TabPane tab="IRS" key="1">*/}
                    {/*<Irsquotation />*/}
                {/*</TabPane>*/}
                <TabPane tab="标债远期" key="2">
                    <StandBondFutureQuotation />
                </TabPane>
            </Tabs>
        </div>
    );
}
