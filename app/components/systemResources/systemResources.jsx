import React from 'react'

// Components
import SystemCPU from './systemCPU/systemCPU'
import SystemMemory from './systemMemory/systemMemory'
import SystemDisc from './systemDisc/systemDisc'
import SystemNetwork from './systemNetwork/systemNetwork'
import SystemSensors from './systemSensors/systemSensors'

//Styles
import './systemResources.scss'

export default class SystemResources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let ajax = new XMLHttpRequest(),
            url = 'http://127.0.0.1:5000/api/system/resources';

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
                <h2 className="system__title">System Resources</h2>
                <section>
                    <h3>CPU Resources</h3>
                    <ul>
                        {this.state.data.cpu.map((item) => {
                            return <SystemCPU key={item.id} count={item.id} load={item.load}/>
                        })}
                    </ul>
                </section>
                <section>
                    <h3>Memory Resources</h3>
                    <ul>
                        <SystemMemory memory={this.state.data.memory} />
                        <SystemDisc disk={this.state.data.disk_memory} />
                    </ul>
                </section>
                <section>
                    <h3>Network Resources</h3>
                    <SystemNetwork network={this.state.data.network} />
                </section>
                <section>
                    <h3>Sensors</h3>
                    <ul>
                        {this.state.data.sensors.map((item) => {
                            return <SystemSensors key={item.id} name={item.name} temp={item.temp}/>
                        })}
                    </ul>
                </section>
            </section>
        )
    }
}