import react, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: "" };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleInput(event) {
    // console.log(event.target.value);
    this.setState({ query: event.target.value });
  }
  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input
          type="search"
          onChange={this._handleInput}
          required
          placeholder="butterfly"
        />
        <input type="submit" value={`search for ${this.state.query}`} />
      </form>
    );
  }
}
export default SearchForm;
