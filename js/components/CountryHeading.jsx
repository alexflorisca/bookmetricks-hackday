let React = require('react');

class CountryHeading extends React.Component {
    render() {
        return (
            <li className="CountryHeading"><h3>{this.props.heading}</h3></li>
        );
    }
}

module.exports = CountryHeading;