/**
 * Checks if a given file has the expected type.
 *
 * @param {File} fileUploaded - The file to check its type.
 * @param {string} typeExpected - The expected type of the file.
 *
 * @returns {boolean} - A Promise that resolves to a boolean indicating whether the file has the expected type or not.
 */
export declare function checkFileType(fileUploaded: File, typeExpected: string): boolean;
/**
 * Converts a File object to a base64 string.
 *
 * @param {File} fileToConvert - The File object to convert.
 *
 * @returns {Promise<string>} - A Promise that resolves with the base64 string representation of the file.
 */
export declare function fileToBase64String(fileToConvert: File): Promise<string>;
/**
 * Converts a File object to a Blob URL.
 *
 * @param {File} fileToConvert - The File object to convert to a Blob URL.
 *
 * @returns {string} The Blob URL representing the File object.
 */
export declare function fileToBlobUrl(fileToConvert: File): string;
