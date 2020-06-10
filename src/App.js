import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import './App.css';
import CardGroup from 'reactstrap/lib/CardGroup';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userData: {},
      followers: [],
    };
  }

componentDidMount(){
//const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://api.github.com/users';
const user = 'Dellrodar';
const axiosGet = (url) => axios.get(url);
axiosGet(`${baseUrl}/${user}`).then(response => this.setState({userData: response.data}));
axiosGet(`${baseUrl}/${user}/followers`)
    .then(followerResponse => {
      this.setState({followers: followerResponse.data});
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <UserCard userData={this.state.userData}/>
          <CardGroup>
          <FollowerCard followers={this.state.followers} />
          </CardGroup>
        </header>
      </div>
    );
    }
  }



export default App;
