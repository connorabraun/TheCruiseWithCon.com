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

/* ---- The Log: bookshelf ---- */
const SPINE_COLORS = ["#0a1930", "#5c2a2a", "#233d2e", "#142842", "#4a3520"];
const SPINE_ROTATIONS = [-2, 1.5, -1, 2, -1.5, 1];

function chronoPosts() {
  return [...posts].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function renderBookshelf() {
  const shelf = document.getElementById("bookshelf");
  if (!shelf) return;
  const all = chronoPosts();
  if (all.length === 0) {
    shelf.innerHTML = `<p style="opacity:0.6; padding-bottom: 20px;">There are no entries yet. The journey begins August 22, 2026.</p>`;
    return;
  }
  shelf.innerHTML = all.map((post, i) => {
    const color = SPINE_COLORS[i % SPINE_COLORS.length];
    const heightVariance = 220 + (i % 3) * 14;
    const delay = (i * 0.06).toFixed(2);
    return `
      <button class="book-spine" data-slug="${post.slug}"
        style="background:${color}; height:${heightVariance}px; animation-delay:${delay}s;"
        aria-haspopup="dialog" aria-label="Open entry: ${post.title}, ${formatDate(post.date)}">
        <span class="spine-glint"></span>
        <span class="spine-date">${formatDate(post.date)}</span>
      </button>
    `;
  }).join("");

  shelf.querySelectorAll(".book-spine").forEach(btn => {
    btn.addEventListener("click", () => openBook(btn.dataset.slug));
  });
}

function renderBookPageContent(post, num) {
  const bodyParas = post.body && post.body.length ? post.body : [post.excerpt];
  const bodyHtml = bodyParas.map(p => `<p>${p}</p>`).join("");

  const photos = post.photos || [];
  const feature = photos[0];
  const restPhotos = photos.slice(1);

  const prayerBlock = (post.prayerRequests && post.prayerRequests.length)
    ? `<aside class="prayer-marginalia">
        <span class="marginalia-label">In Prayer</span>
        <ul>${post.prayerRequests.map(r => `<li>${r}</li>`).join("")}</ul>
      </aside>`
    : "";

  const featureBlock = feature
    ? `<a class="feature-photo" href="photos.html">
        <img src="${feature.src}" alt="${feature.caption}" loading="lazy">
        <span class="feature-caption">${feature.caption}</span>
      </a>`
    : "";

  const stripBlock = restPhotos.length
    ? `<div class="photo-strip">${restPhotos.map((photo, i) => `
        <a class="strip-photo" href="photos.html" style="--r:${SPINE_ROTATIONS[(i + 1) % SPINE_ROTATIONS.length]}deg">
          <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
          <span class="caption">${photo.caption}</span>
        </a>
      `).join("")}</div>`
    : "";

  return `
    <div class="page-kicker">Log N&deg; ${num} &mdash; ${formatDate(post.date)}</div>
    <div class="page-layout">
      <div class="page-copy">
        <h2>${post.title}</h2>
        <div class="body-text">${bodyHtml}</div>
        ${prayerBlock}
      </div>
      ${featureBlock}
    </div>
    ${stripBlock}
  `;
}

let activeBook = null;

function openBook(slug) {
  const post = posts.find(p => p.slug === slug);
  if (!post) return;
  activeBook = slug;

  const overlay = document.getElementById("book-overlay");
  const cover = document.getElementById("book-cover");
  const pageContent = document.getElementById("book-page-content");
  const idx = chronoPosts().findIndex(p => p.slug === slug);
  const num = String(idx + 1).padStart(2, "0");
  const color = SPINE_COLORS[idx % SPINE_COLORS.length];

  cover.style.background = color;
  document.getElementById("book-cover-kicker").textContent = `Log N° ${num}`;
  document.getElementById("book-cover-title").textContent = post.title;
  document.getElementById("book-cover-date").textContent = formatDate(post.date);
  pageContent.innerHTML = renderBookPageContent(post, num);
  pageContent.classList.remove("revealed");

  cover.classList.remove("opening");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", `#${slug}`);

  requestAnimationFrame(() => {
    setTimeout(() => cover.classList.add("opening"), 220);
    setTimeout(() => pageContent.classList.add("revealed"), 220 + 850);
  });
}

function closeBook() {
  const overlay = document.getElementById("book-overlay");
  const cover = document.getElementById("book-cover");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  history.replaceState(null, "", location.pathname);
  setTimeout(() => {
    cover.classList.remove("opening");
  }, 360);
  activeBook = null;
}

function initBookOverlay() {
  const overlay = document.getElementById("book-overlay");
  const closeBtn = document.getElementById("book-close");
  if (!overlay || !closeBtn) return;
  closeBtn.addEventListener("click", closeBook);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeBook(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && activeBook) closeBook(); });

  const hash = decodeURIComponent(location.hash.replace("#", ""));
  if (hash && posts.some(p => p.slug === hash)) {
    setTimeout(() => openBook(hash), 300);
  }
}

/* ---- Photographs: every photo, as polaroids paired back to its entry ---- */
function renderPhotoGrid() {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;
  const all = sortedPosts();
  const cards = [];
  let i = 0;
  all.forEach(post => {
    (post.photos || []).forEach(photo => {
      const rot = SPINE_ROTATIONS[i % SPINE_ROTATIONS.length];
      i++;
      cards.push(`
        <a class="polaroid" href="log.html#${post.slug}" style="transform: rotate(${rot}deg);">
          <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
          <div class="caption">${photo.caption}<span class="from-post">From: ${post.title}</span></div>
        </a>
      `);
    });
  });
  grid.innerHTML = cards.length ? cards.join("") : `<p style="opacity:0.6">There are no photos yet.</p>`;
}

/* ---- Floating signup button + modal (shared across all pages) ---- */
function encodeFormData(form) {
  return new URLSearchParams(new FormData(form)).toString();
}

function initSignup() {
  const btn = document.getElementById("signup-btn");
  const modal = document.getElementById("signup-modal");
  if (!btn || !modal) return;
  const close = modal.querySelector(".close-modal");
  const form = document.getElementById("signup-form");
  const title = document.getElementById("signup-title");
  const intro = document.getElementById("modal-intro");
  const successMsg = document.getElementById("form-success");
  const errorMsg = document.getElementById("form-error");

  btn.addEventListener("click", () => modal.classList.add("open"));
  close.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });

  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.classList.remove("show");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData(form),
    })
      .then(() => {
        title.textContent = "Success!";
        title.classList.add("success-title");
        intro.style.display = "none";
        form.style.display = "none";
        successMsg.classList.add("show");
      })
      .catch(() => {
        errorMsg.classList.add("show");
      });
  });
}

/* ---- Fade the floating signup button out before it can overlap the footer ---- */
function initSignupFooterAvoidance() {
  const btn = document.getElementById("signup-btn");
  const footer = document.querySelector("footer");
  if (!btn || !footer || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        btn.classList.toggle("near-footer", entry.isIntersecting);
      });
    },
    { rootMargin: "0px 0px -40px 0px" }
  );
  observer.observe(footer);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomeLatest();
  renderBookshelf();
  renderPhotoGrid();
  initBookOverlay();
  initSignup();
  initSignupFooterAvoidance();
});
