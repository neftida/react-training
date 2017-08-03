import React from 'react';
import PropTypes from 'prop-types'


class EventsList extends React.Component {

    static propTypes = {
        events: PropTypes.array.isRequired
    }

    render() {
        let events = this.props.events;
        return (
            <ul className="list-group">
                {events.map(event => {
                    if (event) {
                        return (
                            <li className="list-group-item" key={event.id}>
                                <h4>{event.name}</h4>
                                {event.place}, {event.date}, {event.time}
                            </li>
                        )
                    }
                })}
            </ul>
        )
    }

}

export default EventsList;