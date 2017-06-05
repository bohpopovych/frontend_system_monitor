import React from 'react'

export default class SystemCPU extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>
                <div>
                    CPU{ this.props.count }
                </div>
                <div>{ this.props.load }%</div>
            </li>
        )
    }
}