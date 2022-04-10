import React from "react";
import styles from "./SavedBook.module.scss";
import { useState, useEffect } from "react";
import BookList from "../BookList";

const SavedBook = ({ books }) => {
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
            <BookList books={savedBook} toggleBookmark />
        </div>
    );
};

export default SavedBook;
