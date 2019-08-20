import React from 'react'
import { Button } from 'react-bootstrap'

const FormSubmitted = function (props) {
    return (
        <div className="row">
            <div className="col-md-12" style={{textAlign:'left'}}>     
            <h3
                style={{ 
                    marginTop: '20px', 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: 'white', 
                    fontSize: '35px', 
                    weight: 'bold', 
                    textAlign:'left' }}>
                Thank you for your interest!</h3>               
            <p 
                style={{ 
                    fontFamily: 'Merriweather, serif', 
                    color: 'white', 
                    fontSize: '20px' }} >
                We will review your application and contact you for additional information should your background and experience meet the requirements of our openings.
            </p>
            </div>
    
        </div>
    )
}

export default FormSubmitted














        //     <div className="container" >
        //     <div className="row">
        //         <div className="col-md-12" style={{textAlign:'left'}}>
        //             <h1 
        //                 style={{ 
        //                     marginTop: '125px', 
        //                     fontFamily: 'Montserrat, sans-serif', 
        //                     color: 'white', 
        //                     fontSize: '65px', 
        //                     weight: 'bold', 
        //                     textAlign:'center' }} >
        //                 INTERNSHIP SIGNUP FORM
        //             </h1>
        //             <hr 
        //                 style={{ 
        //                     marginTop: '15px', 
        //                     marginBottom: '15px', 
        //                     color: '#d02035', 
        //                     backgroundColor: '#d02035', 
        //                     height: '5px', 
        //                     width:'30%', 
        //                     position: 'relative', 
        //                     display:'block', 
        //                     marginLeft:'0' }} />
        //         </div>
        //     </div>
        //         {this.state.formSubmitted ? 
        //             (<p>Hello World</p>)
        //             :
        //             (<SignUpForm {...this.state} />)
        //         }
        // </div>