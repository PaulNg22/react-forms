import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
     firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit=event=>{
    event.preventDefault();
    console.log(`handleSubmit ${event.target.firstName.value} ${event.target.lastName.value}`)
    this.setState({
      firstName:event.target.firstName.value,
      lastName: event.target.lastName.value
    })
  }  


  render() {
    return (
      <div>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="firstName" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
          <input type="text" id="lastName" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
          <input type="submit"/>
        </form>
      </div>
    
    )
  }
}

export default Form;