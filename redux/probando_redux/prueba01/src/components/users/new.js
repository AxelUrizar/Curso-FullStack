import React from "react";

class NewUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        
    }

    render(){

    }
}