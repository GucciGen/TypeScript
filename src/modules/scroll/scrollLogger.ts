export function initScrollLogger(): void {
  window.addEventListener("scroll", (_event: Event): void => {
    console.log("Scroll position:", window.scrollY);
  });
}
