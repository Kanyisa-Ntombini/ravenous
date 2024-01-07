import React from 'react';
import styles from './SearchBar.module.css';

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

function SearchButton() {
  function searchInfo() {
    const searchBusinessTerm = document.getElementById('searchBusinessTerm');
    const searchBusinessArea = document.getElementById('searchBusinessArea');

    sessionStorage.setItem('location', searchBusinessArea.value);
    sessionStorage.setItem('term', searchBusinessTerm.value);
    sessionStorage.setItem('radius', 1000);
    const sortBy = sessionStorage.getItem('FilterChoice');
    sessionStorage.setItem('sortBy', sortBy);
    console.log(sessionStorage);
  }

  return <button onClick={searchInfo}>Let's Go</button>;
}

function SearchBar() {
  return (
    <section className={styles.SearchBar}>
      <FilterInputs />
      <SearchInputs />
      <SearchButton />
    </section>
  );
}

export default SearchBar;
