import React, {Component,} from 'react';
import './index.css';
function Spenddogecoin(props) {
    return(
        <div className={'buydogecoin'}>
            <h2 className={'dogehead'}>{props.title}</h2>
        <p className={'dogeparagraph2'}>
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
    </div>
    </div>

    </div>
        )
        }
class Crypto extends Component{
    render() {
        return(
            <div className={'spendoge'}>
                <Spenddogecoin  
                title="Where I can Spend my Dogecoin?"
                desc=" There are a variety of fashion and clothing shops online accepting Doge as payment.
                You can also use your Doge to pay for domains and hosting, or online casinos." />
            <div className={'dogeimage'}>
            
                <Content image = "./assets/Group 3345.png" />

                <Content image = "./assets/Group 3346.png" />

                <Content image = "./assets/Group 3345.png" />


            </div>
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Crypto;