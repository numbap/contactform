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
            <div className="col-md-6"
            style={{
                paddingTop: '20px'
            }}>
            <label 
                className="error"
                style={{
                    fontFamily: 'Merriweather, serif', 
                    color: 'white',
                    float:'right',
                    fontSize: '12px'
                }}>
                    Please enter a valid email address.
            </label>	
            <input 
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Your Email Address *" 
                value={props.email}
                onChange={props.changeHandler}
                name="email"
                style={{
                    borderColor: '#d02035',
                    borderWidth: '2px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    height: 'auto',
                    borderRadius: '0px',
                    MozBorderRadius: '0px',
                    WebkitBorderRadius: '0px',
                    fontFamily: 'Merriweather, serif', 
                    color: '#282828', 
                    fontSize: '16px', 
                    fontStyle: 'italic'}} />
            </div>
            <div className="col-md-6" 
            style={{
                paddingTop: '20px'
            }}>>
            <select 
                className="form-control"
                name="interest"
                value={props.interest}
                onChange={props.changeHandler}
                style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    height: 'auto',
                    borderRadius: '0px',
                    MozBorderRadius: '0px',
                    WebkitBorderRadius: '0px',
                    fontFamily: 'Merriweather, serif', 
                    color: '#282828', 
                    fontSize: '16px', 
                    fontStyle: 'italic'}} >
                <option value="Your Interests" >Your Interests</option>
                <option value="Development" >Development</option>
                <option value="Design" >Design</option>
                <option value="Marketing" >Marketing</option>
            </select>
            </div>
            <div className="col-md-12" style={{ padding:'15px' }}>
            <Button 
                style={{ 
                    backgroundColor:'#d02035', 
                    border: '0', 
                    marginTop: '5px',
                    padding: '15px',
                    fontWeight: 'bold',
                    fontFamily: 'Merriweather, serif',  }}
                    className="col-md-12"
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


