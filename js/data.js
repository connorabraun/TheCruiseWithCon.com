/* =========================================================
   CRUISE WITH CON — Data Source
   This is the single place you'll edit to publish a new
   log entry. Home, The Ship Log, and Photographs all read
   from this same array, so adding an entry here updates
   all three pages automatically — nothing else to touch.

   HOW TO ADD A NEW ENTRY:
   1. Add a new object to the array below.
   2. Give it a unique "slug" (used in the URL, no spaces).
   3. Fill in title, date (YYYY-MM-DD), excerpt, body, and photos.
      - "excerpt" is a short 1-2 sentence summary (used on
        the Home page teaser).
      - "body" is the full entry — an array of paragraphs,
        one string per paragraph. This is what appears when
        someone opens the book on the Ship Log page.
   4. Add prayerRequests if you have any for this entry —
      leave the array empty [] if not.
   5. Save the file. That's it — Home, Ship Log, and
      Photographs update automatically.

   NON-NUMBERED WRITINGS:
   For a standalone piece that isn't part of the dated log
   sequence (a manifesto, a reflection, anything you don't
   want counted as "Log N° —"), add numbered: false. It still
   takes its place in the stack by date, still opens and reads
   the same way — it just shows "Writing" on its spine instead
   of a number, and doesn't take a slot in the numbering of
   the entries around it.

   EXAMPLE (copy this shape when you add your first entry):

   {
     slug: "setting-sail",
     title: "Setting Sail",
     date: "2026-08-22",
     excerpt: "Two or three sentences summarizing this entry.",
     body: [
       "First paragraph of the full entry goes here.",
       "Second paragraph goes here — add as many as you like."
     ],
     prayerRequests: ["A safe departure", "Peace for the family left behind"],
     photos: [
       { src: "images/your-photo.jpg", caption: "Caption for the photo" }
     ]
     // numbered: false   <- uncomment for a non-numbered writing
   }
   ========================================================= */

const posts = [
  // ---- DEMO ENTRY — delete this before publishing your first real post.
  // It exists so you can see the bookshelf and open-book animation
  // working on a live page before you have real content.
  {
    slug: "demo-entry",
    title: "A Preview of the Ship Log",
    date: "2026-08-01",
    excerpt: "This is a placeholder entry so you can see how the bookshelf and open-book page look before your first real post.",
    body: [
      "This is a demo entry — delete this whole object from js/data.js once you're ready to publish your first real Ship Log post.",
      "Everything you're seeing right now — the book spine on the shelf, the opening animation, this reading page, and the photos below — is driven entirely by this one entry in js/data.js. Copy its shape for every new post."
    ],
    prayerRequests: ["This is a sample prayer request", "This is a second sample prayer request"],
    photos: [
      { src: "images/placeholder-1.svg", caption: "Sample photo one — replace with a real image." },
      { src: "images/placeholder-2.svg", caption: "Sample photo two — replace with a real image." }
    ]
  }
];
