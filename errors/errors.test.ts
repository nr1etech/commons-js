import {
  ForbiddenError,
  isForbiddenError,
  isNotFoundError,
  isValidationError,
  NotFoundError,
  ValidationError,
} from './errors';

test('Test isNotFoundError', () => {
  expect(isNotFoundError(undefined)).toBeFalsy();
  expect(isNotFoundError(null)).toBeFalsy();
  expect(isNotFoundError({})).toBeFalsy();
  expect(isNotFoundError(new ForbiddenError('just a test'))).toBeFalsy();
  expect(isNotFoundError(new NotFoundError('just a test'))).toBeTruthy();
});

test('Test isForbiddenError', () => {
  expect(isForbiddenError(undefined)).toBeFalsy();
  expect(isForbiddenError(null)).toBeFalsy();
  expect(isForbiddenError({})).toBeFalsy();
  expect(isForbiddenError(new NotFoundError('just a test'))).toBeFalsy();
  expect(isForbiddenError(new ForbiddenError('just a test'))).toBeTruthy();
});

test('Test isValidationError', () => {
  expect(isValidationError(undefined)).toBeFalsy();
  expect(isValidationError(null)).toBeFalsy();
  expect(isValidationError({})).toBeFalsy();
  expect(isValidationError(new NotFoundError('just a test'))).toBeFalsy();
  expect(isValidationError(new ValidationError('just a test'))).toBeTruthy();
});
