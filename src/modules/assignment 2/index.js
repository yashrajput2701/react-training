import React, {Component,} from 'react';
import './index.css';
// import ReusableBox from'../../components/reusableBox';
import Header from './Header';
import Footer from './Footer';

function Developers(props) {
    return(
        <div className={'tools'}>
            <img src={props.image}
            alt={"screenshot"}
            className={'image2'}>
        </img>
        <div>
            <div className={'content'}>
        <h2 className={'reacthead'}>{props.title}</h2>
        <p className={'paragraph'}>
           {props.desc}
        </p>
        </div>
        </div>
        </div> 
    )
}
function Createapp(props) {
    return(
        <div className={'tools2'}>
            <div>
            <div className={'content'}>
              <h2 className={'reacthead'}>{props.title}</h2>
              <p className={'paragraph'}>
              {props.desc}
              </p>
            </div>
          </div>
            <img src={props.image}
            alt={"screenshot"}
            className={'image2'}>
            </img>
        </div> 

    )
  
  }

class Assignment2 extends Component{
    
      

    render() {
        return(
            <div>
            <div className={'maincontent'}>
                <Header />
                <div>
                    <Developers  image="./assets/screenshot2.jpg" title="1) React Developer Tools " desc=" Official Chrome extension for React from Fcebook that 
                    lets you examine the list of components and
                    subcomponents on the webpage" />
                    <Createapp image="./assets/screenshot3.jpg" title="2) Create React App " desc=" Tool used in the process of setting up a React IDE" />
                    <Developers image="./assets/screenshot4.jpg" title="3) Storybook " desc=" Online app that lets you create UI components." />
                    <Createapp image="./assets/screenshot5.jpg" title="4) React Styleguidist " desc=" It offers an interactive way of Creating and sharing UI" />
                    <Developers image="./assets/screnshot6.jpg" title="5) Bit " desc=" CLI tool and online platform that enables you to publish React components." />
                    <Createapp image="./assets/screenshot7.jpg" title="6) React Bootstrap " desc=" Powerful toolkit that comprises HTML,CSS, and JavaScript tools to help you create webpages and applications." />
                    <Developers image="./assets/screenshot8.jpg" title="7) React Sight " desc=" Chrome extension for a visual illustration of all components of your app in a live tree structure." />
                    <Createapp image="./assets/screenshot9.jpg" title="8) React Styleguidist " desc=" It alerts you in the console when an avoidable render occurs." />
                    <Developers image="./assets/screenshot10.jpg" title="9) React proto " desc=" Less you drag and drop the components your way to create a UI instead of coding." />
                </div>
                <Footer />
            </div>
            </div>
        )                                                                                                                                                                                                                                                                                      
    }
}
export default Assignment2;