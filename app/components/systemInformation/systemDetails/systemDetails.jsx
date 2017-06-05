import React from 'react'

//Styles
import './systemDetails.scss'

export default class SystemDetails extends React.Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        return (
            <table className="info">
            <thead>
                <tr className="info_tr">
                    <th className="info_th">System Name</th>
                    <th className="info_th">Release</th>
                    <th className="info_th">Machine</th>
                    <th className="info_th">Version</th>
                </tr>
            </thead>
            <tbody>
                <tr className="info_tr">
                    <td className="info_td">{ this.props.details.system }</td>
                    <td className="info_td">{ this.props.details.release }</td>
                    <td className="info_td">{ this.props.details.machine }</td>
                    <td className="info_td">{ this.props.details.version }</td>
                </tr>
            </tbody>
            </table>
        )
    }
}