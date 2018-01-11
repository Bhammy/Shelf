import React from 'react';
import SearchResultLink from './search_result_link';

class BookSearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.state = { search: "", searchResults: [] };
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
    if (this.state.search !== "") {
      window.setTimeout(this.searchResults, 200);
    }
  }

  buildResults(searchResults) {
    let results = Object.values(searchResults).map( (book, idx) => {
        return <SearchResultLink book={ book } key={ `book-result-${book.id}` } />;
      });
    this.setState({ searchResults: results });
  }

  searchResults() {
    if (this.state.search !== "") {
      this.props.searchBooks({ search: this.state.search }).then( (results) => {
        this.buildResults(results);
        $("#book-search-results").removeClass("hidden-results");
      });
    } else {
      $("#book-search-results").addClass("hidden-results");
      this.setState({searchResults: []});
    }
  }

  render() {
    return(
      <div id="book-search-container">
        <input type="text" id="book-search-bar" placeholder="Search Title or Author" onChange={ this.handleSearch } />
        <ul id="book-search-results" className="hidden-results">
          { this.state.searchResults }
        </ul>
      </div>
    );
  }
}

export default BookSearchBar;
