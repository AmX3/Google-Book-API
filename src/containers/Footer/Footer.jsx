import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__Circle}>
                <FontAwesomeIcon
                    icon={faArrowUp}
                    className={styles.Footer__ScrollUp}
                    onClick={scrollUp}
                    size="2x"
                />
            </div>
        </div>
    );
};

export default Footer;
