import React, { Component } from 'react';
import UserTemplate from "./user_template";


class User extends Component {
    state = {
        name:'Altemir',
        lastName:'Almeida',
        age:24,
        hobbies:['run','jump'],
        spanish:'s',
        message(){console.log('hey')},
        car:{brand:"frod",model:"Focus"},
        mother:'Martha'
    }


    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;