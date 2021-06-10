import React, {Component,} from 'react';
import './index.css';
function Head(props) {
    return(
        <div className={'grid'}>
        <div className={'gridcontainer'}>
            <h2 className={'subhead'}>{props.subhead}</h2>
            <p className={'paragraph'}>{props.para}</p>
        </div>
        </div>
    )
}

class Header extends Component{
    render() {
        return(
            <div className={'head'}>
                <Head image="./assets/xcoins.png"
                subhead="Buy Currency"
                para="What currencies do we accept?"
                />
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Header;