import React from "react";

const person = (props) => {
    const {age, name}= props
   return <h2 onClick={props.click}>soy { name } una persona de {age} años</h2>
};

export default person;
