import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import EventsList from './EventsList'
import events from './data/events'

class Events extends React.Component {

    render() {
        const futureEvents = events.filter(item => {
            const date = new Date(item.date);
            if (date >= Date.now()) {
                return item;
            }
        });
        const pastEvents = events.filter(item => {
            const date = new Date(item.date);
            if (date < Date.now()) {
                return item;
            }
        });
        return (
            <Container>
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