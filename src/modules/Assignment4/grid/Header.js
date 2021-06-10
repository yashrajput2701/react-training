import React, {Component,} from 'react';
import './index.css';
function Head(props) {
    return(
        <div className={'header'}>
            <p>yftyfgfted</p>
            {/* <img alt={'header'}>{props.image}</img> */}
            
        </div>
    )
}

class Header extends Component{
    render() {
        return(
            <div className={'header'}>
                <Head image="./assets/xcoins.png"/>
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Header;