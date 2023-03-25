import { getRandomInteger, getRandomArrayElement, getGeneratedPhotoId } from './util.js';

const GENERATED_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR = 6;
const DESCRIPTIONS = [
  'Все мои волки делают АуФ.',
  'Обожаю тот момент на работе, когда нужно уходить домой.',
  'Я действительно король, потому что знаю, как управлять собой после 15 литров пива.',
  'Я целую тебя в рот, ты меня — наоборот.',
  'Пошёл, увидел, забыл, что хотел.',
  'Я веду здоровый образ жизни: с утра делаю зарядку, яичницу всмятку, день по распорядку.',
  'Мозги — очень хорошая вещь, жаль не все ими умеют пользоваться…',
  'Самый лучший день.',
  'В Питере пить.',
];
const QUANTITY_COMMENTS = 2;
const RANDOM_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Даша',
  'Глаша',
  'Дима',
  'Ваня',
  'Даниил',
  'Никита',
];

const getMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(RANDOM_COMMENTS));

const commentId = getGeneratedPhotoId();

const getComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR)}.svg`,
  message: getMessage(),
  name: getRandomArrayElement(NAMES),
});


const getGeneratedElement = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, QUANTITY_COMMENTS) }, getComment),
});

const similarPhotos = () => Array.from({length: GENERATED_PHOTOS}, (_, pictureIndex) =>
  getGeneratedElement(pictureIndex + 1)
);

export { similarPhotos };
