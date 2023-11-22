import {isValidationError, ValidationError} from './validation-error';

test('Test isValidationError', () => {
  expect(isValidationError()).toBeFalsy();
  expect(isValidationError(new Error())).toBeFalsy();
  expect(isValidationError({})).toBeFalsy();
  expect(isValidationError({stack: 'foo'})).toBeFalsy();
  expect(isValidationError({stack: 'foo', message: 'bar'})).toBeFalsy();
  expect(
    isValidationError({stack: 'foo', message: 'bar', name: 'baz'})
  ).toBeFalsy();
  expect(isValidationError(new ValidationError())).toBeTruthy();
  expect(
    isValidationError({
      stack: 'foo',
      message: 'bar',
      name: 'ValidationError',
      statusCode: 400,
    })
  ).toBeTruthy();
});
