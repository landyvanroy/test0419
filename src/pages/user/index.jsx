import React, {Component} from 'react';
import { Button } from 'antd-mobile'

export default class User extends Component {
    render() {
        return (
            <div>
                <div>I'm user page</div> 
                <Button onClick={this.logout}>log out</Button> 
            </div>
        )
    }

    logout = () =>{
        console.log("logout")
    }
}