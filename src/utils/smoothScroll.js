export function smoothScrool() {
  window.scrollBy({
    top: document.documentElement.clientHeight,
    behavior: 'smooth',
  });
}
