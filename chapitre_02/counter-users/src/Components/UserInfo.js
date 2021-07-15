import React from "react";

class UserInfo extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.name} : {this.props.email}, {this.props.website}</p>
            </div>
        )
    }
}


export default UserInfo;