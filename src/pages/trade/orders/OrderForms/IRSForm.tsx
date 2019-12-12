import React from 'react';
import {
    Form,
    Input,
    Select,
    TimePicker,
    InputNumber,
    Radio,
    Switch,
    Tag,
    Button,
    Row,
    Col,
    Divider,
} from 'antd';
import { FormComponentProps } from 'antd/es/form';
import moment from 'moment';

const { Option } = Select;
const { Search } = Input;

interface IRSFormProps extends FormComponentProps {}

function hasErrors(fieldsError: any): boolean {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class IRSForm extends React.Component<IRSFormProps, any> {
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
                        <Form.Item label="承接方式:">
                            {getFieldDecorator('承接方式')(
                                <Switch
                                    checkedChildren="实时承接"
                                    unCheckedChildren="非实时承接"
                                    defaultChecked
                                />,
                            )}
                        </Form.Item>
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
                                    <Option value="FR007S1Y">FR007S1Y</Option>
                                    <Option value="FR007S15Y">FR007S15Y</Option>
                                    <Option value="SHI3MS1Y">SHI3MS1Y</Option>
                                    <Option value="SHI3MS5Y">SHI3MS5Y</Option>
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
                                rules: [{ required: true, message: '请输入冰山显示量!' }],
                            })(<InputNumber defaultValue={1} min={1} max={1000} />)}
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
                                    block={true}
                                    type="danger"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
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

export default Form.create<IRSFormProps>({})(IRSForm);
