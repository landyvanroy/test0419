import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import { Button, Dialog } from 'antd-mobile'

export default class User extends Component {
    render() {
        return (
            <div>
                <div>I'm user page</div> 
                <Button block color='danger' onClick={this.logout}>log out</Button> 
            </div>
        )
    }

    logout = async () => {
        const result = await Dialog.confirm({
          content: '确定要退出登录么？',
        })
        if (result) {
            PubSub.publish("LOGOUT");
        } 
      }
}