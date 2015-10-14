let React =         require('react'),
    MembersList =   require('./MembersList.jsx'),
    SearchBox =     require('./SearchBox.jsx');

class FilterableMembersList extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        };

        this._handleUserInput = this._handleUserInput.bind(this);
    }


    render() {
        return (
            <div>
                <h2>Members List</h2>
                <SearchBox
                    filterText={this.state.filterText}
                    onUserInput={this._handleUserInput} />

                <MembersList
                    countriesWithMembers={this.props.countriesWithMembers}
                    filterText={this.state.filterText} />
            </div>
        );
    }


    _handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }
}

module.exports = FilterableMembersList;

