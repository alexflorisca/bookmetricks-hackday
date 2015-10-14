let React = require('react');

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
    }

    render() {
        return (
            <input
                type="text"
                onChange={this._handleChange}
                name="filter"
                ref="filterTextInput"
                placeholder="Type the name of a country or institution"
                className="SearchBox"
                value={this.props.filterText} />);
    }


    _handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }
}

module.exports = SearchBox;