"use strict";
//Utils
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyToJSON = exports.parseToJS = exports.generateUnicodeCharFromRange = exports.toPercent = exports.replaceText = exports.getSubtring = exports.sliceString = exports.splitString = exports.copyTextToClipBoard = exports.matchRegExp = exports.testRegExp = exports.normalize = exports.formatText = void 0;
/**
 *Function that formats a given string in 3 cases: lowercase, uppercase and titlecase
 *
 * @param {string} string - The string to format.
 * @param {string} option - The option to use for formatting. Valid options are "lowercase", "uppercase", "titlecase" or "titlecase2".
 *
 * titlecase is for every word in the string and titlecase 2 only for the first word
 *
 * @returns {string} The formatted string
 *
 * @throws {Error} If an invalid option is provided.
 * @throws {TypeError} If either the string or the option parameter is not a string.
 */
function formatText(string, option) {
    var formattedOption = option.toLowerCase().trim();
    switch (formattedOption) {
        case "lowercase": {
            return string.toLowerCase();
        }
        case "uppercase": {
            return string.toUpperCase();
        }
        case "titlecase": {
            var stringArray = string.split(" ");
            for (var i = 0; i < stringArray.length; i++) {
                var uppercasedFirstLetter = stringArray[i]
                    .substring(0, 1)
                    .toUpperCase();
                var lowercasedRemainingLetters = stringArray[i]
                    .slice(1)
                    .toLowerCase();
                stringArray[i] = uppercasedFirstLetter + lowercasedRemainingLetters;
            }
            stringArray = stringArray.concat();
            return stringArray.toString();
        }
        case "titlecase2": {
            var firstLetter = string.substring(0, 1).toUpperCase();
            var rest = string.substring(1).toLowerCase();
            return firstLetter + rest;
        }
        default: {
            throw new Error("Formatting text error: unknown option passed in argument");
        }
    }
}
exports.formatText = formatText;
/**
 * Function that normalizes a string by removing diacritical marks
 * (replaces letters with accents by their "non-accented" counter-part).
 *
 * Example:
 * ```md
 * "crème brûlée" → "creme brulee"
 * ```
 * @param {string} string - The string to be normalized.
 *
 * @returns {string|null} - The normalized string or null if the argument is not a string.
 */
function normalize(string) {
    var argumentIsNotAString = typeof string !== "string";
    if (argumentIsNotAString) {
        throw new Error("Argument passed is not a string");
    }
    return string
        .normalize("NFD") //returns the unicode NORMALIZATION FORM of the string using a canonical DECOMPOSITION (NFD).
        .replace(/[\u0300-\u036f]/g, "");
}
exports.normalize = normalize;
/**
 * Tests a regular expression against a string and
 * returns a boolean value indicating whether the string matches the RegExp pattern.
 *
 * @param {string} string - The string to test against the regular expression.
 * @param {RegExp} RegularExpression - The regular expression to test against the string.
 *
 * @returns {boolean} - A boolean value indicating whether the regular expression matches the string.
 */
function testRegExp(string, RegularExpression) {
    return RegularExpression.test(string);
}
exports.testRegExp = testRegExp;
/**
 * Tests a regular expression against a string and returns an array of matches.
 *
 * @param {string} string - The string to test against the regular expression.
 * @param {RegExp} regularExpression - The regular expression to test against the string.
 *
 * @returns {Array<string>} - An array of matches found in the string.
 */
function matchRegExp(string, regularExpression) {
    var matches = string.match(regularExpression);
    return matches || [];
}
exports.matchRegExp = matchRegExp;
/**
 * Copies the given text to the clipboard.
 *
 * @param {string} textToCopy - The text to be copied to the clipboard.
 *
 * @returns {Promise<void>} - A Promise that resolves when the text has been successfully copied to the clipboard.
 */
function copyTextToClipBoard(textToCopy) {
    return navigator.clipboard.writeText(textToCopy);
}
exports.copyTextToClipBoard = copyTextToClipBoard;
/**

Splits a string into an array of substrings using the specified separator.

@param {string} string - The string to split.

@param {string|RegExp} character - The separator to use when splitting the string.

@returns {string[]} An array of substrings created by splitting the original string using the specified separator.

*/
function splitString(string, character) {
    return string.split(character);
}
exports.splitString = splitString;
/**

Slices a string to extract a portion of it between the start and end indexes.

@example
Ex: We have "Saturday" and we want to just end up with "at"

```js
let str = "Saturday"
str = sliceString(str, 1, 3); //"at"

let str2 = "#FFFFFF"
str2 = sliceSting(str2, 1); //"FFFFFF"


let str3 = "Hello world"
str3 = sliceString(str3, -5) //"world"
```

@param {string} string - The input string to slice.
@param {number} startIndex - The index of the beginning of the slice.
@param {number} endIndex - The index of the end of the slice.

@returns {string} - The portion of the string between the start and end indexes.
*/
function sliceString(string, startIndex, endIndex) {
    return string.slice(startIndex, endIndex);
}
exports.sliceString = sliceString;
/**
 * Returns a substring of the given string based on the specified start and end index.
 * @param {string} string - The string to extract the substring from.
 * @param {number} startIndex - The starting index of the substring (inclusive).
 * @param {number} endIndex - The ending index of the substring (exclusive).
 * @returns {string} The extracted substring.
 */
function getSubtring(string, startIndex, endIndex) {
    return string.substring(startIndex, endIndex);
}
exports.getSubtring = getSubtring;
/**
 *  Function that replaces all instances of a given character or word with a new one in a string of text.
 *
 * @param {string} stringOfText - The entire string of text.
 * @param {string} replacedText - The character or word to be replaced.
 * @param {string} replacer - The character or word that will replace the old one.
 *
 * @returns {string} - The updated string of text.
 */
function replaceText(stringOfText, replacedText, replacer) {
    //@ts-ignore
    return stringOfText.replaceAll(replacedText, replacer);
}
exports.replaceText = replaceText;
/**
 * Function that formats a number as a percentage string with a '%' symbol appended at the end.
 *
 * @param {number} number - The number to be formatted as a percentage.
 * @returns {string} - The formatted percentage string.
 */
function toPercent(number) {
    return number.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0,
    });
}
exports.toPercent = toPercent;
/**
 * Generates an array of characters based on the provided Unicode character codes range
 * How the fromCodePoint method works:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
 *
 * @param {number} startCodePoint - The Unicode code point of the starting character (inclusive)
 * @param {number} endCodePoint - The Unicode code point of the ending character (inclusive too)
 *
 * @returns {string[]} An array of characters within the specified Unicode range
 */
function generateUnicodeCharFromRange(startCodePoint, endCodePoint) {
    var characterList = [];
    for (var codePoint = startCodePoint; codePoint <= endCodePoint; codePoint++) {
        var character = String.fromCodePoint(codePoint);
        characterList.push(character);
    }
    return characterList;
}
exports.generateUnicodeCharFromRange = generateUnicodeCharFromRange;
/**
 * Parses a JSON string and returns the resulting JavaScript object.
 *
 * @param {string} string - A string that contains a valid JSON data.
 *
 * @returns {any} The parsed JavaScript object from the JSON data.
 */
function parseToJS(string) {
    return JSON.parse(string);
}
exports.parseToJS = parseToJS;
/**
 * Converts a JavaScript value to a JSON string
 *
 * @param {any} value - A JavaScript value, usually an object or an array, to be converted to a JSON string
 *
 * @returns {string} The JSON string representation of the input value
 */
function stringifyToJSON(value) {
    return JSON.stringify(value);
}
exports.stringifyToJSON = stringifyToJSON;
