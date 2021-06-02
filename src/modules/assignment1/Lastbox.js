import React, {Component,} from 'react';
import './index.css';

class Lastbox extends Component{
    render() {
        return(  
                <div className={'bluecontainer3'}>
                    <div className={'lite2'}>
                       <h2 className={'heading3'}>Pro</h2>
                       <h2 className={'heading4'}>29$</h2>
                    </div>
                    <h3 className={'plan2'}>All of Lite plus:</h3>
                    <div className={'list2'}>
                     <ul>
                     <li>Bot with AI that can recognize the user's behaviour and can automatize the sentences.</li>
                     <li>Unlimited conversational flows.</li>
                     <li>Facebook,Twitter,Instagram and Linkedin integration.</li>
                     <li>Achieved chat without limits.</li>
                     </ul>  
                    </div>
                    <p className={'features2'}>View all the features</p>
                    <button className={'buttonbutton2'}>Start 14 days of free Pro plan</button>
                </div>
                
            )                                                                                                                                                                                                                                                                                
        }
    }
export default Lastbox; 