import ZeroStars from '../../assets/Star-Ratings/0_stars.png';
import OneStar from '../../assets/Star-Ratings/1_star.png';
import TwoStars from '../../assets/Star-Ratings/2_stars.png';
import ThreeStars from '../../assets/Star-Ratings/3_stars.png';
import FourStars from '../../assets/Star-Ratings/4_stars.png';
import FiveStars from '../../assets/Star-Ratings/5_stars.png';

export const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const Sleep = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export const convertRating = (number) => {
  let starRating =
    Math.round(number) === 0
      ? ZeroStars
      : Math.round(number) === 1
      ? OneStar
      : Math.round(number) === 2
      ? TwoStars
      : Math.round(number) === 3
      ? ThreeStars
      : Math.round(number) === 4
      ? FourStars
      : Math.round(number) === 5
      ? FiveStars
      : null;
  return starRating;
};

export const importAll = (directory) => {
  let images = [];
  directory.keys().forEach((item) => {
    images[item.replace('./', '').replace('.webp', '')] = directory(item);
  });
  return images;
};
