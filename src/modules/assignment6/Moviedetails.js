import React from 'react';

export default function moviedetails(props) {
    return (
      <>
      <div className={'dark'}>
        <img src={props.src} alt=""  className={'image'}/>
        <h3>{props.name}</h3>
        <p>{`Release Date: ${props.releaseDate}`}</p>
        </div>
      </>
    );
  }