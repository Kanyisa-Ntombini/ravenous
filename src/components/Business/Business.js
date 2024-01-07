import React from 'react';
import styles from './Business.module.css';

function Business(props) {
  return (
    <div className={styles.Business}>
      <figure>
        <img src={props.imageSrc} alt={props.imageAlt} />
        <h3>{props.name}</h3>
      </figure>

      <div className={styles.FlexItems}>
        <div className={styles.BusinessAddress}>
          <p>{props.address}</p>
          <p>{props.city}</p>
          <p>{props.state + ' ' + props.zipCode}</p>
        </div>

        <div>
          <p>{'Category: ' + props.category}</p>
          <p>{'Rating: ' + props.rating}</p>
          <p>{'Reviews: ' + props.reviewCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
