import React, {Component,} from 'react';
import './index.css';

function Ptop(props) {
    return(
        <div>
        <img src={props.image}
        alt={"dogecoin"}
        className={'footer'}
        >
        </img>
        </div>
        )
        }

class Footer extends Component{
        render() {
            return(
                
                    <div >
                    <Ptop 
                    image ="./assets/Image 3.png"/>
                    </div>
                     
                
                
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Footer;