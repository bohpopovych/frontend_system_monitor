import React from 'react'

export default class SystemTime extends React.Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        let time = new Date(this.props.time * 1000);

        return (
            <span className="date">{`${time.toDateString()} - ${time.getHours()}:${time.getMinutes()}`}</span>
        )
    }
}