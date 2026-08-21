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

function formatDateNumeric(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${mm}.${dd}.${yy}`;
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

/* ---- The Log: a stacked pile of books, newest on top ---- */
const BOOK_TONES = ["#5c2430", "#5a3825", "#454f30", "#2f2a22", "#7a5230", "#4a2e1f"];
const SPINE_ROTATIONS = [-2, 1.5, -1, 2, -1.5, 1];
const SLAB_TILTS = [-1.1, 0.8, -0.6, 1.3, -1.6, 0.5, -0.9, 1.1];

function chronoPosts() {
  return [...posts].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function numberedChronoPosts() {
  return chronoPosts().filter(p => p.numbered !== false);
}

function renderBookStack() {
  const stack = document.getElementById("book-stack");
  if (!stack) return;
  const chrono = chronoPosts();
  if (chrono.length === 0) {
    stack.innerHTML = `<p style="opacity:0.6; padding-bottom: 20px;">There are no entries yet. The journey begins August 22, 2026.</p>`;
    return;
  }
  const numbered = numberedChronoPosts();
  const newestFirst = [...chrono].reverse();
  stack.innerHTML = newestFirst.map((post, i) => {
    const chronoIndex = chrono.length - 1 - i;
    const isNumbered = post.numbered !== false;
    const numLabel = isNumbered
      ? `N&deg; ${String(numbered.findIndex(p => p.slug === post.slug) + 1).padStart(2, "0")}`
      : "Writing";
    const color = BOOK_TONES[chronoIndex % BOOK_TONES.length];
    const tilt = SLAB_TILTS[i % SLAB_TILTS.length];
    const delay = (i * 0.05).toFixed(2);
    const marginTop = i === 0 ? "0px" : "-14px";
    const z = newestFirst.length - i;
    return `
      <button class="book-slab" data-slug="${post.slug}"
        style="background-color:${color}; --tilt:${tilt}deg; --delay:${delay}s; margin-top:${marginTop}; z-index:${z};"
        aria-haspopup="dialog" aria-label="Open entry: ${post.title}, ${formatDate(post.date)}">
        <span class="slab-pages" aria-hidden="true"></span>
        <span class="slab-face">
          <span class="slab-num${isNumbered ? "" : " slab-num-writing"}">${numLabel}</span>
          <span class="slab-date">${formatDateNumeric(post.date)}</span>
          <span class="slab-title">${post.title}</span>
        </span>
      </button>
    `;
  }).join("");

  stack.querySelectorAll(".book-slab").forEach(btn => {
    btn.addEventListener("click", () => openBook(btn.dataset.slug));
  });
}

function renderBookPageContent(post, kickerLabel) {
  const bodyParas = post.body && post.body.length ? post.body : [post.excerpt];
  const bodyHtml = bodyParas.map(p => `<p>${p}</p>`).join("");

  const photos = post.photos || [];
  const feature = photos[0];
  const restPhotos = photos.slice(1);
  const useHeaderPhoto = !!post.headerPhoto && !!feature;

  const prayerBlock = (post.prayerRequests && post.prayerRequests.length)
    ? `<aside class="prayer-marginalia">
        <span class="marginalia-label">In Prayer</span>
        <ul>${post.prayerRequests.map(r => `<li>${r}</li>`).join("")}</ul>
      </aside>`
    : "";

  const closingBlock = (post.closing && post.closing.length)
    ? `<div class="body-text closing-text">${post.closing.map(p => `<p>${p}</p>`).join("")}</div>`
    : "";

  const headerPhotoBlock = useHeaderPhoto
    ? `<a class="header-photo" href="photos.html">
        <img src="${feature.src}" alt="${feature.caption}" loading="lazy">
      </a>`
    : "";

  const galleryPhotos = useHeaderPhoto ? restPhotos : photos;
  const galleryBlock = galleryPhotos.length
    ? `<div class="page-photo-gallery">${galleryPhotos.map((photo, i) => `
        <a class="gallery-photo${i === 0 ? " gallery-photo-feature" : ""}" href="photos.html" style="--r:${SPINE_ROTATIONS[i % SPINE_ROTATIONS.length]}deg">
          <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
          <span class="caption">${photo.caption}</span>
        </a>
      `).join("")}</div>`
    : "";

  return `
    ${headerPhotoBlock}
    <div class="page-kicker">${kickerLabel} &mdash; ${formatDate(post.date)}</div>
    <h2>${post.title}</h2>
    <div class="body-text">${bodyHtml}</div>
    ${closingBlock}
    ${prayerBlock}
    ${galleryBlock}
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
  const isNumbered = post.numbered !== false;
  const kickerLabel = isNumbered
    ? `Log N° ${String(numberedChronoPosts().findIndex(p => p.slug === slug) + 1).padStart(2, "0")}`
    : "A Writing";
  const color = BOOK_TONES[idx % BOOK_TONES.length];

  cover.style.backgroundColor = color;
  document.getElementById("book-cover-kicker").textContent = kickerLabel;
  document.getElementById("book-cover-title").textContent = post.title;
  document.getElementById("book-cover-date").textContent = formatDate(post.date);
  pageContent.innerHTML = renderBookPageContent(post, kickerLabel);
  pageContent.classList.remove("revealed");

  cover.classList.remove("opening");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", `#${slug}`);

  requestAnimationFrame(() => {
    setTimeout(() => cover.classList.add("opening"), 220);
    setTimeout(() => pageContent.classList.add("revealed"), 220 + 1250);
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
  const closeBtn = document.getElementById("book-back");
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
let lightboxPhotos = [];

function renderPhotoGrid() {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;
  const all = sortedPosts();
  const cards = [];
  lightboxPhotos = [];
  let i = 0;
  all.forEach(post => {
    (post.photos || []).forEach(photo => {
      const rot = SPINE_ROTATIONS[i % SPINE_ROTATIONS.length];
      const index = i;
      i++;
      lightboxPhotos.push({ src: photo.src, caption: photo.caption, postTitle: post.title, postSlug: post.slug });
      cards.push(`
        <button class="polaroid" type="button" data-index="${index}" style="transform: rotate(${rot}deg);">
          <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
          <div class="caption">${photo.caption}<span class="from-post">From: ${post.title}</span></div>
        </button>
      `);
    });
  });
  grid.innerHTML = cards.length ? cards.join("") : `<p style="opacity:0.6">There are no photos yet.</p>`;

  grid.querySelectorAll(".polaroid").forEach(btn => {
    btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index)));
  });
}

