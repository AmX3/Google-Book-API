import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.Navbar__List}>
                <Link to="/" className={styles.Navbar__Links}>
                    Books Dashboard
                </Link>
                <Link to="/savedbooks" className={styles.Navbar__Links}>
                    Saved Books
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
