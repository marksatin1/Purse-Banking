// usdFormatter(value)
// dateFormatter(value)
// Sleep(durationMs)
// convertRating(number)
// importAll(directory)

import ZeroStars from '../../assets/Star-Ratings/0_stars.png';
import OneStar from '../../assets/Star-Ratings/1_star.png';
import TwoStars from '../../assets/Star-Ratings/2_stars.png';
import ThreeStars from '../../assets/Star-Ratings/3_stars.png';
import FourStars from '../../assets/Star-Ratings/4_stars.png';
import FiveStars from '../../assets/Star-Ratings/5_stars.png';

export const usdFormatter = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

export const dateFormatter = (unicodeDate) => {
  let unformattedDate = unicodeDate ? unicodeDate : new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(unformattedDate);

  return formattedDate;
};

export const Sleep = (durationMs) => {
  return new Promise((resolve) => setTimeout(resolve, durationMs));
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
