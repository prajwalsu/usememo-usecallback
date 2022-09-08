import React, { Component, PureComponent } from 'react'

export default class ClasspureComponent extends PureComponent {
    render() {
        console.log("this is class pure component");
        return (
            <div>ClasspureComponent</div>
        )
    }
}

// in functional component we have purecomponent  to stop re-rendering 
// and in class component we have reac.s,memo