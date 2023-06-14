"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectOptions = exports.replaceClass = exports.removeClass = exports.addClass = exports.disableElement = exports.enableElement = exports.replaceAttributeBy = exports.getAttribute = exports.modifyAttribute = exports.replaceChildInParent = exports.appendChildToParent = exports.setStyleProperty = exports.getClassListValues = exports.getSibling = exports.getComponentHost = exports.getAncestor = exports.getParent = exports.getChildren = exports.selectQueryAll = exports.selectQuery = exports.selectById = exports.selectByClass = void 0;
/**
 * Simpler version of `document.getElementsByClassName()`
 * Selects all elements with a given class name inside a given container or the whole document.
 *
 * @param {string} className - The class name of the elements to select.
 * @param {any} container - The parent element to search within.
 *
 * @returns {HTMLElement[]|[]} A collection of elements with the specified class name.
 */
function selectByClass(className, container) {
    var _a;
    var hasNoParentContainer = !container;
    if (hasNoParentContainer) {
        return Array.from(document.getElementsByClassName(className));
    }
    /**
     * We check if it's a web component, they always have a hyphen in their tag name
     */
    var containerIsWebComponent = (_a = container === null || container === void 0 ? void 0 : container.tagName) === null || _a === void 0 ? void 0 : _a.includes("-");
    if (containerIsWebComponent) {
        return Array.from(container.shadowRoot.getElementsByClassName(className));
    }
    return Array.from(container.getElementsByClassName(className));
}
exports.selectByClass = selectByClass;
/**
 * Simpler version of `document.getElementById()`
 * Selects an element with a given ID inside a given container or the whole document.
 *
 * @param {string} id - The ID of the element to select.
 * @param {any} container - The parent element to search within.
 *
 * @returns {HTMLElement} The element with the specified ID.
 */
function selectById(id, container) {
    var _a;
    var hasNoParentContainer = !container;
    if (hasNoParentContainer) {
        return document.getElementById(id);
    }
    /**
     * We check if it's a web component, they always have a hyphen in their tag name
     */
    var containerIsWebComponent = (_a = container === null || container === void 0 ? void 0 : container.tagName) === null || _a === void 0 ? void 0 : _a.includes("-");
    if (containerIsWebComponent) {
        return container.shadowRoot.getElementById(id);
    }
    return container.getElementById(id);
}
exports.selectById = selectById;
/**
 * A simplified version of `document.querySelector()`
 *
 * @param {string} query - CSS query of the HTML Element to select
 * @param {any} container - HTML Element to select the query from
 *
 * @returns {HTMLElement} - The element selected or `null` if the element doesn't exist
 */
function selectQuery(query, container) {
    var _a;
    var hasNoParentContainer = !container;
    if (hasNoParentContainer) {
        return document.querySelector(query);
    }
    /**
     * We check if it's a web component, they always have a hyphen in their tag name
     */
    var containerIsWebComponent = (_a = container === null || container === void 0 ? void 0 : container.tagName) === null || _a === void 0 ? void 0 : _a.includes("-");
    if (containerIsWebComponent) {
        return container.shadowRoot.querySelector(query);
    }
    return container.querySelector(query);
}
exports.selectQuery = selectQuery;
/**
 * A simplified version of `document.querySelectorAll()`
 *
 * @param {string} query - CSS query of the HTML Elements to select
 * @param {any} container - HTML Element to select the query from
 * @returns {HTMLElement[] | []} - An array with all the elements selected or `null` if the element doesn't exist
 */
function selectQueryAll(query, container) {
    var hasNoParentContainer = !container;
    if (hasNoParentContainer) {
        return Array.from(document.querySelectorAll(query));
    }
    var isWebComponent = container.tagName.includes("-");
    if (isWebComponent) {
        return Array.from(container.shadowRoot.querySelectorAll(query));
    }
    return Array.from(container.querySelectorAll(query));
}
exports.selectQueryAll = selectQueryAll;
/**
 * Function that returns an array containing all child nodes of an HTML element.
 *
 * @param {HTMLElement} elementOfReference The parent HTML element whose children to select.
 * @returns {HTMLElement[]} An array containing all child nodes of the parent element or null if the parent element has no children.
 */
function getChildren(elementOfReference) {
    return Array.from(elementOfReference.children);
}
exports.getChildren = getChildren;
/**
 * Returns the parent element of a given element.
 * @param {HTMLElement} elementOfReference - The child element for which to find the parent.
 * @returns {HTMLElement} - The parent element of the child element, or null if the parent cannot be found.
 */
function getParent(elementOfReference) {
    return elementOfReference.parentElement;
}
exports.getParent = getParent;
/**
 * Returns the closest ancestor element of a given HTML element based on a CSS selector.
 *
 * @param {HTMLElement} elementOfReference - The HTML element of reference.
 * @param {string} cssSelector - The CSS selector to use to select the ancestor element. Default is an empty string.
 *
 * @returns {HTMLElement|null} The closest ancestor element that matches the CSS selector, or null if no ancestor element matches the selector.
 */
function getAncestor(elementOfReference, cssSelector) {
    return elementOfReference.closest(cssSelector);
}
exports.getAncestor = getAncestor;
/**
 *Returns the host element of a web component given a reference element within it.
 *
 *@param {HTMLElement} elementOfReference - An element that is a child of the web component.
 *
 * @returns {ShadowRoot | null} - The host element of the web component.
 */
