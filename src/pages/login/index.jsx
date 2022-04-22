import React, {Component} from 'react';
import { Toast, Button, Input, Grid  } from 'antd-mobile'
import { PubSub } from 'pubsub-js'
import { phoneReg, codeReg } from '../../config/reg';
import './login.css';

export default class Login extends Component {
    state= {
        timer: 0,
        clickable: false
    }
    phone = '';
    code = '';

    render() {
        const {clickable, timer} =this.state;
        return (
            <div>
                <Input
                    clearable
                    onChange={this.savePhone}
                            className="phone"
                    placeholder='请输入手机号'
                />
                <Grid columns={9} gap={8} className="code-group">
                    <Grid.Item span={5}>
                        <Input
                            clearable
                            onChange={this.saveCode}
                            className="code"
                            placeholder='请输入6位验证码'
                        />
                    </Grid.Item>
                    <Grid.Item className="code-wrap" span={4}>
                        <Button 
                            color='primary' 
                            fill='none'
                            disabled={!clickable}
                            onClick={this.fetchCode}
                        >
                            获取验证码{timer>0?`(${timer})`:null}
                        </Button>
                    </Grid.Item>
                </Grid>
                <Button block onClick={this.login} >登录
                </Button>
            </div>
        )
    }

    login = () =>{
        const {phone, code} = this;
        if (!phone) {
            return Toast.show({
                icon: 'fail',
                content: '请输入合法的手机号',
              });
        }
        if (!code) {
            return Toast.show({
                icon: 'fail',
                content: '请输入合法的验证码',
              });
        }
        PubSub.publish("LOGIN");
    }

    savePhone = (value) => {
            if  (phoneReg.test(value)) {
                this.phone = value;
                this.setState({clickable: true});
            }
            else {
                this.phone = '';
                this.setState({clickable: false});
            }
    }

    saveCode = (value) => {
            if ( codeReg.test(value)) {
                this.code = value;
            }
            else {
                this.code = '';
            }
    }

    fetchCode = () => {
        this.setState({ clickable: false, timer: 10 });
        const token = setInterval( () => {
            const {timer} = this.state;
            const newTimer = timer - 1;
            if (timer <= 0) {
                clearInterval(token);
                this.setState({ clickable: true});
            }
            else {
                this.setState({ timer: newTimer})
            }
        }, 1000);
    }
}