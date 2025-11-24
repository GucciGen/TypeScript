const modal: HTMLElement | null = document.getElementById("myModal");
const openBtn: HTMLElement | null = document.getElementById("openModal");
const closeBtn: HTMLElement | null = document.getElementById("closeModal");

openBtn?.addEventListener("click", (): void => {
  modal?.classList.add("active");
});

closeBtn?.addEventListener("click", (): void => {
  modal?.classList.remove("active");
});

window.addEventListener("scroll", (): void => {
  console.log("Scroll position:", window.scrollY);
});

async function loadPosts(): Promise<void> {
  const container: HTMLElement | null = document.getElementById("posts");

  const res: Response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data: Array<{ title: string; body: string }> = await res.json();

  if (container) {
    container.innerHTML = data
      .map(
        (p) => `
        <div class="post">
            <h3>${p.title}</h3>
            <p>${p.body}</p>
        </div>`
      )
      .join("");
  }
}

loadPosts();
