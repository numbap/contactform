import React from 'react'
import { Button } from 'react-bootstrap'
import SignUpForm from '../sign-up-form/sign-up-form'
import FormSubmitted from '../form-submitted/form-submitted'
import isEmail from 'is-email'

class SignUpPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            interest: '',
            submitButton: false,
            formSubmitted: false
        }

    }

    processForm = (e) => {
        e.preventDefault()
        this.setState({submitButton: true})
        setTimeout(() => {
            isEmail(this.state.email) ? 
                this.setState({formSubmitted: true})
                :
                this.setState({submitButton: false})  
          }, 3000);
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-12" style={{textAlign:'left'}}>
                        <h1 
                            style={{ 
                                marginTop: '125px', 
                                fontFamily: 'Montserrat, sans-serif', 
                                color: 'white', 
                                fontSize: '65px', 
                                weight: 'bold', 
                                textAlign:'center' }} >
                            INTERNSHIP SIGNUP FORM
                        </h1>
                        <hr 
                            style={{ 
                                marginTop: '15px', 
                                marginBottom: '15px', 
                                color: '#d02035', 
                                backgroundColor: '#d02035', 
                                height: '5px', 
                                width:'30%', 
                                position: 'relative', 
                                display:'block', 
                                marginLeft:'0' }} />
                    </div>
                </div>
                    {this.state.formSubmitted ? 
                        (<FormSubmitted />)
                        :
                        (<SignUpForm changeHandler={this.changeHandler} clickHandler={this.processForm} {...this.state} />)
                    }
            </div>
        )
    }
}

export default SignUpPage
