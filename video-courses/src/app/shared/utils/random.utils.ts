export const getRandomNumber = (min = 1, max = 10000) =>
  Math.floor(Math.random() * (max - min + 1) + min);
