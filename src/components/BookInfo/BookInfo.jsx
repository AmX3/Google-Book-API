import styles from "./BookInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const BookInfo = ({ toggleBookmark, books }) => {
    const { bookId } = useParams();
    // Assigning the Params Object to the params variable
    // accessing charId > params.charId
    let params = useParams();

    console.log(bookId, params.bookId);

    const [book, setBook] = useState([]);

    useEffect(() => {
        setBook(books.find((book) => book.id == params.bookId));
    }, [books]);
    useEffect(() => {
        console.log(setBook());
    });

    let navigate = useNavigate();
    return book ? (
        <div className={styles.Book}>
            <div className={styles.Book__Preview}>
                {/* <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="bookImage"
                /> */}
                {/* <h3 className={styles.Book__Title}> {book.volumeInfo.title}</h3> */}
                {/* <p className={styles.Book__Author}>
                    {" "}
                    Author: {book.volumeInfo.authors}
                </p>
                <div className={styles.Book__DescriptionContainer}>
                    <p className={styles.Book__Description}>
                        Description: {book.volumeInfo.description}
                    </p> */}
                {/* </div> */}
            </div>
            <div>
                {/* <FontAwesomeIcon
                    className={savedBookStyle}
                    icon={savedBook}
                    onClick={handleBook}
                    size="2x"
                /> */}
            </div>

            <button>MoreDetails</button>
        </div>
    ) : (
        navigate("/booklist")
    );
};

export default BookInfo;
