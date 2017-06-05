import React from 'react'

export default class SystemDetails extends React.Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        return (
            <table>
            <thead>
                <tr>
                    <th>System Name</th>
                    <th>Release</th>
                    <th>Machine</th>
                    <th>Version</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ this.props.details.system }</td>
                    <td>{ this.props.details.release }</td>
                    <td>{ this.props.details.machine }</td>
                    <td>{ this.props.details.version }</td>
                </tr>
            </tbody>
            </table>
        )
    }
}