import React from 'react';
import {
    Form,
    Input,
    Select,
    TimePicker,
    InputNumber,
    Switch,
    Radio,
    Tag,
    Button,
    Row,
    Col,
    Divider,
    message,
} from 'antd';
import { FormComponentProps } from 'antd/es/form';
import moment from 'moment';

const { Option } = Select;
const { Search } = Input;

function hasErrors(fieldsError: any): boolean {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

interface StandBondFutureFormProps extends FormComponentProps {}

class StandBondFutureForm extends React.Component<StandBondFutureFormProps, any> {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e: any): void => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };
        return (
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Row>
                        <Form.Item label="报价方式:">
                            <Tag color="red">X-Swap</Tag>
                        </Form.Item>
                        <Form.Item label="报价方向:">
                            {getFieldDecorator('报价方向', {
                                initialValue: 'BID',
                                rules: [{ required: true, message: '请选择报价方向!' }],
                            })(
                                <Radio.Group size="large">
                                    <Radio.Button value="BID">BID</Radio.Button>
                                    <Radio.Button value="OFR">OFR</Radio.Button>
                                    <Radio.Button value="BI-LATERAL">BI-LATERAL</Radio.Button>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                        <Form.Item label="开平:">
                            {getFieldDecorator('开平')(
                                <Switch
                                    checkedChildren="开仓"
                                    unCheckedChildren="平仓"
                                    defaultChecked
                                />,
                            )}
                        </Form.Item>
                        <Row>
                            <Col span={10} push={2}>
                                <Form.Item label="买未平:">
                                    {getFieldDecorator('买未平')(
                                        <InputNumber min={1} max={1000} disabled />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={10} push={2}>
                                <Form.Item label="卖未平:">
                                    {getFieldDecorator('卖未平')(
                                        <InputNumber min={1} max={1000} disabled />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="本方机构:">
                            {getFieldDecorator('本方机构', {
                                initialValue: '东海证券',
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择本方机构名称!',
                                        whitespace: true,
                                    },
                                ],
                            })(
                                <Search
                                    defaultValue="东海证券"
                                    placeholder="请输入本方机构名称"
                                    onSearch={value => console.log(value)}
                                    style={{ width: 200 }}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item label="合约品种:">
                            {getFieldDecorator('合约品种', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择合约品种!',
                                        whitespace: true,
                                    },
                                ],
                            })(
                                <Select placeholder="请选择合约品种">
                                    <Option value="CDB10_1912">CDB10_1912</Option>
                                    <Option value="CDB10_2003">CDB10_2003</Option>
                                    <Option value="CDB5_1912">CDB5_1912</Option>
                                    <Option value="CDB5_2003">CDB5_2003</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="RATE(%):">
                            {getFieldDecorator('RATE', {
                                rules: [{ required: true, message: '请输入价格!' }],
                            })(<InputNumber min={0} max={10} step={0.01} />)}
                        </Form.Item>
                        <Form.Item label="AMOUNT(手):">
                            {getFieldDecorator('AMOUNT', {
                                initialValue: 1,
                                rules: [{ required: true, message: '请输入手数!' }],
                            })(<InputNumber defaultValue={1} min={1} max={1000} />)}
                        </Form.Item>
                        <Form.Item label="冰山显示量(手):">
                            {getFieldDecorator('冰山显示量', {
                                initialValue: 1,
                                // rules: [{ required: true, message: '请输入冰山显示量!' }],
                            })(<InputNumber defaultValue={1} min={0} max={1000} />)}
                        </Form.Item>
                        <Form.Item label="有效时间:">
                            {getFieldDecorator('有效时间', {
                                initialValue: moment('19:00', 'HH:mm'),
                                rules: [
                                    { type: 'object', required: true, message: '请选择有效时间!' },
                                ],
                            })(<TimePicker format={'HH:mm'} />)}
                        </Form.Item>
                    </Row>
                    <Row type="flex" align="bottom">
                        <Divider />
                        <Col span={8} push={16}>
                            <Form.Item>
                                <Button
                                    ghost
                                    block={true}
                                    type="danger"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                    onClick={() =>
                                        message.error(
                                            '服务端异常：clOrdId:ORDE20191209dhde54352634,errorMsg:XSWAP撤销订单时接口报价权限不足',
                                        )
                                    }
                                >
                                    提交
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default Form.create<StandBondFutureFormProps>({})(StandBondFutureForm);
