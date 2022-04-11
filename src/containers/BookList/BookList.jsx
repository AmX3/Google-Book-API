import Book from "../../components/Book";
import Footer from "../Footer";
import styles from "./BookList.module.scss";

// Rendering multiple presentational book components in booklist
// For each book in our books, we are returning an array of a single book

const BookList = ({ books, toggleBookmark }) => {
    return (
        <div className={styles.BookList}>
            <h4 className={styles.BookList__Heading}>
                <strong>Currently displayed: </strong>
                {books.length} books
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
            <Footer />
        </div>
    );
};

export default BookList;
