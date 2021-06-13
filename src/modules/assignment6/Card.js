import React from "react";
import Moviedetails from "./Moviedetails";
import Movierating from "./Movierating";
export default function MovieCard(props) {
  
  
    return (
      <>
        
          <Moviedetails
            src={props.object.src}
            name={props.object.name}
            releaseDate={props.object.releaseDate}
          />
          <Movierating id={props.object.id} rating={props.object.rating} />
       </>
      
    );
  }
  