/**
 * Smoothly scrolls to a DOM element by its ID
 * @param {string} id - The ID of the target section
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Smoothly scrolls to the top of the window
 */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
