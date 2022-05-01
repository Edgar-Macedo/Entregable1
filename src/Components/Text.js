import React from 'react';

const Text = ({id="", text = ""}) => {
    return (
        <p id={id}>{text}</p>
    );
};

export default Text;