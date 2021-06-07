import React, {Component,} from 'react';
import './index.css';
class Header extends Component{
    render() {
        return(
            <div className={'header'}>
                <img src={'./assets/xcoins.jpg'}
                alt={"screenshot"}
                className={'logo1'}></img>
                <h1 className={'logo'}>xcoins
                </h1>
                <ul>
                   <li><a href="www.google.com">BUY BITCOIN</a></li>
                   <li><a href="www.google.com">SELL BITCOIN</a></li>
                   <li><a href="www.google.com">BLOG</a></li> 
                   <li><a href="www.google.com">ABOUT US</a></li> 
                </ul>
                <button class="button button1">LOGIN</button>
                <button class="button button2">SIGN UP</button>
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Header;