import React from "react";

class ClockDidMount extends React.Component {
  constructor(props) {
    super(props);
    console.log('Force update: ', this.props.forceUpdate)
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    var intervalId = setInterval(
      () => { console.log('Child state update'); return this.setState({ date: new Date() })},
      1000
    );
    console.log('ClockDidMount componentDidMount before setState: ', intervalId)
    this.setState({ intervalId });
    console.log('ClockDidMount componentDidMount after setState')
  }

  componentWillUnmount() {
    console.log('ClockDidMount componentWillUnmount before clearInterval')
    clearInterval(this.state.intervalId);
    console.log('ClockDidMount componentWillUnmount after clearInterval')
  }
  render() {
    console.log('Render new state: ', this.state)
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClockDidMount;