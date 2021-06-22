// GitHub username: gaearon, sophiebits, sebmarkbage, bvaughn, tj 

import React from 'react';
import CardList from './CardList.jsx'
import Form from './Form.jsx'
import './App.css';

class App extends React.Component {
  
  state = {
    profiles: []
  }
  
  addNewProfile = (profileData) => {
      this.setState(prevState => ({
          profiles: [...prevState.profiles, profileData] 
      }))
  }

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
