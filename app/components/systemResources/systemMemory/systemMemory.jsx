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
                <div className="pieContainer">
                    <div className="pieBackground"> </div>
                    <div id="pieSlice1" className="hold" style={{transform: `rotate(${deg}deg)`, backgroundColor: background }}> </div>
                </div>
                <div className="memory memory--margin">
                    Memory, free - {((this.props.memory.free + this.props.memory.cached) / 1070000000).toFixed(1)} GB
                </div>
                <div className="memory">{(this.props.memory.used / 1070000000).toFixed(1)} GB of {(this.props.memory.total / 1070000000).toFixed(1)} GB</div>
            </li>
        )
    }
}