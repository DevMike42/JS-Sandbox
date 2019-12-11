let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes of ul
val = list.childNodes;
// Returns a Nodelist including text nodes (when li tag starts on new line)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
// Node type list
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype



// Get children element nodes
val = list.children;
// Returns the elements only as an HTML Collection
val = list.children[0];
val = list.children[1];
val = list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children;
val = list.children[3].children[0];
val = list.children[3].children[0].id = 'test-link';

// First Child
val = list.firstChild; // Returns text node
val = list.firstElementChild; // Returns first element

// Last Child
val = list.lastChild; // Returns text node
val = list.lastElementChild; // Returns first element

// Count Child Elements
val = list.childElementCount;

// Get partent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling; // Returns a node
val = listItem.nextElementSibling; // Returns next Element

// Get previous sibling
val = listItem.previousSibling; // Returns a node
val = listItem.previousElementSibling; // Returns next Element 




console.log(val);