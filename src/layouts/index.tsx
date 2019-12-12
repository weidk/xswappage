import React from 'react';
import router from 'umi/router';
import { Layout, Menu } from 'antd';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

class BasicLayout extends React.Component {
    handleClick = (e: any): void => {
        router.push(e.key);
    };

    render() {
        return (
            <div className={styles.normal}>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Menu
                            theme="dark"
                            onClick={this.handleClick}
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="/">首页</Menu.Item>
                            <Menu.Item key="/trade">我的交易</Menu.Item>
                            <Menu.Item key="/quotations">市场行情</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 80, minHeight: 700 }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        东海证券xswap终端 @2019 Created by wdk
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default BasicLayout;
