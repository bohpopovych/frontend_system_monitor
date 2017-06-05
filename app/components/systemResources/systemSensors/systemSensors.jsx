import React from 'react'

export default class SystemSensors extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let name = this.props.name ? this.props.name : 'Graphic Adapter';
        return (
            <li>
                <span>{ name } </span>
                <span>{this.props.temp}&#x2103;</span>
            </li>
        )
    }
}