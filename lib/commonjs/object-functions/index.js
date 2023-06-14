"use strict";
//Utils
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPropertyFromObject = exports.getObjectEntries = exports.getObjectProperties = exports.getObjectValues = void 0;
/**
 * Retrieves the values of an object inside an array.
 *
 * @param {object} object The object to retrieve values from.
 *
 * @returns {any[]} An array containing the property values of the object.
 */
function getObjectValues(object) {
    //We check that the object passed is indeed an object
    var argumentIsNotAnObject = typeof object !== "object" || Array.isArray(object);
    if (argumentIsNotAnObject) {
        //Returns the property values of the object in an array
        throw new Error("Argument passed is not an object");
    }
    return Object.values(object);
}
exports.getObjectValues = getObjectValues;
/**
 * Retrieves the properties themselves of an object inside an array.
 *
 * @param {object} object The object to retrieve properties from.
 *
 * @returns An array containing the property names of the object.
 */
function getObjectProperties(object) {
    //We check that the object passed is indeed an object
    var argumentIsNotAnObject = typeof object !== "object" || Array.isArray(object);
    if (argumentIsNotAnObject) {
        //Returns the property names of the object in an array
        throw new Error("Argument passed is not an object");
    }
    return Object.keys(object);
}
exports.getObjectProperties = getObjectProperties;
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
function getObjectEntries(object) {
    //We check that the object passed is indeed an object
    var argumentIsNotAnObject = typeof object !== "object" || Array.isArray(object);
    if (argumentIsNotAnObject) {
        //Returns the property names and its values in pair inside an array
        throw new Error("Argument passed is not an object");
    }
    return Object.entries(object);
}
exports.getObjectEntries = getObjectEntries;
/**
 * Returns a random property from the provided object.
 *
 * @param {object} object - The object to get a random property from.
 *
 * @throws {Error} If the argument is not an object.
 *
 * @returns {string} A random property from the provided object.
 */
function getRandomPropertyFromObject(object) {
    var isNotAnObject = typeof object !== "object" || Array.isArray(object);
    if (isNotAnObject) {
        throw new Error("Unexpected argument value passed, value is not an object");
    }
    var properties = getObjectProperties(object);
    var randomIndex = Math.random() * properties.length - 1;
    var randomProperty = properties[randomIndex];
    return randomProperty;
}
exports.getRandomPropertyFromObject = getRandomPropertyFromObject;
