import { Component } from 'react'; // a React class that allows all of the new components that we write in a class component format to get access to some of the functionalities that by default React has already built for us inside of this Component class

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Vlad', lastName: 'Balas'},
      company: 'ZTM'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: 'Andrei', lastName: 'Balas'},
                  };
                }, 
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