function getComponentHost(elementOfReference) {
    var rootNode = elementOfReference.getRootNode();
    var elementIsInShadowRoot = rootNode instanceof ShadowRoot;
    if (elementIsInShadowRoot) {
        return rootNode;
    }
    return null;
}
exports.getComponentHost = getComponentHost;
/**
 * Returns the next sibling element of the specified element.
 *
 * @param {HTMLElement} elementOfReference - The reference element whose sibling to return.
 * @returns {any | null} The next sibling element, or null if there is none.
 */
function getSibling(elementOfReference) {
    return elementOfReference.nextElementSibling;
}
exports.getSibling = getSibling;
/**
 *
 * Returns an array of strings representing the classes of the specified element.
 *
 * @param {HTMLElement} elementOfReference - The element to retrieve class values from.
 *
 * @returns An array of strings representing the classes of the specified element.
 */
function getClassListValues(elementOfReference) {
    return Array.from(elementOfReference.classList);
}
exports.getClassListValues = getClassListValues;
/**
 * Sets the value of a specified CSS property for the given HTML element.
 *
 * @param {string} property - The name of the style property to set.
 * @param {any} value - The value to set for the specified style property.
 * @param {any} [element=document.body] - The HTML element to set the style property for, ***NOT mandatory***.

* @returns {void}
 */
function setStyleProperty(property, value, element) {
    if (element === void 0) { element = document.body; }
    var stringifiedValue = value.toString();
    return element.style.setProperty(property, stringifiedValue);
}
exports.setStyleProperty = setStyleProperty;
/**
 * Appends a child element to a parent element
 *
 * @param {any} childElement - The child element to append to the parent element
 * @param {any} parentElement - The parent element to which the child element should be appended
 * @returns {HTMLElement} - The appended child element
 */
function appendChildToParent(childElement, parentElement) {
    return parentElement.appendChild(childElement);
}
exports.appendChildToParent = appendChildToParent;
/**
 * Replaces an old child element with a new child element in a given parent element
 * @param {any} parentElement - The parent element where the child will be replaced
 * @param {any} newChild - The new child element to be inserted
 * @param {any} oldChild - The old child element to be removed
 * @returns {void} - The replaced child element
 */
function replaceChildInParent(parentElement, newChild, oldChild) {
    oldChild.remove();
    appendChildToParent(newChild, parentElement);
}
exports.replaceChildInParent = replaceChildInParent;
/**
 * Adds or modifies an attribute to the given element
 *
 * @param {HTMLElement} element The element to add the attribute to
 * @param {string} property The name of the attribute to add
 * @param {any} value The value to set the attribute to
 */
function modifyAttribute(property, value, element) {
    element.setAttribute(property, value.toString());
}
exports.modifyAttribute = modifyAttribute;
/**
 * Retrieves the value of the specified attribute from the given element
 *
 * @param {string} attributeName - The name of the attribute to retrieve
 * @param {HTMLElement} element - The element from which to retrieve the attribute
 *
 * @returns {string} The value of the attribute
 */
function getAttribute(attributeName, element) {
    return element.getAttribute(attributeName);
}
exports.getAttribute = getAttribute;
/**
 * Removes an attribute from an element and sets a new attribute in its place.
 *
 * @param {HTMLElement} element - The element from which to remove the attribute.
 * @param {string} oldAttribute - The name of the attribute to remove.
 * @param {string} newAttribute - The name of the new attribute to set.
 */
function replaceAttributeBy(element, oldAttribute, newAttribute) {
    element.removeAttribute(oldAttribute);
    element.setAttribute(newAttribute, "");
}
exports.replaceAttributeBy = replaceAttributeBy;
/**
 * Enables the specified element by removing the "disabled" attribute and setting the "enabled" attribute.
 *
 * @param {HTMLElement} element - The element to enable.
 */
function enableElement(element) {
    replaceAttributeBy(element, "disabled", "enabled");
}
exports.enableElement = enableElement;
/**
 * Disables the specified element by removing the "enabled" attribute and setting the "disabled" attribute.
 *
 * @param {HTMLElement} element - The element to disable.
 */
function disableElement(element) {
    replaceAttributeBy(element, "enabled", "disabled");
}
exports.disableElement = disableElement;
/**
 * Adds a class name to a given element's class list
 * @param {HTMLElement} element - The element to add the class to
 * @param {string} className - The class name to add
 *
 * @returns {void}
 */
function addClass(element, className) {
    element.classList.add(className);
}
exports.addClass = addClass;
/**
 * Removes a class name from a given element's class list
 * @param {HTMLElement} element - The element to remove the class from
 * @param {string} className - The class name to remove
 *
 * @returns {void}
 */
function removeClass(element, className) {
    element.classList.remove(className);
}
exports.removeClass = removeClass;
/**
 * Replaces an old class name with a new class name in a given element's class list
 * @param {HTMLElement} element - The element to replace the class name in
 * @param {string} oldClassName - The old class name to replace
 * @param {string} newClassName - The new class name to replace with
 *
 * @returns {void}
 */
function replaceClass(element, oldClassName, newClassName) {
    element.classList.replace(oldClassName, newClassName);
}
exports.replaceClass = replaceClass;
function getSelectOptions(selectElement, valuesOnly) {
    if (valuesOnly === void 0) { valuesOnly = false; }
    var isNotSelectElement = selectElement.tagName !== "SELECT";
    if (isNotSelectElement) {
        throw new Error("Error: Element passed in argument is not a <select multiple>");
    }
    var selectedOptionsArray = Array.from(selectElement.selectedOptions);
    if (valuesOnly) {
        //@ts-ignore
        selectedOptionsArray = selectedOptionsArray.map(function (option) {
            return option.value;
        });
    }
    return selectedOptionsArray;
}
exports.getSelectOptions = getSelectOptions;
