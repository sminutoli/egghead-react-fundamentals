import React from 'react';

const Slider = React.createClass({
  render(){
    return <input type="range" min="0" max="255" onChange={this.props.change} />
  }
});

export default Slider;