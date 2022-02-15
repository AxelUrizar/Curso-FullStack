import React from "react";
import ClockConstruct from "./ClockConstruct";
import ClockDidMount from "./ClockDidMount";

class ClockParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    var intervalId = setInterval(
      () => { console.log('Parent state update'); return this.setState({ date: new Date() })},
      2000
    );
    console.log('ClockParent componentDidMount before setState: ', intervalId)
    this.setState({ intervalId });
    console.log('ClockParent componentDidMount after setState')
  }

  componentWillUnmount() {
    console.log('ClockParent componentWillUnmount before clearInterval')
    clearInterval(this.state.intervalId);
    console.log('ClockParent componentWillUnmount after clearInterval')
  }

  render() {
    console.log('Render new state: ', this.state)
    return (
      <div>
        <ClockDidMount forceUpdate={this.state.date}/>
      </div>
    );
  }
}

export default ClockParent;