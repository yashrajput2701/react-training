import React, { useState,} from 'react';
import './style.css';
import Login from './Login'
export default function Signup() {
    const [isLogin, setIsLogin] =useState(false);
    const [isSignup, setIsSignup] =useState(true);

    const checkSignup =() => {
        setIsLogin(true);
        setIsSignup(false);
    }; 
        return(
            <>
            {isSignup && (
            <div className='wrapper'>
                  <div className='form-wrapper'>
                       <h2>SIGN UP</h2>
                       <form required >
                         <div className='fullName'>
                           <label htmlFor="fullName">User Name</label>
                           <input type='text' name='fullName' required />
                         </div>
                         <div className='email'>
                           <label htmlFor="email">Email</label>
                           <input type='email' name='email' required />
                         </div>
                         <div className='password'>
                           <label htmlFor="password">Password</label>
                           <input type='password' name='password' required />
                         </div>
                         <div className='info'>
                           <small>Password must be eight characters in length.</small>
                         </div>
                         <div className='submit'>
                           <button onClick={checkSignup}>SUBMIT</button>
                         </div>
                    </form>
                </div>
            </div>
            )
}           {isLogin && <Login />}
            </>
        )                                                                                                                                                                                                                                                                                      
    }

