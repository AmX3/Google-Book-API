import styles from "./App.module.scss";
import React, { useEffect, useState } from "react";
import Navbar from "./containers/Navbar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";
import BookList from "./containers/BookList/BookList";
import SavedBook from "./containers/SavedBook/SavedBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";

const App = () => {
    //every single bookitem in our array, plus a function that updates every single book => search state variable
    const [searchBookItem, setSearchBookItem] = useState("");
    // books state variable
    const [books, setBook] = useState([]);
    // Change the value of searchTerm to the Google Book API Base URL + searchTerm entered into the input field by the user so it can be used to collect book data
    const getBook = async (newSearchBook) => {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        const response = await fetch(
            `${BASE_URL}${newSearchBook}${"&maxResults=40"}`
        );
        const bookdata = await response.json();
        setBook(bookdata.items);
    };
    // map through each book, and if the bookid is not equal to the selected book, we return the current book or added to saved books (destructure our object, and add a new key)
    const toggleBookmark = (selectedBook) => {
        setBook(
            books.map((book) => {
                return book.id !== selectedBook.id
                    ? book
                    : { ...book, isSelected: !book.isSelected };
            })
        );
    };

    const handleSubmit = (search) => {
        setSearchBookItem(search);
    };

    useEffect(() => {
        if (searchBookItem !== "" || undefined) {
            getBook(searchBookItem);
        }
    }, [searchBookItem]);
    console.log(books);

    return (
        <div className={styles.App}>
            <BrowserRouter>
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
