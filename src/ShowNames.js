import React, { Component } from 'react';

class ShowNames extends Component {
  render() {
    const formattedNames = this.props.names.map((n,i) => {
      return <h2 key={i}>{n}</h2>
    })
    return (
      <div className="Component-inner">
        <h1>Inner Component - ShowNames</h1>
        {formattedNames}
      </div>
    );
  }
}

export default ShowNames;
