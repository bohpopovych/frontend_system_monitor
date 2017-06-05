import React from 'react'

//Styles
import './systemNetwork.scss'

export default class SystemNetwork extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="system__flex">
                <div className="system__flex system__flex--center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 471.2 471.2">
                        <path fill="#FF991E" d="M457.7 230.15c-7.5 0-13.5 6-13.5 13.5v122.8c0 33.4-27.2 60.5-60.5 60.5H87.5c-33.4 0-60.5-27.2-60.5-60.5v-124.8c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v124.8c0 48.3 39.3 87.5 87.5 87.5h296.2c48.3 0 87.5-39.3 87.5-87.5v-122.8c0-7.4-6-13.5-13.5-13.5z"/>
                        <path fill="#FF991E" d="M226.1 346.75c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.8-85.8c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-62.7 62.8V30.75c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v273.9l-62.8-62.8c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l85.9 85.8z"/>
                    </svg>
                    <div className="network-data">
                        <div>
                            <span className="network-data__name">Bytes received - </span>
                            <span>{(this.props.network.bytes_recv / 1048576).toFixed(1)} MB</span>
                        </div>
                        <div>
                            <span className="network-data__name">Packets received - </span>
                            <span>{(this.props.network.packets_recv / 1048576).toFixed(1)} MB</span>
                        </div>
                    </div>
                </div>
                <div className="system__flex system__flex--center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 471.2 471.2">
                        <path fill="#FF991E" d="M457.7 230.15c-7.5 0-13.5 6-13.5 13.5v122.8c0 33.4-27.2 60.5-60.5 60.5H87.5c-33.4 0-60.5-27.2-60.5-60.5v-124.8c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v124.8c0 48.3 39.3 87.5 87.5 87.5h296.2c48.3 0 87.5-39.3 87.5-87.5v-122.8c0-7.4-6-13.5-13.5-13.5z"/>
                        <path fill="#FF991E" d="M159.3 126.15l62.8-62.8v273.9c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V63.35l62.8 62.8c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.8-85.8c-2.5-2.5-6-4-9.5-4-3.6 0-7 1.4-9.5 4l-85.8 85.8a13.46 13.46 0 1 0 19 19.1z"/>
                    </svg>
                    <div className="network-data">
                        <div>
                            <span className="network-data__name">Bytes sent - </span>
                            <span>{(this.props.network.bytes_sent / 1048576).toFixed(1)} MB</span>
                        </div>
                        <div>
                            <span className="network-data__name">Packets sent - </span>
                            <span>{(this.props.network.packets_sent / 1048576).toFixed(1)} MB</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}