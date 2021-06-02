import React, {Component,} from 'react';
import './index.css';
import Home2 from'./Home2.js';
import Mainheading from'./Mainheading.js';
import Lastbox from './Lastbox';
class Home extends Component{
    render() {
        return(
            <div className={'wrapper'}>
                
                <div className={'maincontainer'}>
                
                    <div className={'bluecontainer1'}>
                        <h1 className={'heading1'}>Save your</h1>
                        <h2 className={'heading2'}>money now.</h2>
                        <p className={'paragraph1'}>Manage your company Bot in few easy steps,
                         join our Pro plan to try a 360 experience of our service.
                        </p>
                        <p className={'paragraph1'}>Start your 14 days of free Pro plan, you can
                          always upgrade it or stay withy the lite version for free.
                        </p>
                        <img src={'./assets/screenshot.png'}
                        alt={"screenshot"}
                        className={'image'}></img>
                    </div>
                    <div>
                    <Mainheading />
                    <div className={'twoboxes'}>
                    <Home2/>
                    <Lastbox/>
                    </div>
                    </div>
                </div>
                
 
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Home;