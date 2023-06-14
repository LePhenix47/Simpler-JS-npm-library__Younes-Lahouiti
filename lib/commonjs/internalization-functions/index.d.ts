/**
 * Returns the real length of a string, taking into account grapheme clusters instead of the codepoints
 *
 * [Here's a video made by Wes Bos explaining it](https://youtube.com/shorts/_7bOCOOBYPE?feature=share)
 *
 * ⚠ Does not currently work in some browsers, [check here to know which ones are supported](https://caniuse.com/?search=Intl.Segmenter) ⚠
 *
 * This function uses a regular expression to match grapheme clusters instead of the `Intl.Segmenter` API which is not fully supported by all browsers as of 21/04/2023 yet.
 *
 * @param {string} string - The string to measure
 * @returns {number} The real length of the string, in grapheme clusters
 * Once it is fully supported, the commented out code can be used instead for more accurate results.
 */
export declare function getRealStringLength(string: string): number;
/**
 * Formats a number by separating every thousand with a format from the user's locale.
 * If no locale is specified, it uses the default locale of the user's browser.
 *
 *  *example*:
 * - The user lives in Italy and we have:
 * `const number = 1_930 → returns "1.930"`
 *
 * - If they lived in the US and we have:
 *
 *`const number = 1_930 → returns "1,930"`
 *
 *
 * @param {number} number
 * @returns
 */
export declare function formatSignificantDigitsNumber(number: number, locale?: string | undefined): string;
/**
 *
 * Function that formats currency values by the user's locale
 *
 * @param {number} number - The number to format
 * @param {string} currencyType - The currency type to format the number in (default is "USD")
 * @param {Object} options - An optional object of options to customize the number format
 *
 * @returns {string} The formatted currency value
 */
export declare function formatCurrencyValueNumber(number: number, locale?: string | undefined, currencyType?: string, options?: Intl.NumberFormatOptions): string;
/**
 *
 * Formats a date object according to the user's locale and specified options using the `Intl.DateTimeFormat` API
 *
 * @param {Date} unformattedDateObject - The Date object to format
 * @param {string} locale - The locale to use for formatting (optional)
 * @param {Object} options - The options object to pass to the formatter (optional)
 *
 * @returns {string} The formatted date string
 * @throws {string} If the first argument is not a Date object
 */
export declare function formatDate(unformattedDateObject: Date, locale: string | undefined, options: any): string;
/**
 *
 * Returns a string representing the relative time format of the input date.
 *
 * @param {Date} relativeDateInput - The date to be transformed into a relative time format.
 * @param {string} [locale] - A string with a BCP 47 language tag (i.e: `"en-US"`), or an array of such strings.
 * @param {Intl.RelativeTimeFormatOptions} [options] - An optional object with configuration options for the Intl.RelativeTimeFormat.
 *
 * Can be either these values for each property:
 * ```js
 * {
 *     localeMatcher: "best fit" | "lookup";
 *     numeric: "always" | "auto";
 *     style: "long" | "narrow" |; "short";
 * }
 *
 * ```
 *
 * @returns {string} A string representing the relative time format of the input date.
 */
export declare function formatRelativeTime(relativeDateInput: Date, locale?: string, options?: Intl.RelativeTimeFormatOptions): any;
/**
 *Returns the relative time period based on the input in seconds.
 *
 *@param {number} dateInSeconds - The input date in seconds.
 *@returns {object} - The relative time period in string format.
 */
export declare function getRelativeTimePeriod(dateInSeconds: number): {
    value: number;
    unit: Intl.RelativeTimeFormatUnit;
};
