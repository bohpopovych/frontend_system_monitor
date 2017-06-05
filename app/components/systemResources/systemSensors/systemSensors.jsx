import React from 'react'

//Styles
import './systemSensors.scss'

export default class SystemSensors extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let name = this.props.name ? this.props.name : 'Graphic Adapter';

        return (
            <li className="sensors">
                <div className="sensors__load-start">
                    <div className="sensors__load-end" style={{width: this.props.temp * 175 / 100}}> </div>
                </div>
                <div className="sensors__info">
                    <span className="sensors__name">{ name }</span>
                    <span className="sensors__temp"> - {this.props.temp}&#x2103;</span>
                </div>
            </li>
        )
    }
}