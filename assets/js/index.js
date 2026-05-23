// -----------
// DOM Manipulation
// -----------

const box = document.querySelector(".box");

// Change text content
box.textContent = "Hello World";

// Change HTML content
box.innerHTML = "Getting Blue Text";

// Change styles
box.style.color = "blue";
box.style.backgroundColor = "lightblue";
box.style.padding = "10px";

// Add / remove classes
box.classList.add("active");
box.classList.remove("active");
box.classList.toggle("active");

// Set / get attributes
box.setAttribute("data-test", "123");
console.log(box.getAttribute("data-test"));

// Create new element
const newElement = document.createElement("p");
newElement.textContent = "I am new here!";

// Insert element
box.appendChild(newElement);

// Insert before another element
const another = document.createElement("span");
another.textContent = "Before paragraph";
box.insertBefore(another, newElement);

// Remove element
newElement.remove();

// Create multiple line HTML content with template literals and variables
const html = `
    <h2>Title</h2>
    ${newElement.textContent}
`;

box.innerHTML = html;
