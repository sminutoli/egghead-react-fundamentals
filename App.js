import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      stateVal: 'state val',
      another: 0
    }
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
        <input onChange={this.update.bind(this)} />
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