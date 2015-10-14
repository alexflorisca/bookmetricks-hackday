let React = require('react'),
    MembersList = require('./MembersList.jsx'),
    SearchBox = require('./SearchBox.jsx');

class FilterableMembersList extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }


    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }


    render() {
        return (
            <div>
                <h2>Members List</h2>
                <SearchBox
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput} />

                <MembersList
                    countriesWithMembers={this.props.countriesWithMembers}
                    filterText={this.state.filterText} />
            </div>
        );
    }
}

module.exports = FilterableMembersList;

