import * as faker from 'faker';

import { Participant, MITypes, ListItem } from './types';

export const enumToArray = en => Object.keys(en)
  .filter(v => isNaN(Number(v)) === false)
  .map(key => en[key]);

export const sortBy = (arr: unknown[], field: string | string[], asc = true) => {

  return [...arr].sort((a: string, b: string) => {

    let lowerA, lowerB;

    if (typeof field === 'string') {
      lowerA = a[field].toLowerCase();
      lowerB = b[field].toLowerCase();
    } else {
      lowerA = field.reduce((acc, cur) => acc + a[cur], '').toLowerCase();
      lowerB = field.reduce((acc, cur) => acc + b[cur], '').toLowerCase();
    }

    let res = 0;
    
    if (lowerA > lowerB) {
      res = -1;
    } else if (lowerA < lowerB) {
      res = 1;
    }

    return asc ? res : res * -1;
  });
}

export const genParticipant = (): Participant => {

  const id = faker.random.uuid();

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const email = faker.internet.email(firstName, lastName);

  const phoneNumber = faker.phone.phoneNumber('(0##) ### ## ##');
  
  const country = faker.address.country();
  const city = faker.address.city();

  const miTypes = enumToArray(MITypes);
  const mi = faker.random.arrayElement<keyof typeof MITypes>(miTypes);

  return {
    id,
    firstName,
    lastName,
    phoneNumber,
    email,
    country,
    city,
    mi,
  };
};

export const toCamelCase = (str: string) => str
  .split(/[^a-zA-Z0-9]+/) // everything except letters and numbers
  .map(word => word && word[0].toUpperCase() + word.slice(2))
  .join('');

export const strToListItem = (str: string): ListItem => ({
  value: toCamelCase(str),
  label: str,
})
