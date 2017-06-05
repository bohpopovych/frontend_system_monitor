import React from 'react';

//Components
import Header from './system/header'
import SystemInformation from './systemInformation/systemInformation'
import SystemResources from './systemResources/systemResources'

//Styles
import 'normalize.scss/normalize.scss'
import '../components/system/system.scss'
import './system/pie.scss'


export default class App extends React.Component {
    render() {
        return (
            <div className="system-monitor">
                <Header />
                <SystemResources />
                <SystemInformation />
            </div>
        )
    }
}