import React from 'react';
import './Contact.css';
import Button from 'react-bootstrap/Button'
import { ButtonToolbar } from 'react-bootstrap';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            hasEmailError: false,
            isSubmitted: false,
            message: '',
            hasMessageError: false,
        };
    }

    handleSubmit(){
        this.setState({isSubmitted: true})
    }

    handleEmailChange(event) {
      const inputValue = event.target.value;
      const isEmpty = inputValue === '';
      this.setState({
          email: inputValue,
          hasEmailError: isEmpty,
      })
    }

    handleMessageChange(event) {
      const inputValue = event.target.value;
      const isEmpty = inputValue === '';
      this.setState({
          message: inputValue,
          hasMessageError: isEmpty,
      })
    }

    render() {
        let emailErrorMessage;
        if(this.state.hasEmailError){
            emailErrorMessage = (
                <p className='email-message-error'>
                    Email address is missing
                </p>

            )
        }

        let messageErrorMessage;
        if(this.state.hasMessageError){
          messageErrorMessage = (
              <p className='message-message-error'>
                  Please type message.
              </p>
          )
        }

        let contactForm = '';
        if(this.state.isSubmitted){
          contactForm = (
              <div className="contact-submit-message">
                  Thank you for your message!
              </div>
          )
        } else {
          contactForm = (
            <form onSubmit={() => {this.handleSubmit()}}>
              <p>Name</p>
              <input className="name-input" />
              <p>Your EmailAddress</p>
              <input className="email-input"
                     onChange = {(event) => {this.handleEmailChange(event)}}
                     value={this.state.email} />
              {emailErrorMessage}
              <p>Message</p>
              <textarea onChange = {(event) => {this.handleMessageChange(event)}}
                        value = {this.state.message} />
              {messageErrorMessage}
              <ButtonToolbar>
                <Button as = 'input'
                        className = 'message-send-button'
                        onClick = {() => {this.handleSubmit()}}  
                        type ='submit'
                        value ='Send'
                        variant ='primary'>            
                </Button>
              </ButtonToolbar>
            </form>               
          )
        }

        return(
          <div className="contact" id="contact">
            <h2 className="contact-h2tag">Contact Me</h2>
            <p>Please don't hesitate to contact me. You can also learn more about my programs from the Github link below and my career history from my LinkedIn profile.<br />
              If you would like to see my resume, please send a request message from the link below.<br />
              Thank you very much for visiting my website, and getting to know a little about me!!
            </p>
              
            {/* contactForm */}
          </div>
        )
    }
}

export default Contact;