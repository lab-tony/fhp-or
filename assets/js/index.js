// -----------
// Mobile Navigation
// -----------

const nav = document.querySelector("#main-nav");
const button = document.querySelector("#main-nav-toggle");
let isOpen = false;
const isOpenClass = "js-is-open";

// Use event listener to toggle mobile navigation
button.addEventListener("click", () => toggle());

// Use event listener to close mobile navigation when Escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOpen) {
    close();
  }
});

/**
 * Opens the mobile navigation and updates the relevant attributes and state.
 */
function open() {
  nav.classList.add(isOpenClass);
  nav.removeAttribute("aria-hidden");

  nav.querySelectorAll("a").forEach((link) => {
    link.removeAttribute("tabindex");
  });

  isOpen = true;
}

/**
 * Closes the mobile navigation and updates the relevant attributes and state.
 */
function close() {
  nav.classList.remove(isOpenClass);
  nav.setAttribute("aria-hidden", "true");

  nav.querySelectorAll("a").forEach((link) => {
    link.setAttribute("tabindex", "-1");
  });

  isOpen = false;
}

/**
 * Toggles the mobile navigation between open and closed states based on the current state.
 */
function toggle() {
  button.setAttribute("aria-expanded", !isOpen);
  isOpen ? close() : open();
}

close(); // Ensure mobile navigation is closed on page load
