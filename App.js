import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import Widget from './Widget';

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      stateVal: 'state val',
      another: 0
    }
    this.update = this.update.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  update(evt){
    this.setState({ stateVal: evt.target.value })
  }

  updateColor(evt){
    var { red, green, blue } = this.refs;
    this.setState({
      red: ReactDOM.findDOMNode(red).value,
      green: ReactDOM.findDOMNode(green).value,
      blue: ReactDOM.findDOMNode(blue).value
    });
  }

  render(){
    var { val, val2 } = this.props;
    var { stateVal:st, red, green, blue } = this.state;
    var css = {
      color: 'rgb('+red+','+green+','+blue+')'
    };
    return (
      <div>
        <h1 style={css}>Hola {val} {val2}</h1>
        <h2>{st}</h2>
        <Widget update={this.update} value={st} />
        <Widget update={this.update} value={st} />
        <Slider ref="red" change={this.updateColor} />
        <Slider ref="green" change={this.updateColor} />
        <Slider ref="blue" change={this.updateColor} />
      </div>
      );
  }
}

App.propTypes = {
  val: React.PropTypes.string.isRequired,
  val2: React.PropTypes.number.isRequired
};

App.defaultProps = {
  val: 'hey'
}

export default App;