import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import PropTypes from 'prop-types'

class Events extends React.Component {

    // static propTypes = {
    //     events: PropTypes.array.isRequired
    // }

    render() {
        let events = this.props.events;
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Nadchodzące wydarzenia:</h2>
                        <ul className="list-group">
                            {events.map(event => {
                                const date = new Date(event.date);
                                if (date >= Date.now()) {
                                    return (
                                        <li className="list-group-item" key={event.id}>
                                            <h4>{event.name}</h4>
                                            {event.place}, {event.date}, {event.time}
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h2>Minione wydarzenia:</h2>
                        <ul className="list-group">
                            {events.map(event => {
                                const date = new Date(event.date);
                                if (date < Date.now()) {
                                    return (
                                        <li className="list-group-item" key={event.id}>
                                            <h4>{event.name}</h4>
                                            {event.place}, {event.date}, {event.time}
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }

}

Events.propTypes = {
    events: PropTypes.array.isRequired
}

export default Events;