import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import AddEvents from './AddEvents';


const columns = [
    {
        Header: "Id",
        accessor: "id"
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: 'StartDate',
        accessor: "startdate"
    },
    {
        Header: 'Hours',
        accessor: "hours"
    }
]


class Events extends Component {
    constructor(props) {
        super(props)
        console.log('events called')
        console.log(props)
    }
   

    render() {
        return (
            <div>
                <h4>
                    This is Events Page</h4>

                <AddEvents refreshEvents={this.props.refreshEvents}/>
                <div className="container" style={{ marginTop: 50 }}>
                    <ReactTable
                        data={this.props.events}
                        columns={columns}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        );
    }
}

export default Events;