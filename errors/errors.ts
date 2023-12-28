import {HttpStatusCode} from '../http';

interface IError {
  stack?: string;
  name?: string;
  message?: string;
  statusCode?: HttpStatusCode | number;
}

export interface HttpError extends Error {
  statusCode: HttpStatusCode | number;
}

/**
 * Checks if the given parameter is an HttpError.
 *
 * @param e the parameter to check
 */
export function isHttpError(e?: IError | null): e is HttpError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name &&
    e.name === 'HttpError'
  );
}

/**
 * Checks if the given parameter is a NotFoundError.
 *
 * @param e the parameter to check
 */
export function isNotFoundError(e?: IError | null): e is NotFoundError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name &&
    e.name === 'NotFoundError'
  );
}

/**
 * Thrown when a resource cannot be found.
 */
export class NotFoundError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.NOT_FOUND;
  constructor(message?: string) {
    message = message ?? 'Not found';
    super(message);
    this.name = 'NotFoundError';
  }
}

/**
 * Checks if the given parameter is a ForbiddenError.
 *
 * @param e the parameter to check
 */
export function isForbiddenError(e?: IError | null): e is ForbiddenError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name &&
    e.name === 'ForbiddenError'
  );
}

/**
 * Thrown when a requested operations is not allowed.
 */
export class ForbiddenError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.FORBIDDEN;
  constructor(message?: string) {
    message = message ?? 'Forbidden';
    super(message);
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
    e.statusCode &&
    e.message &&
    e.name === 'ValidationError'
  );
}

/**
 * Thrown when a validation error occurs.
 */
export class ValidationError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.BAD_REQUEST;
  constructor(message?: string) {
    message = message ?? 'Validation error';
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Checks if the given parameter is a BadRequestError.
 *
 * @param e the parameter to check
 */
export function isBadRequestError(e?: IError | null): e is BadRequestError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name === 'BadRequestError'
  );
}

/**
 * Thrown when a bad request is made.
 */
export class BadRequestError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.BAD_REQUEST;
  constructor(message?: string) {
    message = message ?? 'Bad request';
    super(message ?? 'Bad request');
    this.name = 'BadRequestError';
  }
}

/**
 * Checks if the given parameter is a InternalServerError.
 *
 * @param e the parameter to check
 */
export function isInternalServerError(
  e?: IError | null
): e is InternalServerError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name === 'InternalServerError'
  );
}

/**
 * Throws when an internal server error occurs.
 */
export class InternalServerError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
  constructor(message?: string) {
    message = message ?? 'Internal server error';
    super(message);
    this.name = 'InternalServerError';
  }
}

/**
 * Checks if the given parameter is a ConflictError.
 *
 * @param e the parameter to check
 */
export function isConflictError(e?: IError | null): e is ConflictError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name === 'ConflictError'
  );
}

/**
 * Thrown when a conflict occurs.
 */
export class ConflictError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.CONFLICT;
  constructor(message?: string) {
    message = message ?? 'Conflict';
    super(message);
    this.name = 'ConflictError';
  }
}

/**
 * Checks if the given parameter is a UnsupportedMediaTypeError.
 *
 * @param e the parameter to check
 */
export function isUnsupportedMediaTypeError(
  e?: IError | null
): e is UnsupportedMediaTypeError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name === 'UnsupportedMediaTypeError'
  );
}

/**
 * Thrown when a unsupported media type is used.
 */
export class UnsupportedMediaTypeError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.UNSUPPORTED_MEDIA_TYPE;
  constructor(message?: string) {
    message = message ?? 'Unsupported media type';
    super(message);
    this.name = 'UnsupportedMediaTypeError';
  }
}

/**
 * Checks if the given parameter is a NotImplementedError.
 *
 * @param e the parameter to check
 */
export function isNotImplementedError(
  e?: IError | null
): e is NotImplementedError {
  return !!(
    e &&
    e.stack &&
    e.statusCode &&
    e.message &&
    e.name === 'NotImplementedError'
  );
}

/**
 * Thrown when a requested operation is not implemented.
 */
export class NotImplementedError extends Error implements HttpError {
  readonly statusCode = HttpStatusCode.NOT_IMPLEMENTED;
  readonly expose = true;
  constructor(message?: string) {
    message = message ?? 'Not implemented';
    super(message);
    this.name = 'NotImplementedError';
  }
}
