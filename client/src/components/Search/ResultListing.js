import React from "react";
import API from "../../utils/API";

class ResultListing extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {
                saved: false,
                delete: false
            }

        this.handleSaveBook = this.handleSaveBook.bind(this);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
    }

    handleSaveBook = (b) => {
        this.setState({ save: true });

        const bookDetails =
        {
            title: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            image: this.props.image,
            description: this.props.description
        }

        b.preventDefault();

        API.saveBook(bookDetails)
            .then(
                (res) => {
                    console.log(res);
                }
            ).catch((err) => {
                console.log(err)
            });
    }

    handleDeleteBook = (b) => {
        this.setState({ deleted: true });

        const bookId = this.props.id;

        b.preventDefault();

        API.deleteBook(bookId)
            .then(
                (res) => {
                    console.log(res);

                }
            ).catch((err) => {
                console.log(err)
            });
    }

    render() {
        return (
            <div className="result-listing mb-2 pl-3 pr-3 pt-2 pb-2">
                <div className="row">
                    <div className="col-md-2 pt-2 pb-2">
                        <img src={this.props.image} alt={this.props.title}></img>
                    </div>
                    <div className="col-md-10">
                        <span className="book-title">{this.props.title}<br /></span>
                        <span className="book-author">
                            {
                                (this.props.authors.length > 1) ? this.props.authors.map((author, index) => <span key={index}>{author} - </span>) : this.props.authors.map((author, index) => <span key={index}>{author}</span>)
                            }
                            <br />
                        </span>
                        <span>{this.props.description}<br /></span>
                        <a className="mt-3 mr-1" href={this.props.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-success">View</button></a>

                        {!(this.props.page === "search") ?
                            null : <button className="btn btn-sm btn-success mt-3 mb-3 ml-1" onClick={this.handleSaveBook}>Save</button>
                        }

                        {!(this.props.page === "books") ?
                            null : <button className="btn btn-sm btn-danger mt-3 mb-3 ml-1" onClick={this.handleDeleteBook}>Delete</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultListing;