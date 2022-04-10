import styles from "./Book.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faBook, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "react-modal";

const Book = ({ book, toggleBookmark }) => {
    // When book icon is clicked, change icon to bookmark otherwise stay the same
    const savedBook = book.isSelected ? faBookmark : faBook;
    //    https://www.npmjs.com/package/react-modal#installation
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // changing the color of the icon
    const savedBookStyle = book.isSelected
        ? styles.savedBook__On
        : styles.savedBook__Off;
    // const bookmark = {
    //     color: savedBookStyle,
    //     position: "bookmark",
    // };
    // const classes = isRed
    //     ? [styles.Card, styles.Card__border_red]
    //     : [styles.Card];
    // handlebook is going to trigger our togglebookmark with a specific book.
    const handleBook = () => {
        toggleBookmark(book);
    };

    // dealing with missing title, description and authors
    const image =
        book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            ? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            : require("./../../images/cover.png");
    const title = book.volumeInfo.title ? book.volumeInfo.title : "No Title";
    const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Unknown Author";
    let description = book.volumeInfo.description
        ? book.volumeInfo.description
        : "No description";
    const shortDescription = description.split(" ").splice(0, 20).join(" ");
    const pageCount = book.volumeInfo.pageCount
        ? book.volumeInfo.pageCount
        : "";
    const categories = book.volumeInfo.categories
        ? book.volumeInfo.categories
        : "";
    const link = book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "";
    const language = book.volumeInfo.language ? book.volumeInfo.language : "";
    const publisher = book.volumeInfo.publisher
        ? book.volumeInfo.publisher
        : "";
    const publishedDate = book.volumeInfo.publishedDate
        ? book.volumeInfo.publishedDate
        : "";
    const avgRating = book.volumeInfo.averageRating
        ? book.volumeInfo.averageRating
        : "None";
    const ratingCount = book.volumeInfo.ratingCount
        ? book.volumeInfo.ratingCount
        : "None";

    if (!image || !shortDescription) {
        return;
    }

    return (
        <div className={styles.Book}>
            <FontAwesomeIcon
                className={savedBookStyle}
                icon={savedBook}
                onClick={handleBook}
                size="2x"
            />
            <img className={styles.Book__Image} src={image} alt="bookImage" />
            <h3 className={styles.Book__Title}> {title}</h3>
            <p className={styles.Book__Author}>
                <strong>Author/s:</strong> {authors}
            </p>
            <p className={styles.Book__Description}>
                <strong>Description: </strong>
                {`${shortDescription} .....`}
            </p>
            <div className={styles.Book__Info}>
                <button className={styles.Book__Details} onClick={handleShow}>
                    More Details
                </button>
            </div>
            <Modal
                isOpen={show}
                onClose={handleClose}
                ariaHideApp={false}
                className={styles.BookModal}>
                <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    onClick={handleClose}
                    className={styles.BookModal__Close}
                />
                <div className={styles.BookModal__Container}>
                    <img
                        className={styles.BookModal__Image}
                        src={image}
                        alt="bookImage"
                    />
                    <div className={styles.BookModal__Info}>
                        <h2 className={styles.BookModal__Heading}>{title}</h2>
                        <table>
                            <tr>
                                <td>
                                    <strong>Author/s: </strong>
                                    {authors}
                                </td>
                                <td>
                                    <strong>Average Rating: </strong>
                                    {avgRating}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Genres: </strong>
                                    {categories}
                                </td>
                                <td>
                                    <strong>Rating Count: </strong>
                                    {ratingCount}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Publisher: </strong>
                                    {publisher}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Published Date: </strong>
                                    {publishedDate}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Pages: </strong>
                                    {pageCount}
                                </td>{" "}
                            </tr>
                            <tr>
                                <td>
                                    <strong>Language: </strong>
                                    {language}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Info Link:
                                        <a href={link} target={"_blank"}>
                                            {link}
                                        </a>
                                    </strong>
                                </td>
                            </tr>
                        </table>
                        <p className={styles.BookModal__Desc}>
                            <strong>Description: </strong>
                            {description}
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Book;
