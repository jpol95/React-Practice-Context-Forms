import React from 'react'
import AppContext from './AppContext'

export default class Profile extends React.Component{

    static contextType = AppContext;
    render(){
        return `This is ${this.props.firstName} ${this.props.lastName} and they are a ${this.props.role}`
              
    }
}