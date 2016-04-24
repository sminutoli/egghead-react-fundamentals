import React from 'react';
import Widget from './Widget';

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      stateVal: 'state val',
      another: 0
    }
    this.update = this.update.bind(this);
  }

  update(evt){
    this.setState({ stateVal: evt.target.value })
  }

  render(){
    let { val, val2 } = this.props;
    let { stateVal:st } = this.state;
    return (
      <div>
        <h1>Hola {val} {val2}</h1>
        <h2>{st}</h2>
        <Widget update={this.update} value={st} />
        <Widget update={this.update} value={st} />
        <Widget update={this.update} value={st} />
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