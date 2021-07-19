import React from "react";

class Box extends React.Component {
    
    render() {

        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ color: this.props.color, fontSize: 100}}>
                    {this.props.icon}
                </span>
                <p>{Math.round(this.props.value * 1000) / 1000}{this.props.unit}</p>
                <div>
                    {
                        this.props.icon !== "local_drink" ? <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}></input> : null
                    }
                </div>
                
            </div>
        )
    }
}

export default Box;