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
                <section>
                    <h3>System Details</h3>
                    <SystemDetails details={this.state.data.sys_info} />
                </section>
                <section>
                    <h3>System Time</h3>
                    <SystemTime time={this.state.data.current_time} />
                </section>
                <section>
                    <h3>System Uptime</h3>
                    <SystemUpTime upTime={this.state.data.up_time} />
                </section>
            </section>
        )
    }
}