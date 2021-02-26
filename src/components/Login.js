import React, { Component } from "react";



class Login extends Component{
    
    state = {
        email:'',
        password:'',
        emailError:'',
        passwordError:''
    }
        
        
    submit(){
        if(!this.state.email.includes('@') && this.state.password.length < 6){
            this.setState({emailError: 'please enter valid email.',passwordError: 'please enter valid password.' })
        }
        else if(!this.state.email.includes('@')) {
            this.setState({emailError: 'please enter valid email.'})
            }
        else if(this.state.password.includes('/[a-zA-Z0-9]{6,12}/')) {
                this.setState({passwordError: 'please enter valid password.'})
            }
            else{
                return true
            }}
        // if(!this.state.email.includes('@') && (!this.state.password.includes('@'))){
        //     this.setState({emailError: 'please enter the valid email address', passwordError: 'a) password minimum length 6 characters b) password maximum length 12 characters c) password has at least 1 upper case, 1 lower case alphabet and 1 digit'})
        
        //    ///[a-zA-Z0-9]{6,12}/
        // } else{
        //         return true
          
        //     }
        // }

    login(){
        this.setState({
            emailError:'', passwordError:''
        })
        
        if(this.submit()){
         alert('Login Successful!')
          } else{
         alert('Please try again!')
          }
    }
    render(){
        console.log(this.state.email)
        return(
        <div>
            <div className='App-header' id='Login'>
                <h1 className='App-text'>This is Login Page!</h1>
                <h2 style={{paddingTop:'20px'}}>Login </h2>

                <input style={{marginTop:'15px'}} type='email' placeholder='email'
                 onChange={(event)=>{this.setState({email:event.target.value})}}  />
                 <h3 style={{color:'red',fontSize:'15px',paddingTop:'5px'}}>{this.state.emailError}</h3>
                <input  type='password' style={{marginTop:'15px'}} placeholder='password'
                onChange={(event)=>{this.setState({email:event.target.value})}}  />
                 <h3 style={{color:'red',fontSize:'15px',paddingTop:'5px'}}>{this.state.passwordError}</h3>

                <button style={{marginTop:'20px'}} onClick={()=>this.login()}>Login</button>  
            </div>
        </div>
        )
    }

}

export default Login;