import React from 'react'

const ButtonComponent = ({ handleClick, children }) => {
    console.log("rendering button", children);
    return (
        <div>ButtonComponent---
            <button onClick={handleClick}>children</button>
        </div>
    )
}

export default React.memo(ButtonComponent);