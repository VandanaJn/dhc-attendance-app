import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <h4>
                    This is Home Page {this.props.something}
                </h4>
            </div>
        );
    }
}

export default HomePage;