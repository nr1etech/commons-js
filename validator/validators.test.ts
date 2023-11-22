import {
  betweenValues,
  isEmail,
  isNumber,
  matches,
  maxLength,
  maxValue,
  minLength,
  minValue,
  notBlank,
  notEmpty,
  notNull,
  validateString,
} from './validators';

test('Test notNull', () => {
  notNull('foo', 'bar');
  expect(() => notNull('foo', null)).toThrow(
    'foo may not be null or undefined'
  );
  expect(() => notNull('foo', undefined)).toThrow(
    'foo may not be null or undefined'
  );
});

test('Test notEmpty', () => {
  notEmpty('foo', 'bar');
  expect(() => notEmpty('foo', '')).toThrow('foo may not be empty');
  expect(() => notEmpty('foo', null)).toThrow('foo may not be empty');
  expect(() => notEmpty('foo', undefined)).toThrow('foo may not be empty');
});

test('Test notBlank', () => {
  notBlank('foo', 'bar');
  expect(() => notBlank('foo', ' ')).toThrow('foo may not be blank');
  expect(() => notBlank('foo', '')).toThrow('foo may not be blank');
  expect(() => notBlank('foo', null)).toThrow('foo may not be blank');
  expect(() => notBlank('foo', undefined)).toThrow('foo may not be blank');
});

test('Test matches', () => {
  matches('foo', /bar/, 'bar');
  matches('foo', /bar/, null);
  matches('foo', /bar/, undefined);
  expect(() => matches('foo', /bar/, 'baz')).toThrow('foo must match /bar/');
});

test('Test isEmail', () => {
  isEmail('foo', 'test@example.com');
  isEmail('foo', null);
  isEmail('foo', undefined);
  expect(() => isEmail('foo', 'test')).toThrow(
    'foo is not a valid email address'
  );
});

test('Test maxLength', () => {
  const arr: string[] = [];
  arr.push('a', 'b', 'c');
  maxLength('foo', 3, 'bar');
  maxLength('foo', 3, null);
  maxLength('foo', 3, undefined);
  maxLength('foo', 3, arr);
  expect(() => maxLength('foo', 2, 'baz')).toThrow(
    'length of foo may not exceed 2'
  );
  expect(() => maxLength('foo', 2, arr)).toThrow(
    'length of foo may not exceed 2'
  );
});

test('Test minLength', () => {
  const arr: string[] = [];
  arr.push('a', 'b', 'c');
  minLength('foo', 3, 'bar');
  minLength('foo', 3, null);
  minLength('foo', 3, undefined);
  minLength('foo', 3, arr);
  expect(() => minLength('foo', 4, 'baz')).toThrow(
    'length of foo may not be less than 4'
  );
  expect(() => minLength('foo', 4, arr)).toThrow(
    'length of foo may not be less than 4'
  );
});

test('Test isNumber', () => {
  isNumber('foo', 1);
  isNumber('foo', '1');
  isNumber('foo', null);
  isNumber('foo', undefined);
  expect(() => isNumber('foo', 'bar')).toThrow('foo is not a number');
});

test('Test minValue', () => {
  minValue('foo', 1, 2);
  minValue('foo', 1, '2');
  minValue('foo', 1, null);
  minValue('foo', 1, undefined);
  expect(() => minValue('foo', 2, 1)).toThrow('foo may not be less than 2');
});

test('Test maxValue', () => {
  maxValue('foo', 2, 1);
  maxValue('foo', 2, '1');
  maxValue('foo', 2, null);
  maxValue('foo', 2, undefined);
  expect(() => maxValue('foo', 1, 2)).toThrow('foo may not be greater than 1');
});

test('Test betweenValues', () => {
  betweenValues('foo', 1, 3, 2);
  betweenValues('foo', 1, 3, '2');
  betweenValues('foo', 1, 3, null);
  betweenValues('foo', 1, 3, undefined);
  expect(() => betweenValues('foo', 1, 3, 4)).toThrow(
    'foo must be between 1 and 3'
  );
});

test('Test validateString', () => {
  validateString({name: 'foo', required: true}, 'bar');
  validateString({name: 'foo', required: true}, ' ');
  validateString({name: 'foo', required: true}, '');
  validateString({name: 'foo', required: false}, null);
  validateString({name: 'foo', required: false}, undefined);
  expect(() => validateString({name: 'foo', required: true}, null)).toThrow(
    'foo may not be null or undefined'
  );
  expect(() =>
    validateString({name: 'foo', required: true}, undefined)
  ).toThrow('foo may not be null or undefined');
});
