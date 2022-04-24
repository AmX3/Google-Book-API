import React from "react";
import { useState, useEffect } from "react";
import BookList from "../BookList";

const SavedBook = ({ books, toggleBookmark }) => {
    // returning selected books
    const [savedBook, setSavedBook] = useState(
        books.filter((book) => book.isSelected)
    );

    // watching for any change in books and when selected, filter them into a new array and display
    useEffect(() => {
        setSavedBook(books.filter((book) => book.isSelected));
    });
    return (
        <div>
            <BookList books={savedBook} toggleBookmark={toggleBookmark} />
        </div>
    );
};

export default SavedBook;
