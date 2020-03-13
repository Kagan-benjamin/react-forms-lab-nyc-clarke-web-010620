import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      chars: 0
    };
  }

  handleMessageChange = e => {
    let charNum = e.target.value.length 
    this.setState( {
      message: e.target.value
    })
    if (charNum > 0) {  
      this.setState(prevState => {
       if (charNum > prevState.chars) {
         return { 
           chars: prevState.chars + 1
         }
       } else if (charNum < prevState.chars) {
         return {
           chars: prevState.chars - 1
         }
       }  
      }, () => console.log(this.state.chars))
    } else {
      this.setState( {
          chars: 0
        }, () => console.log(this.state.chars))
    } 
  }
  

  render() {
    return (
      <div>
        <strong>Your message: (char remaining: {this.props.maxChars - this.state.chars})</strong>
        <input type="text" name="message" id="message" 
        onChange={ e => this.handleMessageChange(e) } 
        value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
