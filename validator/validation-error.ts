export type PossibleValidationError = {
  stack?: string;
  message?: string;
  name?: string;
  statusCode?: number;
};

/**
 * Checks if the given variable is a ValidationError.
 *
 * @param e the variable to check
 */
export function isValidationError(
  e?: PossibleValidationError
): e is ValidationError {
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
  statusCode: number;

  constructor(message?: string, statusCode?: number) {
    super(message ?? 'Validation error');
    this.name = 'ValidationError';
    this.statusCode = statusCode ?? 400;
  }
}
