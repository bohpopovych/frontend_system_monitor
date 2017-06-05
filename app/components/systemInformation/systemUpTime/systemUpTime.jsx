import React from 'react'

export default class SystemUpTime extends React.Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        let time = new Date(this.props.upTime * 1000);

        return (
            <span>{ time.toTimeString() }</span>
        )
    }
}