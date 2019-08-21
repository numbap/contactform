import React from 'react'
import { Button } from 'react-bootstrap'

const SignUpForm = function (props) {
    return (
        <div className="row">
            <div className="col-md-12" style={{textAlign:'left'}}>                    
            <p 
                style={{ 
                    fontFamily: 'Merriweather, serif', 
                    color: 'white', 
                    fontSize: '20px' }} >
                Prepare for your career with a Project Management, Web-Development, Graphic Design or Marketing Internship at Northern.
            </p>
            </div>
            <div className="col-md-6 form_padding_top" >
            <label 
                className="error_message">
                    {props.error && (<div>Please enter a valid email address.</div>) }
            </label>	
            <input 
                type="email" 
                className={props.error ? 
                    "form-control input_email input_email_error" 
                    :
                    "form-control input_email"}
                id="exampleFormControlInput1" 
                placeholder="Your Email Address *" 
                value={props.email}
                onChange={props.changeHandler}
                name="email"  />
            </div>
            <div className="col-md-6 form_padding_top" >
            <select 
                className="form-control input_interest"
                name="interest"
                value={props.interest}
                onChange={props.changeHandler}
                 >
                <option value="Your Interests" >Your Interests</option>
                <option value="Development" >Development</option>
                <option value="Design" >Design</option>
                <option value="Marketing" >Marketing</option>
            </select>
            </div>
            <div className="col-md-12" style={{ padding:'15px' }}>
            <Button 
                    className="col-md-12 submit_button"
                    onClick={props.clickHandler}
                    >
                    {props.submitButton ? 
                        (<div>Submitting...</div>)
                        :
                        (<div>Sign Up Now <i className="fas fa-caret-right" style={{marginLeft:'5px', fontSize:'13px'}}></i></div>)
                    }
                
                </Button>
            </div>
    
        </div>
    )
}


export default SignUpForm


