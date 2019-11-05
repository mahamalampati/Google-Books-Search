import React from "react";
import ResultListing from "./ResultListing"

export function Results(props) {
    return (
        <div className="search-results-listings">
            {
                !(props.page === "search") ?

                    props.bookData.map((book) => {
                        const bookDetails = book;

                        console.log("Saved: " + bookDetails)

                        return (
                            <ResultListing
                                title={bookDetails.title}
                                authors={bookDetails.authors}
                                description={bookDetails.description}
                                link={bookDetails.canonicalVolumeLink}
                                image={bookDetails.image}
                                key={bookDetails._id}
                                id={bookDetails._id}
                                page={props.page}
                            />
                        )
                    }
                    )
                    :
                    props.bookData.map((book) => {
                        const bookDetails = book.volumeInfo;

                        console.log("Searched: " + bookDetails)
                        return (
                            <ResultListing
                                title={bookDetails.title}
                                authors={bookDetails.authors}
                                description={bookDetails.description}
                                link={bookDetails.canonicalVolumeLink}
                                image={bookDetails.imageLinks.smallThumbnail}
                                key={book.id}
                                id={book.id}
                                page={props.page}
                            />
                        )
                    })
            }
        </div>
    );
}

export default Results;
