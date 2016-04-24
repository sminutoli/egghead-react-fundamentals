import React from 'react';

const Slider = React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },
  render(){
    console.log('Slider render called');
    return <input type="range" min="0" max="255" onChange={this.props.change} />
  }
});

export default Slider;