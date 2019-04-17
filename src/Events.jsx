import React, { Component } from 'react';

class Events extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <h4>
                    This is Events Page {this.props.something}
                </h4>
            </div>
        );
    }
}

export default Events;