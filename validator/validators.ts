import {ValidationError} from '../errors';

/**
 * Throws a ValidationError if the value is null or undefined.
 * This function also asserts the value to be NonNullable if the check passes.
 *
 * @param name the name of the variable
 * @param o the value to check
 */
export function notNull(
  name: string,
  o?: unknown
): asserts o is NonNullable<unknown> {
  if (o === undefined || o === null) {
    throw new ValidationError(`${name} may not be null or undefined`);
  }
}

/**
 * Throws a ValidationError if the value is null, undefined or the length is 0.
 * This function also asserts the value to be NonNullable if the check passes.
 *
 * @param name the name of the variable
 * @param o the value to check
 */
export function notEmpty(
  name: string,
  o?: unknown
): asserts o is NonNullable<unknown> {
  if (o === undefined || o === null || o.toString().length === 0) {
    throw new ValidationError(`${name} may not be empty`);
  }
}

/**
 * Throws a ValidationError if the value is null, undefined, has a length of 0 or contains only whitespace.
 * This function also asserts the value to be NonNullable if the check passes.
 *
 * @param name the name of the variable
 * @param o the value to check
 */
export function notBlank(
  name: string,
  o?: unknown
): asserts o is NonNullable<unknown> {
  if (o === undefined || o === null || o.toString().trim().length === 0) {
    throw new ValidationError(`${name} may not be blank`);
  }
}

/**
 * Throws a ValidationError if the value does not match the regular expression provided.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param regex the regular expression to validate with
 * @param o the value to check
 */
export function matches(name: string, regex: RegExp, o?: string | null) {
  if (o !== undefined && o !== null && !o.match(regex)) {
    throw new ValidationError(`${name} must match ${regex}`);
  }
}

/**
 * Throws a ValidationError if the value provided is not an email.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param o the value to check
 */
export function isEmail(name: string, o?: string | null) {
  const expression =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  if (o !== undefined && o !== null && !expression.test(o)) {
    throw new ValidationError(`${name} is not a valid email address`);
  }
}

/**
 * Throws a ValidationError if the value provided has a length that exceeds the provided length.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param length the maximum length of the variable
 * @param o the value to check
 */
export function maxLength(
  name: string,
  length: number,
  o?: string | unknown[] | null
) {
  if (o !== undefined && o !== null && o.length > length) {
    throw new ValidationError(`length of ${name} may not exceed ${length}`);
  }
}

/**
 * Throws a ValidationError if the value provided has a length that is less than the provided length.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param length the minimum length of the variable
 * @param o the value to check
 */
export function minLength(
  name: string,
  length: number,
  o?: string | unknown[] | null
) {
  if (o !== undefined && o !== null && o.length < length) {
    throw new ValidationError(
      `length of ${name} may not be less than ${length}`
    );
  }
}

/**
 * Throws a ValidationError if the value provided is not a number.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param o the value to check
 */
export function isNumber(name: string, o?: string | null | number) {
  if (o !== undefined && o !== null && isNaN(Number(o))) {
    throw new ValidationError(`${name} is not a number`);
  }
}

/**
 * Throws a ValidationError if the value is less than the provided minimum value.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param minValue the minimum value allowed
 * @param o the value to check
 */
export function minValue(
  name: string,
  minValue: number,
  o?: number | string | null
) {
  if (o !== undefined && o !== null) {
    if (typeof o === 'string') {
      isNumber(name, o);
    }
    if (+o < minValue) {
      throw new ValidationError(`${name} may not be less than ${minValue}`);
    }
  }
}

/**
 * Throws a ValidationError if the value is more than the provided maximum value.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param maxValue the maximum value allowed
 * @param o the value to check
 */
export function maxValue(
  name: string,
  maxValue: number,
  o?: number | string | null
) {
  if (o !== undefined && o !== null) {
    if (typeof o === 'string') {
      isNumber(name, o);
    }
    if (+o > maxValue) {
      throw new ValidationError(`${name} may not be greater than ${maxValue}`);
    }
  }
}

/**
 * Throws a ValidationError if the value is not between the provided minimum and maximum values inclusive.
 * Undefined and null values are skipped and not validated.
 *
 * @param name the name of the variable
 * @param minValue the minimum value allowed
 * @param maxValue the maximum value allowed
 * @param o the value to check
 */
export function betweenValues(
  name: string,
  minValue: number,
  maxValue: number,
  o?: string | number | null
) {
  if (o !== undefined && o !== null) {
    if (typeof o === 'string') {
      isNumber(name, o);
    }
    if (+o < minValue || +o > maxValue) {
      throw new ValidationError(
        `${name} must be between ${minValue} and ${maxValue}`
      );
    }
  }
}

const isString = (value: unknown): value is string => typeof value === 'string';

export interface StringValidationOptions {
  readonly name: string;
  readonly required: boolean;
  readonly minLength?: number;
  readonly maxLength?: number;
  readonly regex?: RegExp;
  readonly notBlank?: boolean;
  readonly notEmpty?: boolean;
  readonly isEmail?: boolean;
  readonly isNumber?: boolean;
}

export function validateString(
  options: StringValidationOptions,
  value?: unknown
): void {
  if (options.required) {
    notNull(options.name, value);
  } else if (value === undefined || value === null) {
    return;
  }
  if (!isString(value)) {
    throw new ValidationError(`${options.name} must be a string`);
  }
  if (options.minLength !== undefined && value.length < options.minLength) {
    throw new ValidationError(
      `${options.name} must be at least ${options.minLength} characters`
    );
  }
  if (options.maxLength !== undefined && value.length > options.maxLength) {
    throw new ValidationError(
      `${options.name} must be at most ${options.maxLength} characters`
    );
  }
  if (options.regex !== undefined && !options.regex.test(value)) {
    throw new ValidationError(`${options.name} must match ${options.regex}`);
  }
  if (options.notBlank !== undefined && options.notBlank) {
    notBlank(options.name, value);
  }
  if (options.notEmpty !== undefined && options.notEmpty) {
    notEmpty(options.name, value);
  }
  if (options.isEmail !== undefined && options.isEmail) {
    isEmail(options.name, value);
  }
  if (options.isNumber !== undefined && options.isNumber) {
    isNumber(options.name, value);
  }
}
