let React =         require('react'),
    Institution =   require('./Institution.jsx');

class Country extends React.Component {
    render() {
        let institutions = [];

        this.props.institutions.forEach(function(institution) {
            institutions.push(<Institution institution={institution} key={institution.name} />);
        });

        return (
            <li>
                <h4>{this.props.country}</h4>
                <ol>
                    {institutions}
                </ol>
            </li>
        );
    }
}

module.exports = Country;