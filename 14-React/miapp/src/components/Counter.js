import { Component } from "react";



class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, numClicks: 0 };
  }

  increment() {
    this.setState({count: this.state.count + 1, numClicks: this.state.numClicks + 1})
  }

  decrement() {
    if (this.state.count > 0)
      this.setState({...this.state, count: this.state.count - 1, numClicks: this.state.numClicks + 1})
    else
      this.setState({...this.state, numClicks: this.state.numClicks + 1})
  }

  render() {
    return (
      <div>
        <p><button className="increment" onClick={() => this.increment()}>Incrementar</button></p>
        <p><button className="decrement" onClick={() => this.decrement()}>Decrementar</button></p>

        <p><span>Counter state: {this.state.count}</span></p>
        <p><span>Counter clicks: {this.state.numClicks}</span></p>
      </div>
    )
  }
}

export default Counter;