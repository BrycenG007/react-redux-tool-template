import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import LoginComponent from './components/LoginComponentt'
import SignUpComponent from './components/SignUpComponent'

class App extends React.Component{
  render(){
    return (
      <div className="App">
            {
              !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
            }
           <SignUpComponent/>
           <LoginComponent/>
           <button>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps)(App);
