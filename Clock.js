import React from 'react';

const Component = React.createClass({
  getInitialState() {
      return {
          moment: new Date()  
      };
  },
  componentDidMount(){
    this.interval = setInterval(this.updateMoment, 500);
  },
  componentWillUnmount(){
    clearInterval(this.interval);
  },
  updateMoment(){
    console.log('updateMoment called');
    this.setState( {
      moment: new Date() 
    })
  },
  render(){
    var h = this.state.moment.getHours();
    var m = this.state.moment.getMinutes();
    var s = this.state.moment.getSeconds();
    return <div>
      <p>{h}:{m}:{s}</p>
    </div>;
  }
});

export default Component;