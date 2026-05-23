// -----------
// DOM Selection & Navigation
// -----------

// Select elements
const byId = document.getElementById("main-nav");
console.log("By ID:", byId);

const byClass = document.getElementsByClassName("or-nav-item");
console.log("By Class:", byClass);

const byTag = document.getElementsByTagName("nav");
console.log("By Tag:", byTag);

// Loop through HTMLCollection
Array.from(byTag).forEach((nav) => {
  console.log("Loop through navs:", nav);
});

// Modern selectors
const queryOne = document.querySelector("#main-nav .or-nav-item:first-child"); // first match
console.log("Query One:", queryOne);

const queryAll = document.querySelectorAll("#main-nav .or-nav-item"); // all matches
console.log("Query All:", queryAll);

// Loop through NodeList
queryAll.forEach((item) => {
  console.log("Loop through node list:", item);
});

// -----------
// Navigating the DOM
// -----------
const element = document.querySelector(".or-nav-item:nth-child(2)");
console.log("Selected Element:", element);

// Parent
const parent = element.parentElement;
console.log("Parent:", parent);

const closestNav = element.closest("nav");
console.log("Closest Nav:", closestNav);

// Children
const children = element.children;
console.log("Children:", children);

const firstChild = element.firstElementChild;
console.log("First Child:", firstChild);

const lastChild = element.lastElementChild;
console.log("Last Child:", lastChild);

// Siblings
const nextSibling = element.nextElementSibling;
console.log("Next Sibling:", nextSibling);

const previousSibling = element.previousElementSibling;
console.log("Previous Sibling:", previousSibling);
