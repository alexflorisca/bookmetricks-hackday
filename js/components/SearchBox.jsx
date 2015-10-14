let React = require('react');

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }

    render() {
        return (
            <input
                type="text"
                onChange={this.handleChange}
                name="filter"
                ref="filterTextInput"
                placeholder="Type the name of a country or institution"
                className="SearchBox"
                value={this.props.filterText} />);
    }
}

module.exports = SearchBox;