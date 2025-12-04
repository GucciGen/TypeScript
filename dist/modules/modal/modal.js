export function setupModal(modalId, openButtonId, closeButtonId) {
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openButtonId);
    const closeBtn = document.getElementById(closeButtonId);
    if (!modal) {
        console.warn(`Modal with id "${modalId}" not found`);
        return;
    }
    openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener("click", (_event) => {
        modal.classList.add("active");
    });
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", (_event) => {
        modal.classList.remove("active");
    });
}
//# sourceMappingURL=modal.js.map