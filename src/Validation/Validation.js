import React from "react";

const Validation = (props) => {
    const {size}= props;
    const textToShow = (size > 5) ? 'Text long enough' : 'Text too short';
   return <h2 onClick={props.click}> { textToShow } </h2>
};

export default Validation;
