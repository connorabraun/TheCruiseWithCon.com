/* =========================================================
   CRUISE WITH CON — Site Logic
   Reads from js/data.js and renders the pages that depend
   on log entries: Home (latest entry), The Log (full list),
   and Photographs (every photo, paired back to its entry).
   ========================================================= */

function sortedPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

/* ---- Home: latest entry teaser ---- */
function renderHomeLatest() {
  const slot = document.getElementById("latest-post-slot");
  if (!slot) return;
  const latest = sortedPosts()[0];
  if (!latest) {
    slot.innerHTML = `<p style="opacity:0.6">There are no entries yet. The journey begins August 22, 2026.</p>`;
    return;
  }
  slot.innerHTML = `
    <a href="log.html#${latest.slug}">
      <div class="post-date">${formatDate(latest.date)}</div>
      <div class="post-title">${latest.title}</div>
    </a>
  `;
}

/* ---- The Log: full chronological list ---- */
function renderLogList() {
  const container = document.getElementById("log-list");
  if (!container) return;
  const all = sortedPosts();
  if (all.length === 0) {
    container.innerHTML = `<p style="opacity:0.6">There are no entries yet. The journey begins August 22, 2026.</p>`;
    return;
  }
  container.innerHTML = all.map(post => `
    <article class="log-entry" id="${post.slug}">
      <div class="post-date">${formatDate(post.date)}</div>
      <h2><a href="#${post.slug}">${post.title}</a></h2>
      <p class="excerpt">${post.excerpt}</p>
      ${post.photos && post.photos.length
        ? `<a class="photo-count" href="photos.html">&mdash; ${post.photos.length} photo${post.photos.length > 1 ? "s" : ""} from this entry &rarr;</a>`
        : ""}
      ${post.prayerRequests && post.prayerRequests.length
        ? `<div class="prayer-note">
             <strong>If you don't have time to read, consider praying for:</strong><br>
             ${post.prayerRequests.join(" &middot; ")}
           </div>`
        : ""}
    </article>
  `).join("");
}

/* ---- Photographs: every photo, paired back to its entry ---- */
function renderPhotoGrid() {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;
  const all = sortedPosts();
  const cards = [];
  all.forEach(post => {
    (post.photos || []).forEach(photo => {
      cards.push(`
        <div class="photo-card">
          <figure>
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <figcaption>
              ${photo.caption}<br>
              <a class="from-post" href="log.html#${post.slug}">From: ${post.title} &rarr;</a>
            </figcaption>
          </figure>
        </div>
      `);
    });
  });
  grid.innerHTML = cards.length ? cards.join("") : `<p style="opacity:0.6">There are no photos yet.</p>`;
}

/* ---- Floating signup button + modal (shared across all pages) ---- */
function initSignup() {
  const btn = document.getElementById("signup-btn");
  const modal = document.getElementById("signup-modal");
  if (!btn || !modal) return;
  const close = modal.querySelector(".close-modal");
  btn.addEventListener("click", () => modal.classList.add("open"));
  close.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomeLatest();
  renderLogList();
  renderPhotoGrid();
  initSignup();
});
