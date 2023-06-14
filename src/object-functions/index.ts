//Utils

/**
 * Retrieves the values of an object inside an array.
 *
 * @param {object} object The object to retrieve values from.
 *
 * @returns {any[]} An array containing the property values of the object.
 */
export function getObjectValues(object: object): any[] {
  //We check that the object passed is indeed an object
  const argumentIsNotAnObject: boolean =
    typeof object !== "object" || Array.isArray(object);

  if (argumentIsNotAnObject) {
    //Returns the property values of the object in an array
    throw new Error("Argument passed is not an object");
  }
  return Object.values(object);
}

/**
 * Retrieves the properties themselves of an object inside an array.
 *
 * @param {object} object The object to retrieve properties from.
 *
 * @returns An array containing the property names of the object.
 */
export function getObjectProperties(object: object): any[] {
  //We check that the object passed is indeed an object
  const argumentIsNotAnObject: boolean =
    typeof object !== "object" || Array.isArray(object);

  if (argumentIsNotAnObject) {
    //Returns the property names of the object in an array
    throw new Error("Argument passed is not an object");
  }
  return Object.keys(object);
}

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
export function getObjectEntries(object: object): any[] {
  //We check that the object passed is indeed an object
  const argumentIsNotAnObject: boolean =
    typeof object !== "object" || Array.isArray(object);

  if (argumentIsNotAnObject) {
    //Returns the property names and its values in pair inside an array
    throw new Error("Argument passed is not an object");
  }
  return Object.entries(object);
}

/**
 * Returns a random property from the provided object.
 *
 * @param {object} object - The object to get a random property from.
 *
 * @throws {Error} If the argument is not an object.
 *
 * @returns {string} A random property from the provided object.
 */
export function getRandomPropertyFromObject(object: object): string {
  const isNotAnObject: boolean =
    typeof object !== "object" || Array.isArray(object);
  if (isNotAnObject) {
    throw new Error("Unexpected argument value passed, value is not an object");
  }

  const properties: string[] = getObjectProperties(object);

  const randomIndex: number = Math.random() * properties.length - 1;

  const randomProperty: string = properties[randomIndex];

  return randomProperty;
}
