import React, {Component,} from 'react';
import Dogecoin from './Buydogecoin';
import Dogeforme from './Dogeforme';
import Header from './Header';
import './index.css';
import Selldogecoin from './Selldogecoin';
import Spenddogecoin from './Spenddogecoin';
import Whatis from './Whatis';
import Withxcoins from './Withxcoins';
import Footer from './Footer';
import Cards from './Cards';
import Cryptonow from './Cryptonow';

class Assignment3 extends Component{
    render() {
        return(
            <div>
                <Header />
                <Cryptonow />
                <Cards />
                <Dogecoin />
                <Selldogecoin />
                <Withxcoins />
                <Whatis />
                <Spenddogecoin />
                <Dogeforme />
                <Footer />
                
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Assignment3;