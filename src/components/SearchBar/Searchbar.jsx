import { useState } from "react";
import styles from "./Searchbar.module.scss";
import Google from "./../../images/googlelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ onSubmit, setSearch }) => {
    // Tracking changes in searchbar
    const [searchValue, setSearchValue] = useState("");
    // function that update the state of the value using the state searchValue variable
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setSearchValue(e.target.value);
    };

    const handleResult = () => {
        onSubmit(searchValue);
    };

    return (
        <form className={styles.Searchbar}>
            <img src={Google} alt="googleLogo" className={styles.Home__Image} />
            <label className={styles.Searchbar__Label} htmlFor="searchInput">
                Search for a Book:
            </label>

            <div className={styles.Searchbar__Container}>
                <input
                    className={styles.Searchbar__Input}
                    id="searchInput"
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}></input>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.Searchbar__Icon}
                    onClick={handleResult}
                    size="lg"
                />
            </div>
        </form>
    );
};

export default Searchbar;
