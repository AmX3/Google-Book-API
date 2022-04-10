import styles from "./Book.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Book = ({ book, toggleBookmark }) => {
    // When book icon is clicked, change icon to bookmark otherwise stay the same
    const savedBook = book.isSelected ? faBookmark : faBook;
    // changing the color of the icon
    const savedBookStyle = book.isSelected
        ? styles.savedBook__On
        : styles.savedBook__Off;
    // handlebook is going to trigger our togglebookmark with a specific book.
    const handleBook = () => {
        toggleBookmark(book);
    };

    // dealing with missing title, description and authors
    const image = book.volumeInfo.imageLinks.thumbnail
        ? book.volumeInfo.imageLinks.thumbnail
        : "Missing Book Image";
    const title = book.volumeInfo.title ? book.volumeInfo.title : "No Title";
    const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Unknown Author";
    let description = book.volumeInfo.description
        ? book.volumeInfo.description
        : "Invalid description";
    const shortDescription = description.split(" ").splice(0, 25).join(" ");

    return (
        <div className={styles.Book}>
            <div className={styles.Book__Preview}>
                <img
                    className={styles.Book__Image}
                    src={image}
                    alt="bookImage"
                />
                <h3 className={styles.Book__Title}> {title}</h3>
                <p className={styles.Book__Author}>
                    <strong>Author:</strong> {authors}
                </p>
                <div className={styles.Book__DescriptionContainer}>
                    <p className={styles.Book__Description}>
                        <strong>Description: </strong>
                        {`${shortDescription} .....`}
                    </p>
                </div>

                <FontAwesomeIcon
                    className={savedBookStyle}
                    icon={savedBook}
                    onClick={handleBook}
                    size="2x"
                />
                <button className={styles.Book__Details}>More Details</button>
            </div>
        </div>
    );
};

export default Book;
