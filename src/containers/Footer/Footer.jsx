import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className={styles.Footer}>
            <FontAwesomeIcon
                icon={faLongArrowAltUp}
                className={styles.Footer__ScrollUp}
                onClick={scrollUp}
                size="3x"
            />
        </div>
    );
};

export default Footer;
