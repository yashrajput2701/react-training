import "./Style.css";
import React from 'react';
import {
    useHistory
  } from "react-router-dom";

export default function Login() {
    const history = useHistory();

        return(
            <>
            <div className='wrapper'>
                <div className='form-wrapper'>
                       <h2>LOGIN</h2>
                       <form required >
                         <div className='fullName'>
                           <label htmlFor="fullName">Full Name</label>
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
                           <button  onClick={() => { history.push('/navbar') }}>LOGIN</button>
                         </div>
                    </form>
                </div>
            </div>
            
            </>
        )                                                                                                                                                                                                                                                                                      
    }

