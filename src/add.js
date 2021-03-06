/**
 * Helpers to add to a duration.
 * @name default
 */

import { curry } from './_utils';
import { toIso, toFragments } from './transformations';
import { isInvalid } from './validate';
import { INVALID_DURATION } from './constants';

/**
 * Adds two iso durations
 * @param firstIsoString {string} - a string to be added
 * @param secondIsoString {string} - a string to be added
 * @example
 * add('PT3S', 'PT1S') // => 'PT4S'
 */
export const add = curry((firstIsoString, secondIsoString) => {
  if (isInvalid(firstIsoString) || isInvalid(secondIsoString)) { return INVALID_DURATION; }

  const firstFragments = toFragments(firstIsoString);
  const secondFragments = toFragments(secondIsoString);
  const updatedFragments = Object.keys(firstFragments).reduce((acc, unit) => {
    acc[unit] = firstFragments[unit] + secondFragments[unit]; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
  return toIso(updatedFragments);
});

/**
 * Sums an array of durations
 * @param durations {array} - a string to be added
 * @example
 * sum(['PT1M', 'PT2M', 'PT3M']) // => 'PT6M'
 */
export const sum = (durations) =>
  durations.reduce((result, current) => add(result, current));

/**
 * Adds the given amount of microseconds to the given duration.
 * @param amount {number} - number of microseconds to add
 * @param isoString {string} - a string to be added
 * @example
 * addMicroseconds(1, 'PT1S') // => 'PT1.000001S'
 */
export const addMicroseconds = curry((amount, isoString) => add(isoString, `PT${amount / (10 ** 6)}S`));

/**
 * Adds the given amount of milliseconds to the given duration.
 * @param amount {number} - number of milliseconds to add
 * @param isoString {string} - a string to be added
 * @example
 * addMilliseconds(1, 'PT1S') // => 'PT1.001S'
 */
export const addMilliseconds = curry((amount, isoString) => add(isoString, `PT${amount / (10 ** 3)}S`));

/**
 * Adds the given amount of seconds to the given duration.
 * @param amount {number} - number of seconds to add
 * @param isoString {string} - a string to be added
 * @example
 * addSeconds(1, 'PT1S') // => 'PT2S'
 */
export const addSeconds = curry((amount, isoString) => add(isoString, `PT${amount}S`));

/**
 * Adds the given amount of minutes to the given duration.
 * @param amount {number} - number of minutes to add
 * @param isoString {string} - a string to be added
 * @example
 * addMinutes(1, 'PT1M') // => 'PT2M'
 */
export const addMinutes = curry((amount, isoString) => add(isoString, `PT${amount}M`));

/**
 * Adds the given amount of hours to the given duration.
 * @param amount {number} - number of hours to add
 * @param isoString {string} - a string to be added
 * @example
 * addHours(1, 'PT1M') // => 'PT1H1M'
 */
export const addHours = curry((amount, isoString) => add(isoString, `PT${amount}H`));

/**
 * Adds the given amount of hours to the given duration.
 * @param amount {number} - number of days to add
 * @param isoString {string} - a string to be added
 * @example
 * addDays(1, 'P1D') // => 'P2D'
 */
export const addDays = curry((amount, isoString) => add(isoString, `P${amount}D`));

/**
 * Adds the given amount of hours to the given duration.
 * @param amount {number} - number of weeks to add
 * @param isoString {string} - a string to be added
 * @example
 * addWeeks(1, 'P1W') // => 'P2W'
 */
export const addWeeks = curry((amount, isoString) => add(isoString, `P${amount}W`));

/**
 * Adds the given amount of hours to the given duration.
 * @param amount {number} - number of months to add
 * @param isoString {string} - a string to be added
 * @example
 * addMonths(1, 'P1M') // => 'P2M'
 */
export const addMonths = curry((amount, isoString) => add(isoString, `P${amount}M`));

/**
 * Adds the given amount of hours to the given duration.
 * @param amount {number} - number of years to add
 * @param isoString {string} - a string to be added
 * @example
 * addYears(1, 'P1Y') // => 'P2Y'
 */
export const addYears = curry((amount, isoString) => add(isoString, `P${amount}Y`));

/**
 * Adds the given iso duration to a date.
 * @param amount {string} - iso duration to be added
 * @param date {Date} - a date to be added to
 * @example
 * addToDate('PT1S', new Date('2000-01-01T00:00:00Z')) // => new Date('2000-01-01T00:00:01Z')
 * @example
 * addToDate('PT1H', new Date('2000-01-01T00:00:00Z')) // => new Date('2000-01-01T01:00:00Z')
 * @example
 * addToDate('P1M', new Date('2000-01-01T00:00:00Z')) // => new Date('2000-02-01T00:00:00Z')
 */
export const addToDate = curry((amount, date) => {
  if (isInvalid(amount)) { return INVALID_DURATION; }
  const dateCopy = new Date(date);
  const fragments = toFragments(amount);

  dateCopy.setSeconds(dateCopy.getSeconds() + fragments.seconds);
  dateCopy.setMinutes(dateCopy.getMinutes() + fragments.minutes);
  dateCopy.setHours(dateCopy.getHours() + fragments.hours);
  dateCopy.setDate(dateCopy.getDate() + fragments.days);
  dateCopy.setDate(dateCopy.getDate() + fragments.weeks * 7);
  dateCopy.setMonth(dateCopy.getMonth() + fragments.months);
  dateCopy.setFullYear(dateCopy.getFullYear() + fragments.years);

  return dateCopy;
});
