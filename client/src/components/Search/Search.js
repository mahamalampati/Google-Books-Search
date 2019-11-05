 
import React from "react";
import { Results } from "./Results";
import API from "../../utils/API";

// Creates Search component for heading and links to pages
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                bookTitle: "",
                bookData: [],
                page: "search"
            }
        this.searchTitleChange = this.searchTitleChange.bind(this);
        this.searchButtonClick = this.searchButtonClick.bind(this);
    }

    componentDidMount() {
        console.log(this.state.page);
    }

    searchTitleChange(c) {
        c.preventDefault();
        this.setState({ bookTitle: c.target.value });
    }

    searchButtonClick(s) {
        s.preventDefault();

        API.bookSearch(this.state.bookTitle)
            .then((data) => {
                this.setState({ bookData: data.data });
                this.setState({ bookTitle: "" });
                console.log(this.state.bookData);
            })
    }

    render() {
        return (
            <div className="main-content-rail">
                <div className="container book-search pl-3 pt-3 pr-3 pb-3">
                    <h5>Book Search</h5>
                    <form>
                        <div className="form-group">
                            <label>Book Title</label>
                            <input type="text" className="form-control" id="input-text-book-title" aria-describedby="bookTitleSearch" placeholder="Enter Book Title" onChange={(c) => this.searchTitleChange(c)}></input>
                            <small id="bookTitleSearchHelp" className="form-text">Enter a book title and click the search button to see what's out there!</small>
                        </div>
                        <button type="submit" className="btn btn-sm btn-success" onClick={(s) => this.searchButtonClick(s)}>Search</button>
                    </form>
                </div>
                <div className="container book-search-results pl-3 pt-3 pr-3 pb-3 mt-3">
                    <h5>Search Results</h5>
                    {(this.state.bookData.length > 0) ?
                        <Results
                            bookData={this.state.bookData}
                            page={this.state.page}
                        /> : "No Search Results"
                    }
                </div>
            </div>
        );
    }
}
export { Search };