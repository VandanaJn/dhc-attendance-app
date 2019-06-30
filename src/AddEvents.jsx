import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { createEvent } from './graphql/mutations'
import Button from 'react-bootstrap/Button';



class AddEvents extends Component {

    constructor(props) {
        super(props)
        this.state = { id: null, name: '', startdate: '', hours:'' }
        this.handleChange = this.handleChange.bind(this)
        this.addEvent = this.addEvent.bind(this)
        
    }

    async componentDidMount() {
        
        if (this.props.name !== undefined) {
            this.setState({
                id: this.props.id,
                name: this.props.name,
                startdate: this.props.startdate,
                hours:this.props.hours,
                
            })
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    async addEvent(event) {
        event.preventDefault()
        try {
            await API.graphql(
                graphqlOperation(
                    createEvent, {
                        input:
                            { name: this.state.name, startdate: this.state.startdate, hours: this.state.hours }
                    }
                ))
            this.props.refreshEvents()
            this.setState({ id: '', name: '', startdate: '', hours: '' })

        } catch (err) {
            console.log('error: ', err)
        }
    }

    
    render() {
        let formDiv =
                <form>
                    <input type="text" placeholder="Event Name" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" placeholder="Start Date" name="startdate" value={this.state.startdate} onChange={this.handleChange} />
                    <input type="text" placeholder="Hours" name="hours" value={this.state.hours} onChange={this.handleChange} />
                    <Button variant="link" onClick={this.addEvent}>Add Item</Button>
                    <hr/>
                </form>
        

        return (
            <div>
                {formDiv}
            </div>
        )
    }
}

export default AddEvents