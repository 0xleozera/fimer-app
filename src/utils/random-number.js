export const randomNumber = (max, min = 1) => {
  if (max === 0) {
    return;
  }

  return Math.floor(Math.random() * max) + min;
};
