import ZeroStars from '../assets/Star-Ratings/0_stars.png';
import OneStar from '../assets/Star-Ratings/1_star.png';
import TwoStars from '../assets/Star-Ratings/2_stars.png';
import ThreeStars from '../assets/Star-Ratings/3_stars.png';
import FourStars from '../assets/Star-Ratings/4_stars.png';
import FiveStars from '../assets/Star-Ratings/5_stars.png';

export const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const Sleep = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export const convertRating = (rating) => {
  if (Math.round(rating) === 0) {
    return ZeroStars;
  } else if (Math.round(rating) === 1) {
    return OneStar;
  } else if (Math.round(rating) === 2) {
    return TwoStars;
  } else if (Math.round(rating) === 3) {
    return ThreeStars;
  } else if (Math.round(rating) === 4) {
    return FourStars;
  } else if (Math.round(rating) === 5) {
    return FiveStars;
  } else {
    return null;
  }
};

export const importAll = (directory) => {
  let images = [];
  directory.keys().forEach((item) => {
    images[item.replace('./', '').replace('.webp', '')] = directory(item);
  });
  return images;
};
