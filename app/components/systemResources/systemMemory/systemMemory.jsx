import React from 'react'

export default class SystemMemory extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let deg = this.props.memory.percent * 360 / 100,
            background;

        if(deg > 180) {
            background = '#FF991E';
            deg = deg - 180;
        } else {
            background = '#3A3610';
        }

        return (
            <li>
                <div className="pie">
                    <div className="pie__background"> </div>
                    <div className="pie__sub-background" style={{transform: `rotate(${deg}deg)`, backgroundColor: background }}> </div>
                    <span className="pie__percent">{this.props.memory.percent}%</span>
                </div>
                <div className="memory memory--margin">
                    Memory, free - {((this.props.memory.free + this.props.memory.cached) / 1070000000).toFixed(1)} GB
                </div>
                <div className="memory">{(this.props.memory.used / 1070000000).toFixed(1)} GB of {(this.props.memory.total / 1070000000).toFixed(1)} GB</div>
            </li>
        )
    }
}