import React from 'react';

//Components
import SystemInformation from './systemInformation/systemInformation'
import SystemResources from './systemResources/systemResources'

//Styles
import '../styles/main.scss'


export default class App extends React.Component {
    render() {
        return (
            <div className="system-monitor">
                <h1 className="system-monitor__title">System Monitor</h1>
                <SystemResources />
                <SystemInformation />
            </div>
        )
    }
}