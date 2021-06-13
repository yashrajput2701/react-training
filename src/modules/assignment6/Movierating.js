import React from "react";

const movieRating = React.memo((props) => {
  console.log(props.id);
  return (
    <>
    <div className={'dark'}>
      <p>{`Rating: ${props.rating}`}</p>
      </div>
    </>
  );
});

export default movieRating;