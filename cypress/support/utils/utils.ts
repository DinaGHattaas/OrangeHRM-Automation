import { faker } from "@faker-js/faker";

export const getRandomFirstName = () => {
  return faker.person.firstName();
};

export const getRandomLastName = () => {
  return faker.person.lastName();
};

export const generateRandomNumber = (max: number = 100): number => {
  return Math.floor(Math.random() * max) + 1;
};
