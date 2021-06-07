import React, {Component,} from 'react';
import './index.css';

function Ptop(props) {
    return(
        <div>
        <img src={props.image}
        alt={"dogecoin"}
        className={'image3'}>
        </img>
        <div className={'line'}>
        <img src={props.image2}
        alt={"dogecoin"}
        className={'image2'}>
        </img>
        <p className={'paragraph4'}>{props.text}</p>
        </div>
        </div>
        )
        }
function What(props) {
    return(
        <div className={'buyandsell'}>
            <h3 className={'bshead2'}>
                {props.heading}
            </h3>
            <h4 className={'message2'}>{props.message}</h4>
         <div>
         
         
         </div>   
         <p className={'paragraph3'}>
             {props.disc}
         </p>
        </div>
        )
        }
class Whatis extends Component{
        render() {
            return(
                <div className={'ptop'}>
                    <div className={'whitebox'}>
                    <Ptop 
                    image ="./assets/noun.png"
                    image2="./assets/blacktick.png"
                    text="Decetralized"/>
                    </div>
                    <div className={'whitebox2'}>
                     <What 
                     heading ="What is Dogecoin?"
                     message="Dogecoin (Doge) is a cryptocurrency created by software engineers in 2013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts. "/>

                    </div>                 
                     
                     <div className={'whitebox'}>
                    <Ptop 
                    image ="./assets/Your Icons.png"
                    image2="./assets/blacktick.png"
                    text="Peer to Peer"/>
                    </div>
                     
                </div>
                
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Whatis;