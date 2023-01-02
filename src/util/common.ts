export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

export function getRemInPx(): number {
  const htmlElement = document.querySelector('html');
  if(!htmlElement) {
    return 16;
  }
  const fontSize = getComputedStyle(htmlElement).fontSize;
  return parseFloat(fontSize);
}
