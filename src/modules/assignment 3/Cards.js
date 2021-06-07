import React, {Component,} from 'react';
import './index.css';

function Card1(props) {
    return(
        <div className={'cards'}>
            <div className={'card1'}>
        <img src={props.image}
        alt={"dogecoin"}
        className={'mastercard'}>
        </img>
        <div className={'passwords'}>
        <h3 className={'password'}>{props.password}</h3>
        <h3 className={'password'}>{props.password}</h3>
        <h3 className={'password'}>{props.password}</h3>
        <h3 className={'password'}>{props.nos}</h3>
        </div>
        <div className={'names'}>
            <div>
                <p className={'account'}>{props.name}</p>
                <p className={'account2'}>{props.name2}</p>
            </div>
            <div>
                <p className={'account'}>{props.exp}</p>
                <p className={'account2'}>{props.date}</p>
            </div>
        </div>
        </div>
        </div>
        )
        }
function Card2(props) {
            return(
                <div className={'cards'}>
                    <div className={'card2'}>
                <img src={props.image}
                alt={"dogecoin"}
                className={'mastercard'}>
                </img>
                <div className={'passwords2'}>
                <h3 className={'password2'}>{props.password}</h3>
                <h3 className={'password2'}>{props.password}</h3>
                <h3 className={'password2'}>{props.password}</h3>
                <h3 className={'password2'}>{props.nos}</h3>
                </div>
                <div className={'names'}>
                    <div>
                        <p className={'accounts'}>{props.name}</p>
                        <p className={'accounts2'}>{props.name2}</p>
                    </div>
                    <div>
                        <p className={'accounts'}>{props.exp}</p>
                        <p className={'accounts2'}>{props.date}</p>
                    </div>
                </div>
                </div>
                </div>
                )
                }
function Card3(props) {
                    return(
                        <div className={'cards'}>
                            <div className={'card3'}>
                       <h2 className={'headss'}>{props.head}</h2>
                       <p className={'parass'}>{props.text}</p>
                        </div>
                        </div>
                        )
                        }
class Cards extends Component{
        render() {
            return(
                    <div className={'cards'}>
                    <Card1 
                    image ="./assets/Mastercard-logo.png"
                    password="...."
                    nos="4238"
                    name="Card Holder"
                    name2="George Dux"
                    exp="Expiry"
                    date="09/12/2026"/>
                    <Card2 
                    image ="./assets/visa.png"
                    password="...."
                    nos="4238"
                    name="Card Holder"
                    name2="George Dux"
                    exp="Expiry"
                    date="09/12/2026"/>
                    <Card3 
                    head="Exchange your 
                    Dogecoin Instantly!
                    "
                    text="Buy & sell your Doge using your Visa or Mastercard debit or credit card."/>
                    </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Cards;