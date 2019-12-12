import React from 'react';
import { Button, Tabs, Drawer } from 'antd';
import styles from './Order.css';
import IRSForm from './OrderForms/IRSForm';
import StandIRSForm from './OrderForms/StandIRSForm';
import StandBondFutureForm from './OrderForms/StandBondFutureForm';

const { TabPane } = Tabs;

class Order extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = (e: any) => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        return (
            <div className={styles.normal}>
                <Button type="primary" onClick={this.showDrawer} icon="plus" shape="round">
                    新增报价
                </Button>
                <Drawer
                    width={520}
                    title="新增衍生品报价"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Tabs defaultActiveKey="3">
                        {/*<TabPane tab="利率互换" key="1">*/}
                            {/*<IRSForm />*/}
                        {/*</TabPane>*/}
                        {/*<TabPane tab="标准利率互换" key="2">*/}
                            {/*<StandIRSForm />*/}
                        {/*</TabPane>*/}
                        <TabPane tab="标准债券远期" key="3">
                            <StandBondFutureForm />
                        </TabPane>
                    </Tabs>
                </Drawer>
            </div>
        );
    }
}

export default Order;
