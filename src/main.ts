import { setupModal } from "./modules/modal/modal.js";
import { initScrollLogger } from "./modules/scroll/scrollLogger.js";
import { loadPosts } from "./modules/posts/posts.js";

document.addEventListener("DOMContentLoaded", (): void => {
  setupModal("myModal", "openModal", "closeModal");
  initScrollLogger();
  void loadPosts("postsContainer");
});
