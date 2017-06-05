import React from 'react'

//Styles
import './systemDisc.scss'

export default class SystemDisc extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let deg = this.props.disk.percent * 360 / 100,
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
                    Disc, free - {(this.props.disk.free / 1070000000).toFixed(1)} GB
                </div>
                <div className="memory">{(this.props.disk.used / 1070000000).toFixed(1)} GB of {(this.props.disk.total / 1070000000).toFixed(1)} GB</div>
            </li>
        )
    }
}