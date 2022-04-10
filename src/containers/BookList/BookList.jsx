import Book from "../../components/Book";
import styles from "./BookList.module.scss";

// We want to dynamically render multiple presentational book components depending on the data set, google api provide we have
// for each book in our books, we are returning an array of a single book

const BookList = ({ books, toggleBookmark }) => {
    return (
        <div className={styles.BookList}>
            <h4 className={styles.BookList__Heading}>
                Currently displayed: {books.length} books
            </h4>
            <div className={styles.BookList__Grid}>
                {books.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            book={book}
                            toggleBookmark={toggleBookmark}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BookList;
