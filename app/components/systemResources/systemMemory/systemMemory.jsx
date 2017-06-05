import React from 'react'

export default class SystemMemory extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>
                <div>
                    Memory, free - {(this.props.memory.free / 1070000000).toFixed(1)} GB
                </div>
                <div>{(this.props.memory.used / 1070000000).toFixed(1)} GB ({this.props.memory.percent}%) of {(this.props.memory.total / 1070000000).toFixed(1)} GB</div>
            </li>
        )
    }
}