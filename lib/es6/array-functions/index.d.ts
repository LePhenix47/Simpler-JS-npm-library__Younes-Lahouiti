/**
 * Checks if the provided value is an array.
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} - True if the value is an array, false otherwise.
 */
export declare function isValueArray(value: any): boolean;
/**
 * Creates a new array by copying the contents of the provided array
 *
 * @param {any} arrayToCopy - The array or list to copy
 *
 * @returns {any[]} - The new array containing the copied elements
 */
export declare function getArrayFrom(arrayToCopy: any): any[];
/**
 * Removes elements from an array and optionally inserts new elements in their place
 *
 * @param {Array} originalArray - The array to modify
 * @param {number} startIndex - The index to start removing elements from
 * @param {number} deleteCount - The number of elements to remove
 * @param {...*} [items] - The elements to insert into the array
 *
 * @returns {Object} - An object containing the removed items and the updated array
 */
export declare function spliceArray(originalArray: any[], startIndex: number, deleteCount: number, ...items: any[]): {
    removedItems: any[];
    newArray: any[];
};
/**
 * Joins the elements of an array into a string using the specified character as the separator.
 * @param {any[]} array - The array to join.
 * @param {string} [char=""] - The character used as the separator. Defaults to an empty string.
 * @returns {string} The joined string.
 */
export declare function joinArrayOnChar(array: any[], char?: string): string;
/**
 * IMPORTANT: As of 31/05/2023, JS will have new NON-MUTABLE array methods:
 *
 * toSorted() for sort()
 * toSpliced() for splice()
 * toReversed() for reverse()
 *
 * So we won't need to make a copy of the array before performing the mutation
 *
 * Source:
 * "I Waited 15 Years For These New Array Methods" by Web Dev Simplified:
 * @link https://www.youtube.com/watch?v=3CBD5JZJJKw
 */
