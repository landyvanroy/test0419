import React, {Component} from 'react';
import { Button } from 'antd-mobile'
import { PubSub } from 'pubsub-js'

export default class Login extends Component {
    render() {
        return (
            <div>
                <Button block onClick={this.login}>Log in</Button>
            </div>
        )
    }

    login = () =>{
        PubSub.publish("LOGIN");
    }
}