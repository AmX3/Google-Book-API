import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <p>
                Built by:{" "}
                <a
                    className={styles.Footer__Link}
                    href="https://amx3.github.io/Personal-Portfolio/"
                    target="_blank">
                    Amelia
                </a>
            </p>
        </div>
    );
};

export default Footer;
