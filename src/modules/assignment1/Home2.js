import React, {Component,} from 'react';
import './index.css';

class Home2 extends Component{
    render() {
        return(  
                <div className={'bluecontainer2'}>
                    <div className={'lite'}>
                       <h2 className={'heading3'}>Lite</h2>
                       <h2 className={'heading4'}>Free</h2>
                    </div>
                    <h3 className={'plan'}>Plan includes:</h3>
                    <div className={'list'}>
                     <ul>
                     <li>Manage conversations directly from your website.</li>
                     <li>Bot without the AI service.</li>
                     <li>Achieved chat for 30 days.</li>
                     <li>Free for always.</li>
                     </ul>  
                    </div>
                    <p className={'features'}>View all the features</p>
                    <button className={'buttonbutton1'}>Start 14 days of free Pro plan</button>
                </div>
                
            )                                                                                                                                                                                                                                                                                
        }
    }
export default Home2; 