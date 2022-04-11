import styles from "./App.module.scss";
import React, { useEffect, useState } from "react";
import Navbar from "./containers/Navbar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";
import BookList from "./containers/BookList/BookList";
import SavedBook from "./containers/SavedBook/SavedBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    //    STATE VARIABLES - tracking of search input and book
    const [searchBookItem, setSearchBookItem] = useState("");
    const [books, setBook] = useState([]);

    // Set searchTerm to the Google Book API Base URL + the searchTerm given by the user in the input form so that it may be utilised to collect data from server. This is returned in json format and we only want items from bookdata.
    const getBook = async (newSearchBook) => {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        const response = await fetch(
            `${BASE_URL}${newSearchBook}${"&maxResults=40"}`
        );
        const bookdata = await response.json();
        setBook(bookdata.items);
    };

    // Map through each book, and if the bookid is not equal to the selected book, we return the current book or it is added to saved books (destructuring of book object, and adding a new key that returns a value of true/false if selected)
    const toggleBookmark = (selectedBook) => {
        setBook(
            books.map((book) => {
                return book.id !== selectedBook.id
                    ? book
                    : { ...book, isSelected: !book.isSelected };
            })
        );
    };

    // Updates search everytime a user types
    const handleSubmit = (search) => {
        setSearchBookItem(search);
    };

    // On app mount, when watching for any changes in our searchterm, if searchterm is not an empty string or is undefined, we fetch book data
    useEffect(() => {
        if (searchBookItem !== "" || undefined) {
            getBook(searchBookItem);
        }
    }, [searchBookItem]);
    console.log(books);

    return (
        <div className={styles.App}>
            <BrowserRouter basename="/Google-Book-API">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Searchbar
                                    onSubmit={handleSubmit}
                                    setSearch={setSearchBookItem}
                                />
                                <BookList
                                    books={books}
                                    toggleBookmark={toggleBookmark}
                                />
                            </>
                        }></Route>
                    <Route
                        path="/savedbooks"
                        element={<SavedBook books={books} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
