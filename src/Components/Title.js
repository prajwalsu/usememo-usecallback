import React from 'react'

const Title = () => {
    console.log("rendering the title component");
    return (
        <div></div>
    )
}

export default React.memo(Title); //react.memo helps us to control re-rendering

// memo method from react will make the components pure which means
//this particular component will be re-rendered only if there is any prop change or state change in that particular component