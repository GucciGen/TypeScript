var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
export function loadPosts(containerId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(POSTS_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = (yield response.json());
            renderPosts(containerId, data);
        }
        catch (error) {
            console.error("Failed to load posts:", error);
        }
    });
}
function renderPosts(containerId, posts) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container with id "${containerId}" not found`);
        return;
    }
    container.innerHTML = posts
        .map((p) => `
        <div class="post">
          <h3>${p.title}</h3>
          <p>${p.body}</p>
        </div>
      `)
        .join("");
}
//# sourceMappingURL=posts.js.map