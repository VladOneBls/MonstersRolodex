import { Component } from 'react'; // a React class that allows all of the new components that we write in a class component format to get access to some of the functionalities that by default React has already built for us inside of this Component class

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12uhjik1h2'
        },
        {
          name: 'Frank',
          id: '12uhjifgh2'
        },
        {
          name: 'Jacky',
          id: '12uhjik145'
        },
        {
          name: 'Andrei',
          id: '12uhjik1ph'
        }
      ]
    };
  }

  // RENDER
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
