import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'EventId',
    text: 'Event ID',
    sort: false

}, {
    dataField: 'EventName',
    text: 'Product Name',
    sort: true

}];

class Events extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <h4>
                    This is Events Page
                    <BootstrapTable keyField='EventId' data={this.props.events} columns={columns} />
                </h4>
            </div>
        );
    }
}

export default Events;