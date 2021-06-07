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
         <div>
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
class Dogeforme extends Component{
        render() {
            return(
                <div className={'withxcoins'}>
                    <Bigimage image ="./assets/shutter.png"/>
                     <div className={'dogeimage'}>
                     <div className={'buysell'}>
                     <Buyandsell 
                     heading ="Is Doge for me?"
                     disc = "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment. "/>                 
                     
                     <Today 
                     text ="Buy & sell Dogecoin today"/>
                     </div>
                     </div>
                </div>
                
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Dogeforme;