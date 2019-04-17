import React, { Component } from 'react';

class Participants extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        console.log(this.props.something)
        return (
            <div>
                <h4>
                    This is Participants Page {this.props.something}
                </h4>
            </div>
        );
    }
}

export default Participants;