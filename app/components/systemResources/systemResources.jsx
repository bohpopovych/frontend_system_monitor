import React from 'react'

// Components
import SystemCPU from './systemCPU/systemCPU'
import SystemMemory from './systemMemory/systemMemory'
import SystemDisc from './systemDisc/systemDisc'
import SystemNetwork from './systemNetwork/systemNetwork'
import SystemSensors from './systemSensors/systemSensors'

//Config
import config from '../../config/config'

export default class SystemResources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let ajax = new XMLHttpRequest(),
            url = `${config.api}/system/resources`;

        ajax.open('GET', url, true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(null);
        ajax.onload = () => {
            const data = JSON.parse(ajax.response);

            this.setState({ data })
        }
    }

    componentWillMount() {
        window.setInterval(() => {
            this.componentDidMount();
        }, 3000)
    }

    render() {
        if(!this.state.data) {
            return null
        }

        return (
            <section className="system">
                <h2 className="system__title">System Resources</h2>
                <section className="system__section">
                    <h3 className="system__subtitle">CPU Resources</h3>
                    <ul className="system__flex">
                        {this.state.data.cpu.map((item) => {
                            return <SystemCPU key={item.id} count={item.id} load={item.load}/>
                        })}
                    </ul>
                </section>
                <section className="system__section">
                    <h3 className="system__subtitle">Memory Resources</h3>
                    <ul className="system__flex">
                        <SystemMemory memory={this.state.data.memory} />
                        <SystemDisc disk={this.state.data.disk_memory} />
                    </ul>
                </section>
                <section className="system__section">
                    <h3 className="system__subtitle">Network Resources</h3>
                    <SystemNetwork network={this.state.data.network} />
                </section>
                <section className="system__section">
                    <h3 className="system__subtitle">Sensors</h3>
                    <ul className="system__flex" >
                        {this.state.data.sensors.map((sensor) => {
                            return <SystemSensors key={sensor.id} name={sensor.name} temp={sensor.temp}/>
                        })}
                    </ul>
                </section>
            </section>
        )
    }
}