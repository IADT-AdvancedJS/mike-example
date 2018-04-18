import React, { Component } from 'react';
import ShowNames from './ShowNames';
import AddNames from './AddNames';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { names: ['Andrew', 'Mike']};

    this.addName = this.addName.bind(this);
  }

  addName(name) {
    console.log(name + ' added')
    this.setState({names: this.state.names.concat(name)});
  }

  render() {
    return (
      <div className="App" style={{borderStyle: 'dotted'}}>
        <h1>Outer Component</h1>
        <ShowNames names={this.state.names} />
        <AddNames addFunction={this.addName} />
      </div>
    );
  }
}

export default App;
