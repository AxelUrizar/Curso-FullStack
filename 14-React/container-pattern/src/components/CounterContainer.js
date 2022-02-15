import React from "react";
import Button from "./Button";

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, numClicks: 0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }

    increment(e, num) {
        this.setState({count: this.state.count + num, numClicks: this.state.numClicks + 1})
    }

    decrement(e, num) {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - num, numClicks: this.state.numClicks + 1})
        } else {
            this.setState({numClicks: this.state.numClicks + 1})
        }
    }

    render() {
        return (
            <div>
                <Button handleClick={this.increment} num={1} action='Increment' />
                <Button handleClick={this.decrement} num={1} action='Decrement' />

                <Button handleClick={this.increment} num={2} action='Increment + 2' />
                <Button handleClick={this.decrement} num={2} action='Decrement + 2' />

                <p><span>Counter state: {this.state.count}</span></p>
                <p><span>Counter clicks: {this.state.numClicks}</span></p>
            </div>
        )
    }
}

export default CounterContainer