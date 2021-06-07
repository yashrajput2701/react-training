import React, {Component,} from 'react';
import './index.css';

function Bigimage(props) {
    return(
        <img src={props.image}
        alt={"dogecoin"}
        className={'image2'}>
    </img>
        )
        }
function Buyandsell(props) {
    return(
        <div className={'buyandsell'}>
            <h3 className={'bshead'}>
                {props.heading}
            </h3>
         <div className={'encrypt'}>
         <img src={props.image}
         alt={"dogecoin"}>
         </img>
         <h4 className={'message'}>{props.message}</h4>
         
         </div>   
         <p className={'paragraph3'}>
             {props.disc}
         </p>
        </div>
        )
        }
function Today(props) {
        return(
            <div className={'signup'}>
            <h4 className={'signupt'}>{props.text}</h4>
            <button class="button button5">SIGN UP</button>
            </div>
            
        )
    }
class Withxcoins extends Component{
        render() {
            return(
                <div className={'withxcoins'}>
                    <Bigimage image ="./assets/shutter.png"/>
                     <div className={'dogeimage'}>
                     <div className={'buysell'}>
                     <Buyandsell 
                     heading ="Why Buy & Sell Dogecoin with Xcoins?"
                     image = "./assets/12-Lock.png" 
                     message="Encryption technology" 
                     disc = "Xcoins reputation for speed and security will keep you coming back World-class encryption technology keeps your data secure and your transactions safe. "/>                 
                     
                     <Buyandsell 
                     image = "./assets/message.png" 
                     message="Encryption technology" 
                     disc = "If you have any questions about Dogecoin or how to buy & sell it,you can contact our 24/7 customer support team "/>

                     <Today 
                     text ="Buy & sell Dogecoin today"/>
                     </div>
                     </div>
                </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Withxcoins;