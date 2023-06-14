"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToBlobUrl = exports.fileToBase64String = exports.checkFileType = void 0;
/**
 * Checks if a given file has the expected type.
 *
 * @param {File} fileUploaded - The file to check its type.
 * @param {string} typeExpected - The expected type of the file.
 *
 * @returns {boolean} - A Promise that resolves to a boolean indicating whether the file has the expected type or not.
 */
function checkFileType(fileUploaded, typeExpected) {
    var lastModified = fileUploaded.lastModified, name = fileUploaded.name, type = fileUploaded.type, size = fileUploaded.size;
    var fileType = type.split("/")[0];
    return fileType === typeExpected;
}
exports.checkFileType = checkFileType;
/**
 * Converts a File object to a base64 string.
 *
 * @param {File} fileToConvert - The File object to convert.
 *
 * @returns {Promise<string>} - A Promise that resolves with the base64 string representation of the file.
 */
function fileToBase64String(fileToConvert) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        //Allows the conversion of binary data, in this case audio files, into a text format
        reader.readAsDataURL(fileToConvert);
        // When the audio file is loaded, extract the base64 string and resolve the promise with it
        reader.addEventListener("load", function () {
            var base64MediaString = reader.result;
            var isNotString = typeof base64MediaString !== "string";
            if (isNotString) {
                reject("Error: Base64 string not found.");
                return;
            }
            resolve(base64MediaString);
        });
        // If there's an error while reading the audio file, reject the promise with an error message
        reader.addEventListener("error", function () {
            reject("Error: Failed to read audio file.");
        });
    });
}
exports.fileToBase64String = fileToBase64String;
/**
 * Converts a File object to a Blob URL.
 *
 * @param {File} fileToConvert - The File object to convert to a Blob URL.
 *
 * @returns {string} The Blob URL representing the File object.
 */
function fileToBlobUrl(fileToConvert) {
    return URL.createObjectURL(fileToConvert);
}
exports.fileToBlobUrl = fileToBlobUrl;
