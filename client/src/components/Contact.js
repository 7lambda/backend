import React from "react";
import {MessageDiv, ContactDiv, ContactLabel, MessageButtons, Button} from './StyledComponents';

const initialFormValue = {
    name:"",
    email:"",
    message:""
}

class Contact extends React.Component{
    state={
        name:"",
        email:"",
        message:""
    }
    updateFormValue = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = e =>{
        e.preventDefault();
        //do api call to the server about this feedback or contact
        this.setState(initialFormValue);
    }
    render(){
        return(
            <section>
                <MessageDiv>
                        <form onSubmit={this.submitForm}>
                            <div>
                                    
                            <ContactLabel>NAME</ContactLabel>
                            <ContactDiv>
                                <input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.updateFormValue}
                                />
                                </ContactDiv>
                            <ContactLabel>EMAIL</ContactLabel>
                            <ContactDiv>
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.updateFormValue}
                                />
                                </ContactDiv>
                            <ContactLabel>MESSAGE</ContactLabel>
                            <ContactDiv>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={this.state.message}
                                    onChange={this.updateFormValue}
                                />
                                </ContactDiv>
                            <MessageButtons>
                            <Button type="submit">SEND MESSAGE</Button>
                            <Button>CLEAR</Button>
                            </MessageButtons>
                            
                            </div>
                        </form>
                </MessageDiv>
            </section>
        )

    }
}

export default Contact;