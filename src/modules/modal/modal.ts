export function setupModal(
  modalId: string,
  openButtonId: string,
  closeButtonId: string
): void {
  const modal: HTMLElement | null = document.getElementById(modalId);
  const openBtn: HTMLElement | null = document.getElementById(openButtonId);
  const closeBtn: HTMLElement | null = document.getElementById(closeButtonId);

  if (!modal) {
    console.warn(`Modal with id "${modalId}" not found`);
    return;
  }

  openBtn?.addEventListener("click", (_event: MouseEvent): void => {
    modal.classList.add("active");
  });

  closeBtn?.addEventListener("click", (_event: MouseEvent): void => {
    modal.classList.remove("active");
  });
}
