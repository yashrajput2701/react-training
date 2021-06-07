import React, {Component,} from 'react';
import './index.css';


function Crypto(props) {
    return(
        <div className={'buysell'}>
        <h3 className={'get'}>{props.head}</h3>
        <div className={'buttonss'}>
        <button class="button button6">BUY</button>
        <button class="button button6">SELL</button>
        </div>
        <div className={'paceholder'}>
        <img src={props.image}
        alt={"dogecoin"}
        className={'usa'}
        ></img>
         <input type="text" className="type"></input>
         
         <select name="cars" id="cars" className={'usd'}>
         <optgroup>
      <option value="USD">USD</option>
      <option value="DOGE">DOGE</option>
       </optgroup>
    
       </select>
        </div>
        </div>
        )
        }
        function Crypto1(props) {
            return(
                <div className={'buysell'}>
               
                <div className={'paceholder'}>
                <img src={props.image}
                alt={"dogecoin"}
                className={'usad'}
                ></img>
                 <input type="text" className="type"></input>
                 
                 <select name="cars" id="cars" className={'usd'}>
                 <optgroup>
              <option value="USD">USD</option>
              <option value="DOGE">DOGE</option>
               </optgroup>
            
               </select>
                </div>
                <button class="button button7">BUY DOGE</button>
                </div>
                )
                }
function Cryptohead(props) {
            return(
                <div>
                <h3 className={'mainhead'}>{props.head}</h3>
                <h4 className={'mainhead2'}>{props.text}</h4>
                <p className={'para'}>{props.para}</p>
                </div>
                )
                }
          
class Cryptonow extends Component{
    render() {
        return(
            <div className={'selectp'}>
                <Cryptohead 
                image ="https://xcoins-preprod-bucket.s3.eu-west-1.amazonaws.com/flags/usa.svg"
                head="Buy & Sell Dogecoin Online"
                text="Add Doge to your crypto wallet"
                para="Instant, fun, and free from the traditional banking system. Buy Dogecoin with your debit or credit card today.
                "/>
                <div className={'cryptobox'}>
                <Crypto 
                image ="https://xcoins-preprod-bucket.s3.eu-west-1.amazonaws.com/flags/usa.svg"
                head="Get your Crypto now!"/>
                <Crypto1
                image ="./assets/bitcoin.png"
                head="Get your Crypto now!"/>
                </div>
                
                 
            </div>
            
    )                                                                                                                                                                                                                                                                                      
}
}
export default Cryptonow;


