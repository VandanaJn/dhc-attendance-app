import React, { Component } from 'react';

class Events extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h4>
                    This is Events Page
                    <table>
                        <tbody>
                            {

                                this.props.events.map((value, idex) => (
                                    <tr key={value}>
                                        <td >{value}</td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </h4>
            </div>
        );
    }
}

export default Events;