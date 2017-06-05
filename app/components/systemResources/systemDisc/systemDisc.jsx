import React from 'react'

export default class SystemDisc extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <div>
                    Disc, free - {(this.props.disk.free / 1070000000).toFixed(1)} GB
                </div>
                <div>{(this.props.disk.used / 1070000000).toFixed(1)} GB ({this.props.disk.percent}%) of {(this.props.disk.total / 1070000000).toFixed(1)} GB</div>
            </li>
        )
    }
}