import React from 'react';
import ReactDOM from 'react-dom';
import ColorSlider from './ColorSlider';
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
    var { red, green, blue } = this.refs.color.refs;
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
        <h1>{st} {val} {val2}</h1>
        <Widget update={this.update} value={st} />
        <Widget update={this.update} value={st} />
        <ColorSlider ref="color" change={this.updateColor}>
          <h2 style={css}>Titulito</h2>
        </ColorSlider>
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