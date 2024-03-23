import { toString } from './base'

export const isDef = <T = any>(val: T): val is T => typeof val !== 'undefined'
export const isObject = (val: any): val is object => toString(val) === '[object Object]'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: any): val is string => typeof val === 'string'
export const isNull = (val: any): val is null => toString(val) === '[object Null]'
export const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'
export const isUndefined = (val: any): val is Date => toString(val) === '[object Date]'

// @ts-expect-error
export const isWindow = (val: any): boolean => typeof window === 'undefined' && toString(val) === '[object Window]'

// @ts-expect-error
export const isBrowser = typeof window !== 'undefined'
