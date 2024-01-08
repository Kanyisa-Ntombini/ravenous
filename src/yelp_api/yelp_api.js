import foodBusinessImage1 from './food-business-image-1.jpg';
import foodBusinessImage2 from './food-business-image-2.jpg';
import foodBusinessImage3 from './food-business-image-3.jpg';

const business1 = {
  imageSrc: foodBusinessImage1,
  imageAlt: 'Add description',
  name: "Kanyi's Corner",
  address: '122 Sunnyhill Street',
  city: 'Fairy Town',
  state: 'Fairytale Land',
  zipCode: 8888,
  category: 'lacto-ovo vegetarian',
  rating: 4.8,
  reviewCount: 120,
};

const businessInfo1 = [];
for (let i = 0; i < 9; i++) {
  businessInfo1.push(business1);
}

const business2 = {
  imageSrc: foodBusinessImage2,
  imageAlt: 'Add description',
  name: 'Breakfast Parlor',
  address: '122 Sunnyhill Street',
  city: 'Fairy Town',
  state: 'Fairytale Land',
  zipCode: 8888,
  category: 'breakfas',
  rating: 5,
  reviewCount: 800,
};

const businessInfo2 = [];
for (let i = 0; i < 9; i++) {
  businessInfo2.push(business2);
}

const business3 = {
  imageSrc: foodBusinessImage3,
  imageAlt: 'Add description',
  name: 'Tshisa Nyama',
  address: '122 Sunnyhill Street',
  city: 'Fairy Town',
  state: 'Fairytale Land',
  zipCode: 8888,
  category: 'Lunch',
  rating: 6,
  reviewCount: 100,
};

const businessInfo3 = [];
for (let i = 0; i < 9; i++) {
  businessInfo3.push(business3);
}

function filterYelpData(location, term, radius, sortBy) {
  if (location && term && radius) {
    return sortBy === 'bestMatch'
      ? businessInfo1
      : sortBy === 'highestRated'
      ? businessInfo2
      : businessInfo3;
  } else {
    return [];
  }
}

export default filterYelpData;
