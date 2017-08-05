import React from 'react';
import PropTypes from 'prop-types'

const EventItem = (props) => {
    return (
        <li className="list-group-item">
            <h4>{props.item.name}</h4>
            {props.item.place}, {props.item.date}, {props.item.time}
            <a href="/" onClick={props.onItemRemove.bind(this, props.item.id)} className="pull-right">remove</a>
        </li>
    )
}

export default EventItem;

EventItem.propTypes = {
    item: PropTypes.object.isRequired
}