import { Component } from 'react'; // a React class that allows all of the new components that we write in a class component format to get access to some of the functionalities that by default React has already built for us inside of this Component class

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda'
        },
        {
          name: 'Frank'
        },
        {
          name: 'Jacky'
        },
        {
          name: 'Andrei'
        }
      ]
    };
  }

  // RENDER
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
}

export default App;
