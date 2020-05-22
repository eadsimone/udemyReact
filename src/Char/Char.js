import React from "react";

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };
    const {value, click}= props;
   return <h2 style={style} onClick={click}> { value } </h2>
};

export default Char;
