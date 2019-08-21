import React from 'react'
import SignUpForm from '../sign-up-form/sign-up-form'
import FormSubmitted from '../form-submitted/form-submitted'
import isEmail from 'is-email'
import '../../custom-styles/custom-styles.css'

class SignUpPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            interest: '',
            submitButton: false,
            formSubmitted: false,
            error: false
        }
    }

    processForm = (e) => {
        e.preventDefault()
        this.setState({submitButton: true})
        setTimeout(() => {
            if(isEmail(this.state.email) && (this.state.submitButton)){
                this.setState({formSubmitted: true})
                console.log("Email: ", this.state.email, "Interest: ", this.state.interest)
            } else {
                this.setState({submitButton: false, error: true})  
            }
          }, 2000);
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-12 header_left" >
                        <h1 
                             className="main_header">
                            INTERNSHIP SIGNUP FORM
                        </h1>
                        <hr className="horizontal_rule" />
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
