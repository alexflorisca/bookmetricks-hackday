let React = require("react");

class Institution extends React.Component {
    render() {
        return(
            <li className="Institution">{this.props.institution.name}</li>
        );
    }
}

module.exports = Institution;