declare module 'pomeranian-durations' {
  //add.js
  export function add(firstIsoString: string, secondIsoString: string): string
  export function sum(durations: string[]): string
  export function addMicroseconds(amount: number, isoString: string): string
  export function addMilliseconds(amount: number, isoString: string): string
  export function addSeconds(amount: number, isoString: string): string
  export function addMinutes(amount: number, isoString: string): string
  export function addHours(amount: number, isoString: string): string
  export function addDays(amount: number, isoString: string): string
  export function addWeeks(amount: number, isoString: string): string
  export function addMonths(amount: number, isoString: string): string
  export function addYears(amount: number, isoString: string): string

  //ceil.js
  export function ceil(granularity: string, isoString: string): string
  export function ceilSeconds(isoDuration: string): string
  export function ceilMinutes(isoDuration: string): string
  export function ceilHours(isoDuration: string): string
  export function ceilDay(isoDuration: string): string
  export function ceilWeeks(isoDuration: string): string
  export function ceilMonths(isoDuration: string): string
  export function ceilYears(isoDuration: string): string

  //compare.js
  export function gte(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function gt(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function lt(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function lte(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function eq(firstIsoDuration: string, secondIsoDuration: string): boolean

  //constatnts.js
  export {}
  export const ONE_MICROSECOND: number
  export const ONE_MILLISECOND: number
  export const ONE_SECOND: number
  export const ONE_MINUTE: number
  export const ONE_HOUR: number
  export const ONE_DAY: number

  export const TIME_DESIGNATOR: string
  export const DURATION_DESIGNATOR: string
  export const INVALID_DURATION: string

  export const UNIT_NAMES: {
    microseconds: 'microseconds',
    milliseconds: 'milliseconds',
    seconds: 'seconds',
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
    weeks: 'weeks',
    months: 'months',
    years: 'years',
  }

  export const UNIT_ORDER: string[]

  export const TIME_UNITS: {
    [UNIT_NAMES.seconds]: string
    [UNIT_NAMES.minutes]: string
    [UNIT_NAMES.hours]: string
  }

  export const DATE_UNITS: {
    [UNIT_NAMES.days]: string
    [UNIT_NAMES.weeks]: string
    [UNIT_NAMES.months]: string
    [UNIT_NAMES.years]: string
  }

  export const UNITS: {
    [UNIT_NAMES.seconds]: string
    [UNIT_NAMES.minutes]: string
    [UNIT_NAMES.hours]: string
    [UNIT_NAMES.days]: string
    [UNIT_NAMES.weeks]: string
    [UNIT_NAMES.months]: string
    [UNIT_NAMES.years]: string
  }

  type Units = {
    [UNIT_NAMES.seconds]?: string
    [UNIT_NAMES.minutes]?: string
    [UNIT_NAMES.hours]?: string
    [UNIT_NAMES.days]?: string
    [UNIT_NAMES.weeks]?: string
    [UNIT_NAMES.months]?: string
    [UNIT_NAMES.years]?: string
  }

  //conversions.js
  export function asMicroseconds(isoString: string): number
  export function asMilliseconds(isoString: string): number
  export function asSeconds(isoString: string): number
  export function asMinutes(isoString: string): number
  export function asHours(isoString: string): number
  export function asDecimalMicroseconds(isoString: string): number
  export function asDecimalMilliseconds(isoString: string): number
  export function asDecimalSeconds(isoString: string): number
  export function asDecimalMinutes(isoString: string): number
  export function asDecimalHours(isoString: string): number
  
  //find.js
  export function findSeconds(isoString: string): number | undefined
  export function findMinutes(isoString: string): number | undefined
  export function findHours(isoString: string): number | undefined
  export function findDays(isoString: string): number | undefined
  export function findWeeks(isoString: string): number | undefined
  export function findMonths(isoString: string): number | undefined
  export function findYears(isoString: string): number | undefined

  //floor.js
  export function floor(granularity: string, isoString: string): string
  export function floorSeconds(isoDuration: string): string
  export function floorMinutes(isoDuration: string): string
  export function floorHours(isoDuration: string): string
  export function floorDays(isoDuration: string): string
  export function floorWeeks(isoDuration: string): string
  export function floorMonths(isoDuration: string): string
  export function floorYears(isoDuration: string): string

  //format.js
  export function format(template: string, isoString: string): string

  //from-sql.js
  export function fromPostgres(isoString: string): string
  export function fromPostgresVerbose(isoString: string): string

  //from.js
  export function fromMicroseconds(amount: number): string
  export function fromMilliseconds(amount: number): string
  export function fromSeconds(amount: number): string
  export function fromMinutes(amount: number): string
  export function fromHours(amount: number): string
  export function fromDays(amount: number): string
  export function fromWeeks(amount: number): string
  export function fromMonths(amount: number): string
  export function fromYears(amount: number): string

  //in.js
  export function inSeconds(isoDuration: string): string
  export function inMinutes(isoDuration: string): string
  export function inHours(isoDuration: string): string

  //math.js
  export function absolute(isoDuration: string): string

  //normolize.js
  export function normalizeTime(isoDuration: string): string

  //remove.js
  export function removeSeconds(isoString: string): string
  export function removeMinutes(isoString: string): string
  export function removeHours(isoString: string): string
  export function removeDays(isoString: string): string
  export function removeWeeks(isoString: string): string
  export function removeMonths(isoString: string): string
  export function removeYears(isoString: string): string
  export function removeTimeUnits(isoString: string): string
  export function removeDateUnits(isoString: string): string

  //sort.js
  export function sortAsc(firstisoString: string, secondIsoString: string): number
  export function sortAscBy(key: string, firstisoString: string, secondIsoString: string): number
  export function sortDesc(firstisoString: string, secondIsoString: string): number
  export function sortDescBy(key: string, firstisoString: string, secondIsoString: string): number

  //substruct.js
  export function subtract(firstIsoString: string, secondIsoString: string): string
  export function subtractMilliseconds(amount: number, isoString: string): string
  export function subtractMicroseconds(amount: number, isoString: string): string
  export function subtractSeconds(amount: number, isoString: string): string
  export function subtractMinutes(amount: number, isoString: string): string
  export function subtractHours(amount: number, isoString: string): string
  export function subtractDays(amount: number, isoString: string): string
  export function subtractWeeks(amount: number, isoString: string): string
  export function subtractMonths(amount: number, isoString: string): string
  export function subtractYears(amount: number, isoString: string): string

  //to-sql.js
  export function toPostgresVerbose(isoString: string): string
  export function toPostgres(isoString: string): string
  export function toSql(isoString: string): string

  //transformations.js
  export function toIso(fragments: Units): string
  export function toFragments(isoString: string): Units

  //validate.js
  export function isValid(isoString: string): boolean
  export function isInvalid(isoString: string): boolean
  export function whenInvalid(value: string | Function, isoDuration: string): string
  export function whenInvalidDuration(value: string | Function, isoDuration: string): string
}
