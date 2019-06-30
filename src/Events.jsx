import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import AddEvents from './AddEvents';
import { updateEvent } from './graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify';




class Events extends Component {
    constructor(props) {
        super(props)
        console.log('events called')
        console.log(props)
        this.renderEditable = this.renderEditable.bind(this);
        this.updateEvent = this.updateEvent.bind(this)
    }

    
    async updateEvent(id,name,value) {
        
        try {
            await API.graphql(
                graphqlOperation(
                    updateEvent, {
                        input:
                            {id:id, [name]:value}
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
              // const data = [this.props.events];
               //data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;

               console.log(cellInfo.column.id)
               console.log(cellInfo.index)
               console.log(cellInfo.row.id)
               console.log(e.target.innerHTML)

               this.updateEvent(cellInfo.row.id,cellInfo.column.id, e.target.innerHTML)
         }}
         dangerouslySetInnerHTML={{
            __html: this.props.events[cellInfo.index][cellInfo.column.id]
          }}
           
          />
        );
      }

    render() {

        let  columns = [
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
            }
        ]

        return (
            <div>
                <h4>
                    This is Events Page</h4>

                <AddEvents refreshEvents={this.props.refreshEvents}/>
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