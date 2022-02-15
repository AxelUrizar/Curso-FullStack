const Button = (props) => {
    return <button onClick={(e) => props.handleClick(e, props.num)}>{props.action}</button>
}

// import React from "react";

// class Button extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     render() {
//       return <button onClick={this.props.handleClick}>props.action</button>
//     }
// }

export default Button;