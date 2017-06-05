import React from 'react'

export default class SystemNetwork extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li>
                    <span>Bytes received </span>
                    <span>{(this.props.network.bytes_recv / 1048576).toFixed(1)} MB</span>
                </li>
                <li>
                    <span>Bytes sent </span>
                    <span>{(this.props.network.bytes_sent / 1048576).toFixed(1)} MB</span>
                </li>
                <li>
                    <span>Packets received </span>
                    <span>{(this.props.network.packets_recv / 1048576).toFixed(1)} MB</span>
                </li>
                <li>
                    <span>Packets sent </span>
                    <span>{(this.props.network.packets_sent / 1048576).toFixed(1)} MB</span>
                </li>
            </ul>
        )
    }
}