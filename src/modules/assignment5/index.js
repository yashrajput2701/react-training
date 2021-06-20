import React, {Component,} from 'react';
import Sidemenu from './Sidemenu';
import Header from "./Header";
import Card from "./Card";
import Table from "./Table";
import Table2 from "./Table2";
import Statement from "./Statement"
import Steppercontent from "./Steppercontent";
import Footer from "./Footer";
class assignment5 extends Component{
    render() {
        return(
            <div>
            
            <Sidemenu />
            <Header />
            <Card />
            <Table />
            <Table />
            <Table2 />
            <Statement />
            <Steppercontent />
            <Footer />
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default assignment5;