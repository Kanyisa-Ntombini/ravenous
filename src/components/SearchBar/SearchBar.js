import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import filterYelpData from '../../yelp_api/yelp_api';
import BusinessList from '../BusinessList/BusinessList';

function FilterInputs() {
  function filterFunction(event) {
    sessionStorage.setItem('FilterChoice', event.target.id);
  }

  return (
    <section className={styles.FilterSection}>
      <div className={styles.Filter}>
        <p
          className={styles.FilterOptions}
          id="bestMatch"
          onClick={filterFunction}
        >
          Best Match
        </p>
        <p
          className={styles.FilterOptions}
          id="highestRated"
          onClick={filterFunction}
        >
          Highest Rated
        </p>
        <p
          className={styles.FilterOptions}
          id="mostReviewed"
          onClick={filterFunction}
        >
          Most Reviewed
        </p>
      </div>
      <hr />
    </section>
  );
}

function SearchInputs() {
  return (
    <div className={styles.Inputs}>
      <input id="searchBusinessTerm" placeholder="Search Businesses" />
      <input id="searchBusinessArea" placeholder="Where?" />
    </div>
  );
}

function LetsGoButton() {
  const [arrOfBusinesses, setArrOfBusinesses] = useState([]);
  const handleClick = () => {
    const searchBusinessTerm =
      document.getElementById('searchBusinessTerm') || '';
    const searchBusinessArea =
      document.getElementById('searchBusinessArea') || '';
    const radius = 1000;
    const sortBy = sessionStorage.getItem('FilterChoice') || '';

    const filteredYelpData = filterYelpData(
      searchBusinessArea.value,
      searchBusinessTerm.value,
      radius,
      sortBy
    );
    setArrOfBusinesses(filteredYelpData);
  };

  return (
    <div>
      <button onClick={handleClick}>Let's go</button>
      {arrOfBusinesses.length > 0 && (
        <BusinessList arrOfBusinesses={arrOfBusinesses} />
      )}
    </div>
  );
}

function SearchBar() {
  return (
    <section className={styles.SearchBar}>
      <FilterInputs />
      <SearchInputs />
      <LetsGoButton />
    </section>
  );
}

export default SearchBar;
