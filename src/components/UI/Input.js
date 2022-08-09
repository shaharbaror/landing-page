import React from "react";

const Input = (props) => {

    return <React.Fragment>
        <label>{props.label}</label>
        <input {...props.input} />
    </React.Fragment>
};

export default Input;