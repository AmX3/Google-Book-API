import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar__Container}>
                <a
                    className={styles.Navbar__Brand}
                    href="https://amx3.github.io/Personal-Portfolio/"
                    target="_blank">
                    AD
                </a>
                <ul className={styles.Navbar__List}>
                    <Link to="/" className={styles.Navbar__Links}>
                        Books Dashboard
                    </Link>
                    <Link to="/savedbooks" className={styles.Navbar__Links}>
                        Saved Books
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
