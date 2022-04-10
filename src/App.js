import React, { useEffect, useState } from "react";
import Navbar from "./containers/Navbar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";
import BookList from "./containers/BookList/BookList";
import SavedBook from "./containers/SavedBook/SavedBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

const App = () => {
    //every single bookitem in our array, plus a function that updates every single book => search state variable
    const [searchBookItem, setSearchBookItem] = useState("");
    // books state variable
    const [books, setBook] = useState([]);
    // Change the value of searchTerm to the Google Book API Base URL + searchTerm entered into the input field by the user so it can be used to collect book data
    const handleSubmitSearch = async (newSearchBook) => {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        setSearchBookItem(`${BASE_URL}${newSearchBook}${"&maxResults=40"}`);
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

    useEffect(() => {
        if (searchBookItem !== "") {
            const getBook = async () => {
                const response = await fetch(searchBookItem);
                const bookdata = await response.json();
                setBook(bookdata.items);
            };
            getBook();
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
                                <Searchbar onSubmit={handleSubmitSearch} />
                                <BookList
                                    books={books}
                                    toggleBookmark={toggleBookmark}
                                />
                            </>
                        }></Route>
                    <Route
                        path="/savedbooks"
                        element={<SavedBook books={books} />}></Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
