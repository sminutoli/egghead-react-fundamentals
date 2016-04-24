import React from 'react';

const Component = React.createClass({
  getInitialState() {
      return {
          moment: new Date()  
      };
  },
  componentDidMount(){
    this.interval = setInterval(this.updateMoment, 1000);
  },
  componentWillUnmount(){
    clearInterval(this.interval);
  },
  updateMoment(){
    //console.log('updateMoment called');
    this.setState( {
      moment: new Date() 
    })
  },
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.moment != nextState.moment;
  },
  render(){
    console.log('Clock render called');
    var h = this.state.moment.getHours();
    var m = this.state.moment.getMinutes();
    var s = this.state.moment.getSeconds();
    return <div>
      <p>{h}:{m}:{s}</p>
    </div>;
  }
});

export default Component;