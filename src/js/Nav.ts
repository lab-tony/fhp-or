// -----------
// Mobile Navigation as Class (Module)
// -----------

/**
 * Class to manage the mobile navigation, including opening, closing, and toggling the navigation menu, as well as handling accessibility attributes.
 * The class ensures that the mobile navigation is closed on page load for better accessibility and user experience.
 *
 * isOpen {boolean}: whether the mobile navigation is open or closed.
 * toggleClass {string}: CSS class that is added to the navigation element when it is open to trigger animation.
 */
export class Nav {
  readonly nav = document.querySelector<HTMLElement>('[data-js-mobile-nav]');
  readonly toggleBtn = document.querySelector<HTMLElement>(
    '[data-js-nav-toggle]'
  );
  private isOpen = false;
  readonly toggleClass = 'js-is-open';

  constructor() {
    if (!this.nav || !this.toggleBtn) {
      console.error('Nav.js: Navigation element or toggle button not found.');
      return;
    }

    this.init();
  }

  private init(): void {
    // Use event listener to toggle mobile navigation
    this.toggleBtn?.addEventListener('click', () => this.toggle());

    // Use event listener to close mobile navigation when Escape key is pressed
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Ensure mobile navigation is closed on page load
    this.close();
  }

  /**
   * Functions to open and close the mobile navigation, as well as toggle between the two states.
   */
  public open(): void {
    this.toggleBtn?.setAttribute('aria-expanded', 'true');
    this.nav?.classList.add(this.toggleClass);
    this.nav?.removeAttribute('aria-hidden');

    this.nav?.querySelectorAll('a').forEach((link) => {
      link.removeAttribute('tabindex');
    });

    this.isOpen = true;
  }

  /**
   * Closes the mobile navigation and updates the relevant attributes and state.
   */
  public close(): void {
    this.toggleBtn?.setAttribute('aria-expanded', 'false');
    this.nav?.classList.remove(this.toggleClass);
    this.nav?.setAttribute('aria-hidden', 'true');

    this.nav?.querySelectorAll('a').forEach((link) => {
      link.setAttribute('tabindex', '-1');
    });

    this.isOpen = false;
  }

  /**
   * Toggles the mobile navigation between open and closed states based on the current state.
   */
  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
