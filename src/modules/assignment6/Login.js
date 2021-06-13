import React, {useState} from 'react';
import './style.css';
import Movie from './Movie'
export default function Login() {
    const [isMovie, setIsMovie] =useState(false);
    const [isLogin, setIsLogin] =useState(true);

    const checkLogin =() => {
        setIsMovie(true);
        setIsLogin(false);
    }; 
        return(
            <>
            {isLogin && (
            <div className='wrapper'>
                  <div className='form-wrapper'>
                       <h2>LOGIN</h2>
                       <form required >
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
                           <button onClick={checkLogin}>LOGIN</button>
                         </div>
                    </form>
                </div>
            </div>
            )
}           {isMovie && <Movie />}
            </>
        )                                                                                                                                                                                                                                                                                      
    }