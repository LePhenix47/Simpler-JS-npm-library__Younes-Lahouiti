/**
 * Retrieves the values of an object inside an array.
 *
 * @param {object} object The object to retrieve values from.
 *
 * @returns {any[]} An array containing the property values of the object.
 */
export declare function getObjectValues(object: object): any[];
/**
 * Retrieves the properties themselves of an object inside an array.
 *
 * @param {object} object The object to retrieve properties from.
 *
 * @returns An array containing the property names of the object.
 */
export declare function getObjectProperties(object: object): any[];
/**
 * Retrieves the property names and values of an object inside an array.
 *
 * @param {object} object The object to retrieve property names and values from.
 *
 * @returns An array containing pairs of property names and values of the object, example:
 *
 * ```js
 * const obj = {foo: "hello", bar: "salve"}
 *
 * let objectKeyValuePair = getObjectEntries(obj);
 *
 * console.log(objectKeyValuePair) → [["foo", "hello"], ["bar", "salve"]]
 * ```
 */
export declare function getObjectEntries(object: object): any[];
/**
 * Returns a random property from the provided object.
 *
 * @param {object} object - The object to get a random property from.
 *
 * @throws {Error} If the argument is not an object.
 *
 * @returns {string} A random property from the provided object.
 */
export declare function getRandomPropertyFromObject(object: object): string;
