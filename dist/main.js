"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.classList.add("active");
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.classList.remove("active");
});
window.addEventListener("scroll", () => {
    console.log("Scroll position:", window.scrollY);
});
function loadPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.getElementById("posts");
        const res = yield fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = yield res.json();
        if (container) {
            container.innerHTML = data
                .map((p) => `
        <div class="post">
            <h3>${p.title}</h3>
            <p>${p.body}</p>
        </div>`)
                .join("");
        }
    });
}
loadPosts();
//# sourceMappingURL=main.js.map