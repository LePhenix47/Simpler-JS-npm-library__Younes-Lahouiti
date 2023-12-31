var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Checks if the provided value is an array.
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} - True if the value is an array, false otherwise.
 */
export function isValueArray(value) {
    return Array.isArray(value);
}
/**
 * Creates a new array by copying the contents of the provided array
 *
 * @param {any} arrayToCopy - The array or list to copy
 *
 * @returns {any[]} - The new array containing the copied elements
 */
export function getArrayFrom(arrayToCopy) {
    return Array.from(arrayToCopy);
}
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
export function spliceArray(originalArray, startIndex, deleteCount) {
    var items = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        items[_i - 3] = arguments[_i];
    }
    //We make a deep copy of the array to avoid mutating
    //the array passed in argument with the `splice()` method
    var newArray = getArrayFrom(originalArray);
    var removedItems = [];
    var hasItems = !!items.length;
    if (hasItems) {
        //The `.splice()` method returns the removed items
        //It's also a mutative method so when we call it we modify the `newArray`
        removedItems = newArray.splice.apply(newArray, __spreadArray([startIndex, deleteCount], items, false));
    }
    else {
        removedItems = newArray.splice(startIndex, deleteCount);
    }
    return { removedItems: removedItems, newArray: newArray };
}
/**
 * Joins the elements of an array into a string using the specified character as the separator.
 * @param {any[]} array - The array to join.
 * @param {string} [char=""] - The character used as the separator. Defaults to an empty string.
 * @returns {string} The joined string.
 */
export function joinArrayOnChar(array, char) {
    if (char === void 0) { char = ""; }
    return array.join(char);
}
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
