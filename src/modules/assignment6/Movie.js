import React, {useState,} from 'react';
import './style.css';
import Card from "./Card";
import movieData from "./Data";

export default function Moviescreen() {
    const [rating1,setRating1] = useState(movieData[1].rating);
    const [rating2,setRating2] = useState(movieData[2].rating);

    setTimeout(() => {
        setRating1(Math.round((rating1 + 0.3) * 10) / 10);
        setRating2(Math.round((rating2 + 0.3) * 10) / 10);

        movieData[1].rating = rating1;
        movieData[2].rating = rating2;
    }, 5000);
            return(
                <div className={'cards'}>
                    {movieData.map((current,index) =>(
                        <Card key={index} object={current} />
                    ))}
                </div>
        );                                                                                                                                                                                                                                                                                      
    }


