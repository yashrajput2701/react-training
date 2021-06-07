import React, {Component,} from 'react';
import './index.css';

function Buydogecoin(props) {
    return(
        <div className={'buydogecoin'}>
            <h2 className={'dogehead'}>{props.title}</h2>
        <p className={'dogeparagraph'}>
           {props.desc}
        </p>
        </div>
        )
        }
function Content(props) {
    return(
        <div className={'buydogecoin'}>
    
    <div className={'dogeimage'}>
        <div>
    <img src={props.image}
        alt={"dogecoin"}
        className={'image2'}>
    </img>
    <div className={'pointwise'}>
        <div className={'circle2'}>
             <p className={'nos'}>{props.serial}</p>
        </div>
        <h3 className={'main'}>{props.title}</h3>

    </div>
    <p className={'explain'}>
        {props.desc}
    </p>
    </div>
    </div>

    </div>
        )
        }
class Selldogecoin extends Component{
        render() {
            return(
                <div className={'buydogecoin'}>
                    <Buydogecoin title = "How to Sell Dogecoin" desc = "Only 3 simple steps"/>
                     <div className={'dogeimage'}>

                     <Content image = "./assets/greenticck.png" title="Get verified quickly" serial = "1" desc = "Just sign up, upload your verification documents and open your account."/>
                 
                     <Content image = "./assets/greenwallet.png" title="Buy Dogecoin" serial = "2" desc = "Select which coins you would like to sell and how much you want to purchase. "/>
                 
                     <Content image = "./assets/greenclock.png" title="Receive Coin" serial = "3" desc = "We will send your coins to your wallet within 15 minutes of payment approval."/>
                 
                     </div>
                     <button class="button button4">SELL DOGECOIN</button>
                </div>
        )                                                                                                                                                                                                                                                                                      
    }
}

export default Selldogecoin;