import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import inst_img from '../../images/9364675fb26a.svg';
import logo_img from '../../images/logo.png';
import fb_img from '../../images/fb.png';
import appstore_img from '../../images/app.png';
import playstore_img from '../../images/play.png';
import './LoginPage.css'
class LoginPage extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='loginpage_main'>
                            <div>
                                <img src={inst_img} width="454px" />
                            </div>
                            <div>
                              <div className='loginPage_rightside'>
                                    <img className='loginpage_logo' src={logo_img}/>
                                    <div className='loginPage_signIn'>
                                        <input className="loginPage_text" type='text' placeholder='Phone number, username, or email'/>
                                        <input className="loginPage_text" type='password' placeholder='Password'/>
                                        <button className="loginPage_button">Log In</button>
                                    </div>
                                    <div className='login_ordiv'>
                                        <div className='login_ordivider'></div>
                                        <div className='login_or'>OR</div>
                                        <div className='login_ordivider'></div>
                                    </div>
                                        <div className='login_fb'> <img className='login_fbimg' src={fb_img}/>Login with Facebook</div>
                                        <div className='login_forgot'>Forgot password?</div>
                              </div>
                              <div className='loginPage_signupoption'>
                                    <div className='loginPage_signUp'>Don't have an account? <span style={{"fontWeight":"bold","color":"#0395F6"}}>Sign up</span></div>
                                    <div className='loginPage_signIn'>Have an account? <span style={{"fontWeight":"bold","color":"#0395F6"}}>Sign in</span></div>
                              </div>
                              <div>
                                <div className='loginPage_downloadappsection'>
                                Get the app.
                                </div>
                                <div  className='loginPage_downloadOptions'>
                                    <img className='loginPage_storeicons' src={appstore_img}/>
                                    <img className='loginPage_storeicons' src={playstore_img}/>
                                </div>
                              </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;