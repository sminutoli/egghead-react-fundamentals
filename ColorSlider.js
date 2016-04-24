import React from 'react';
import Slider from './Slider';

const ColorSlider = React.createClass({
  render(){
    return <div>
      {this.props.children}
      <Slider ref="red" change={this.props.change} />
      <Slider ref="green" change={this.props.change} />
      <Slider ref="blue" change={this.props.change} />
    </div>;
  }
});

export default ColorSlider;