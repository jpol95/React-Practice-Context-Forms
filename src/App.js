import React from 'react';
import './App.css';
import ProfileSection from './ProfileSection'
import AppContext from './AppContext'
import AddNewProfile from './AddNewProfile'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
    }
  }
  
  onSubmit = (profile) => {
    console.log(profile)
    const nameArray = profile.name.split(" ")
    this.setState( {profiles: [...this.state.profiles, {
      firstName: nameArray[0], 
      lastName: nameArray[1], 
      role: profile.role, 
      id: profile.id
    }]})

  }

  render(){

    return (
      <AppContext.Provider value={{profiles: this.state.profiles, onSubmit: this.onSubmit}} >
      <div>
          {<ProfileSection />}
          {<AddNewProfile />}
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;
