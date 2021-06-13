import React, {Component,} from 'react';
import './style.css';

function Card(props) {
    return(
        <div className={'Card1'}>
         <img src={props.image}
          alt={"poster"}
          className={'poster'}>
         </img>
         <p className={'title'}>{props.title}</p>
         <p>Release date:{props.date}</p>
         <p>Rating: {props.Rating}</p>

        </div>
        )
        }
class Movie extends Component{
        render() {
            return(
                <div className={'cards'}>
                    <div className={'cardcontent'}>
                    <Card title = "DARK" 
                    image = "./assets/global.png"
                    date = "27/05/2020"
                    Rating="8"/>
                    </div>
                    <div className={'cardcontent'}>
                    <Card title = "LUCIFER" 
                    image = "./assets/lucifer.jpeg"
                    date = "27/01/2016"
                    Rating="8"/>
                    </div>
                    <div className={'cardcontent'}>
                    <Card title = "VIKINGS" 
                    image = "./assets/maxresdefault.jpg"
                    date = "27/05/2020"
                    Rating="8"/>
                    </div>
                </div>
        )                                                                                                                                                                                                                                                                                      
    }
}

export default Movie;