import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = e => {
    this.setState( {
      username: e.target.value
    })
  }

  handlePasswordChange = e => {
    this.setState( {
      password: e.target.value
    })
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  // //   let username = e.target.username.value
  // //   let password = e.target.password.value 
  // //   let loginCred = { username, password }
  // //   if (!this.state.username || !this.state.password) 
  //   return (
  //     this.props.handleLogin(this.state)
  // //   console.log(e.target.username.value)
  // //   console.log(e.target.password.value)
  //   )
  // }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
              onChange={ e => this.handleUsernameChange(e) }     
              value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
              onChange={ e => this.handlePasswordChange(e) }     
              value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
