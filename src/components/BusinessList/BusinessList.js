import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';
import filterYelpData from '../../yelp_api/yelp_api';

function BusinessList() {
  const location = sessionStorage.getItem('location');
  const term = sessionStorage.getItem('term');
  const radius = sessionStorage.getItem('radius');
  const sortBy = sessionStorage.getItem('sortBy');
  const arrOfBusinesses = filterYelpData(location, term, radius, sortBy);

  const businessList = arrOfBusinesses.map((business, index) => {
    return (
      <Business
        key={index}
        name={business.name}
        imageSrc={business.imageSrc}
        imageAlt={business.imageAlt}
        address={business.address}
        city={business.city}
        state={business.state}
        zipCode={business.zipCode}
        category={business.category}
        rating={business.rating}
        reviewCount={business.reviewCount}
      />
    );
  });
  return <section className={styles.BusinessList}>{businessList}</section>;
}

export default BusinessList;
