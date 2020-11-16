import React from 'react'
import AppContext from './AppContext'

export default class AddNewProfile extends React.Component{
    state = {
        name:'', role: '', id: ''
    }
    static contextType = AppContext

    handleSubmit = (e) => {
        e.preventDefault()
        this.context.onSubmit(this.state)
    }

    onNameChange = (name) => {
        let id ="" + Math.random()*10000000
        this.setState({...this.state, name, id})
    }

    onRoleChange = (role) => {
        this.setState({...this.state, role})
    }

    

    render(){
        return(
            <form onSubmit={(e)=> this.handleSubmit(e)}>
            <label htmlFor="name">Enter your first and last name</label>
            <input onChange={(e) => this.onNameChange(e.target.value)} id="name" type="text"/>
            <label htmlFor="role" >Enter your role</label>
            <input onChange={(e) => this.onRoleChange(e.target.value)} id="role" type="text"/>
            <button type="submit">Submit</button>
            </form>
        
        )
    }
}