let lightboxIndex = 0;

function showLightboxPhoto(index) {
  const photo = lightboxPhotos[index];
  if (!photo) return;
  lightboxIndex = index;
  document.getElementById("lightbox-img").src = photo.src;
  document.getElementById("lightbox-img").alt = photo.caption;
  document.getElementById("lightbox-caption").textContent = photo.caption;
  const source = document.getElementById("lightbox-source");
  source.href = `log.html#${photo.postSlug}`;
  source.textContent = `From: ${photo.postTitle} →`;
}

function openLightbox(index) {
  const overlay = document.getElementById("lightbox");
  if (!overlay) return;
  showLightboxPhoto(index);
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function lightboxStep(delta) {
  if (!lightboxPhotos.length) return;
  const next = (lightboxIndex + delta + lightboxPhotos.length) % lightboxPhotos.length;
  showLightboxPhoto(next);
}

function initLightbox() {
  const overlay = document.getElementById("lightbox");
  if (!overlay) return;
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => lightboxStep(-1));
  document.getElementById("lightbox-next").addEventListener("click", () => lightboxStep(1));
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxStep(-1);
    if (e.key === "ArrowRight") lightboxStep(1);
  });
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

/* ---- Home: nav links type themselves in on the first load ---- */
function initNavTypewriter() {
  if (!document.querySelector(".hero")) return;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const links = [...document.querySelectorAll("nav .navlink")];
  if (!links.length) return;
  const originals = links.map(a => a.textContent);
  links.forEach(a => { a.textContent = ""; });

  let linkIndex = 0;
  function typeLink() {
    if (linkIndex >= links.length) return;
    const a = links[linkIndex];
    const text = originals[linkIndex];
    a.classList.add("typing");
    let i = 0;
    function tick() {
      a.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(tick, 35);
      } else {
        a.classList.remove("typing");
        linkIndex++;
        setTimeout(typeLink, 120);
      }
    }
    tick();
  }
  typeLink();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomeLatest();
  renderBookStack();
  renderPhotoGrid();
  initBookOverlay();
  initLightbox();
  initNavTypewriter();
  initSignup();
  initSignupFooterAvoidance();
});
