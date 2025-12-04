import type { Post } from "../../types/post";

const POSTS_URL: string = "https://jsonplaceholder.typicode.com/posts";

export async function loadPosts(containerId: string): Promise<void> {
  try {
    const response: Response = await fetch(POSTS_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Post[] = (await response.json()) as Post[];
    renderPosts(containerId, data);
  } catch (error: unknown) {
    console.error("Failed to load posts:", error);
  }
}

function renderPosts(containerId: string, posts: Post[]): void {
  const container: HTMLElement | null = document.getElementById(containerId);

  if (!container) {
    console.warn(`Container with id "${containerId}" not found`);
    return;
  }

  container.innerHTML = posts
    .map(
      (p: Post): string => `
        <div class="post">
          <h3>${p.title}</h3>
          <p>${p.body}</p>
        </div>
      `
    )
    .join("");
}
