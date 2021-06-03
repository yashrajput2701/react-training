import React, {Component,} from 'react';
import './index.css';
// import ReusableBox from'../../components/reusableBox';
class Footer extends Component{
    render() {
        return(
            <div className={'footer'}>
            <img src={'./assets/spotify.png'}
            alt={"screenshot"}></img>
            <h3>Eluminoustechnogies</h3>
            <h3 className={'foot'}> | </h3>
            <img src={'./assets/twitter.png'}
            alt={"screenshot"}></img>
            <h3>Bio@Eluminoustechnogies.com</h3>
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Footer;