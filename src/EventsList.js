import React from 'react';
import PropTypes from 'prop-types'
import EventItem from './EventItem'

class EventsList extends React.Component {

    static propTypes = {
        events: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            events: this.props.events
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState((prevState, props) => {
                return {
                    events: nextProps.events
                }
            });
        }
    }

    clearListOnClick = (event) => {
        event.preventDefault();
        this.setState((prevState, props) => {
            return {
                events: []
            }
        });
    }

    removeElement(id, event) {
        event.preventDefault();
        let updatedEvents = this.state.events.filter(event => {
            return event.id !== id;
        });
        this.setState((prevState, props) => {
            return {
                events: updatedEvents
            }
        });
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.events.map(item => {
                        return (
                            <EventItem key={item.id} item={item} onItemRemove={this.removeElement.bind(this)} />
                        )
                    })}
                </ul>
                <a className="btn btn-default" href="/" onClick={this.clearListOnClick}>Clear list</a>
            </div>
        )
    }

}

export default EventsList;