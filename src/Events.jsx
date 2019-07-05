import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import AddEvents from './AddEvents';
import { updateEvent } from './graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify';
import tick from './assets/img/png/ok.png';
import del from './assets/img/png/delete.png';



class Events extends Component {
    constructor(props) {
        super(props)
        console.log('events called')
        console.log(props)
        this.renderEditable = this.renderEditable.bind(this);
        this.updateEvent = this.updateEvent.bind(this)
        this.findId = this.findId.bind(this)
        var changedIds = {};
        changedIds.rowsIdsArray = [];
        this.state = {
            changedIds: changedIds,
        }
    }


    findId(value) {
        var match = this.state.changedIds.rowsIdsArray.find(x => x.id === value);
        if (match) {
            return true
        } else {
            return false
        }
    }

    async updateEvent(value) {
        debugger;
        try {
            var items = this.state.changedIds.rowsIdsArray.filter(x => x.id === value);
            items.forEach(element => {


                this.updateEventInGraphql(value, element.name, element.value)
            });
            console.log(items.length)

            this.props.refreshEvents()
            let arr = {};
            arr.rowsIdsArray = this.state.changedIds.rowsIdsArray.filter(x => x.id !== value)


            this.setState({ changedIds: arr })

        } catch (err) {
            console.log('error: ', err)
        }
    }

    async updateEventInGraphql(id, name, value) {

        try {
            await API.graphql(
                graphqlOperation(
                    updateEvent, {
                        input:
                            { id: id, [name]: value }
                    }
                ))
            this.props.refreshEvents()

        } catch (err) {
            console.log('error: ', err)
        }
    }

    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    this.setState({ rowsIdsArray: this.state.changedIds.rowsIdsArray.push({ id: cellInfo.row.id, name: cellInfo.column.id, value: e.target.innerHTML }) });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.props.events[cellInfo.index][cellInfo.column.id]
                }}


            />
        );
    }

    render() {
        const imagestyle = {
            width: '25%',
            height: '35%'
        };

        let columns = [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Name",
                accessor: "name",
                Cell: this.renderEditable,

            },
            {
                Header: 'StartDate',
                accessor: "startdate",
                Cell: this.renderEditable
            },
            {
                Header: 'Hours',
                accessor: "hours",
                Cell: this.renderEditable
            }, {
                Header: 'Something',
                accessor: "id",
                Cell: row => (
                    <span>
                        {(this.findId(row.value)) ?
                            <img src={tick} alt="update" style={imagestyle} onClick={this.updateEvent.bind(this, row.value)}></img> : ''}
                        <img src={del} alt="delete" style={imagestyle}></img>
                    </span>
                )
            }
        ]


        return (
            <div>
                <h4>
                    This is Events Page</h4>

                <AddEvents refreshEvents={this.props.refreshEvents} />
                <div className="container" style={{ marginTop: 50 }}>
                    <ReactTable
                        data={this.props.events}
                        columns={columns}
                        keyField='id'
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        );
    }
}

export default Events;