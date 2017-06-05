import React from 'react'

//Style
import './systemCPU.scss'

export default class SystemCPU extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li className="cpu">
                <div className="cpu__name">
                    CPU{ this.props.count }
                </div>
                <div className="cpu__percent">{ this.props.load }%</div>
            </li>
        )
    }
}