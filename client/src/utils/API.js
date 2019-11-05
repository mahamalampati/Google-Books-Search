import axios from "axios";

export default {


    bookSearch:(bookTitle)=>{return axios.get("/api/book_search/" + bookTitle)},
    saveBook:(bookDetails)=>{return axios.get("/api/save_book", bookDetails)},
    getBooks: ()=> {return axios.get("/api/get_books")},
    deleteBook:(bookId) => {return axios.post("/api/delete_book/"+bookId)}


}