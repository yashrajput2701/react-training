import React, {Component,} from 'react';
import './index.css';
// import ReusableBox from'../../components/reusableBox';
class Header extends Component{
    render() {
        return(
            <div className={'headalign'}>
            <div className={'header'}>
              <h1 className={'head1'}>9 React</h1>
              <h1 className={'head1'}>Developer tools </h1>
              <h2 className={'head2'}>to create Better</h2>
              <h2 className={'head2'}>Apps Faster</h2>
            </div>
            <img src={'./assets/screenshot1.jpg'}
            alt={"screenshot"}
            className={'image'}></img>
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Header;