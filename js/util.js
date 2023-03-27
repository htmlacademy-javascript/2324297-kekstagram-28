const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array. length - 1)];

const getGeneratedPhotoId = () => {
  let lastGeneratedPhotoId = 0;
  return () => {
    lastGeneratedPhotoId += 1;
    return lastGeneratedPhotoId;
  };
};

export { getRandomInteger, getRandomArrayElement, getGeneratedPhotoId };
