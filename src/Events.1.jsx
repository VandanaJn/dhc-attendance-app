import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

const columns = [ {
    dataField: 'id',
    text: 'Event ID',
    sort: false

}, {
    dataField: 'name',
    text: 'Product Name',
    sort: true,
    filter: textFilter()
},{
    dataField: 'startdate',
    text: 'Date',
    sort: true,
    filter: textFilter()
}

]
;

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
                   
                <div className="container" style={{ marginTop: 50 }}>
                    <BootstrapTable
                        striped
                        hover
                        keyField='id' 
                        data={this.props.events} 
                        columns={columns} 
                        filter={filterFactory()} 
                        pagination={ paginationFactory() }
                        cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
                        />
                </div>
            </div>
        );
    }
}

export default Events;