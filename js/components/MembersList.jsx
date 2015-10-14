let React = require('react'),
    CountryHeading = require('./CountryHeading.jsx'),
    Country = require('./Country.jsx');

class MembersList extends React.Component {
    render() {
        let countries = [];
        let lastCountryLetter = null;

        this.props.countriesWithMembers.forEach(function(country) {
            // Search by country
            if(country.country.indexOf(this.props.filterText) === -1) return;

            if(country.country.substr(0,1) !== lastCountryLetter) {
                countries.push(<CountryHeading heading={country.country.substr(0,1)} key={country.country.substr(0,1)} />);
            }
            countries.push(<Country country={country.country} institutions={country.institutions} key={country.country} />);
            lastCountryLetter = country.country.substr(0,1);
        }.bind(this));

        return (
            <ol>
                {countries}
            </ol>
        );
    }
}

module.exports = MembersList;