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
            isEmail(this.state.email) ? 
                this.setState({formSubmitted: true})
                :
                this.setState({submitButton: false, error: true})  
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
