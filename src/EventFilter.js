import React from 'react';
import PropTypes from 'prop-types'

const EventFilter = (props) => {
    return (
        <form>
            <input value={props.filter} onChange={props.onFilterChange} type="text" className="form-control" />
        </form>
    )
}

export default EventFilter;

EventFilter.PropTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}