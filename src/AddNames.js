import React, { Component } from 'react';

class AddNames extends Component {
  constructor(){
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.addFunction(this.state.value);
  }

  render() {
    return (
      <div className="Component-inner">
        <h1>Inner Component - AddNames</h1>
        <form onSubmit={this.handleSubmit}>
           <label>
             Name:
             <input type="text" value={this.state.value}  onChange={this.handleChange} />
           </label>
           <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddNames;
