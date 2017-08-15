import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import EventsList from './EventsList'
import events from './data/events'
import EventFilter from './EventFilter'

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events,
            filter: ''
        };
    }

    onFilterChange(event) {
        const value = event.target.value;
        console.log(value);
        this.setState((prevState, props) => {
            return {
                filter: value
            }
        });
    }

    render() {
        const pastEvents = this.state.events.filter(item => {
            const date = new Date(item.date);
            if (date < Date.now() && item.name.indexOf(this.state.filter) > -1) {
                return item;
            }
        });
        const futureEvents = this.state.events.filter(item => {
            const date = new Date(item.date);
            if (date >= Date.now() && item.name.indexOf(this.state.filter) > -1) {
                return item;
            }
        });
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <EventFilter filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)} />
                        {this.state.filter}
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2>Nadchodzące wydarzenia:</h2>
                            <EventsList events={futureEvents} />
                    </Col>
                    <Col md={6}>
                        <h2>Minione wydarzenia:</h2>
                        <EventsList events={pastEvents} />
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Events;