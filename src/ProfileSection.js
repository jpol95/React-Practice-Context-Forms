import React from 'react'
import AppContext from './AppContext'
import Profile from './Profile'


export default class ProfileSection extends React.Component{
    static contextType = AppContext
    makeMap(){
        return this.context.profiles.map(profile => {
            return <li key={profile.id} ><Profile key={profile.id} firstName={profile.firstName} lastName={profile.lastName} role={profile.role} /></li>
        })
    }
    render(){
            return <ul>
                {this.makeMap()}
            </ul>
    }
}