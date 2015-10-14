let React =             require('react'),
    CountryHeading =    require('./CountryHeading.jsx'),
    Country =           require('./Country.jsx');

class MembersList extends React.Component {
    constructor() {
        super();

        this._filter = this._filter.bind(this);
        this._filterMatchesCountry = this._filterMatchesCountry.bind(this);
        this._filterInstitutions = this._filterInstitutions.bind(this);
    }


    render() {
        let countries = this._filter();

        return (
            <ol>
                {countries}
            </ol>
        );
    }


    _filterInstitutions(country) {
        let matchedInstitutions = [];

        country.institutions.forEach(function(institution) {
            if(institution.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) return;
            matchedInstitutions.push(institution);
        }.bind(this));

        return matchedInstitutions;
    }


    _filterMatchesCountry(country) {
        return (country.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1);
    }


    _filter() {
        let countries = [];
        let lastCountryLetter = null;

        this.props.countriesWithMembers.forEach(function(country) {
            // Check if we matched any institutions
            let filteredInstitutions =  this._filterInstitutions(country);

            // Filter doesn't match any countries or institutions, return
            if(!this._filterMatchesCountry(country.country) && filteredInstitutions.length === 0) return;

            // Add CountryHeader if necessary
            if(country.country.substr(0,1) !== lastCountryLetter) {
                countries.push(<CountryHeading heading={country.country.substr(0,1)} key={country.country.substr(0,1)} />);
            }

            // Add Country
            countries.push(<Country
                                country={country.country}
                                institutions={filteredInstitutions}
                                key={country.country} />);

            lastCountryLetter = country.country.substr(0,1);
        }.bind(this));

        return countries;
    }
}

module.exports = MembersList;