import React from 'react'

//Components
import SystemDetails from './systemDetails/systemDetails'
import SystemTime from './systemTime/systemTime'
import SystemUpTime from './systemUpTime/systemUpTime'

// Styles
import './systemInformation.scss'

export default class SystemInformation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let ajax = new XMLHttpRequest(),
            url = 'http://127.0.0.1:5000/api/system/information';

        ajax.open('GET', url, true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(null);
        ajax.onload = () => {
            const data = JSON.parse(ajax.response);

            this.setState({ data })
        }
    }

    render() {
        if(!this.state.data) {
            return null
        }

        return (
            <section className="system">
                <h2 className="system__title">System Information</h2>
                <section className="system__section">
                    <h3 className="system__subtitle">System Details</h3>
                    <SystemDetails details={this.state.data.sys_info} />
                </section>
                <div className="system__flex system__flex--between">
                    <section className="system__section system__time system__time--right">
                        <h3 className="system__subtitle">System Time</h3>
                        <SystemTime time={this.state.data.current_time} />
                    </section>
                    <section className="system__section system__time system__time--left">
                        <h3 className="system__subtitle">System Uptime</h3>
                        <SystemUpTime upTime={this.state.data.up_time} />
                    </section>
                </div>
            </section>
        )
    }
}