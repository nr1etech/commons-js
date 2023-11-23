import {HttpStatusCode} from '../http';

interface IError {
  stack?: string;
  message?: string;
  name?: string;
  statusCode?: HttpStatusCode | number;
}

/**
 * Checks if the given variable is a NotFoundError.
 *
 * @param e the variable to check
 */
export function isNotFoundError(e?: IError | null): e is NotFoundError {
  return !!(
    e &&
    e.stack &&
    e.message &&
    e.statusCode &&
    e.name &&
    e.name === 'NotFoundError'
  );
}

/**
 * Thrown when a resource cannot be found.
 */
export class NotFoundError extends Error {
  readonly statusCode = HttpStatusCode.NOT_FOUND;

  constructor(message?: string) {
    super(message ?? 'Not found');
    this.name = 'NotFoundError';
  }
}

/**
 * Checks if the given variable is a ForbiddenError.
 *
 * @param e the variable to check
 */
export function isForbiddenError(e?: IError | null): e is ForbiddenError {
  return !!(
    e &&
    e.stack &&
    e.message &&
    e.statusCode &&
    e.name &&
    e.name === 'ForbiddenError'
  );
}

/**
 * Thrown when a requested operations is not allowed.
 */
export class ForbiddenError extends Error {
  readonly statusCode = HttpStatusCode.FORBIDDEN;

  constructor(message?: string) {
    super(message ?? 'Forbidden');
    this.name = 'ForbiddenError';
  }
}

/**
 * Checks if the given variable is a ValidationError.
 *
 * @param e the variable to check
 */
export function isValidationError(e?: IError | null): e is ValidationError {
  return !!(
    e &&
    e.stack &&
    e.message &&
    e.statusCode &&
    e.name === 'ValidationError'
  );
}

/**
 * Thrown when a validation error occurs.
 */
export class ValidationError extends Error {
  readonly statusCode = HttpStatusCode.BAD_REQUEST;

  constructor(message?: string) {
    super(message ?? 'Validation error');
    this.name = 'ValidationError';
  }
}
