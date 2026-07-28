/* =========================================================
   CRUISE WITH CON — Data Source
   This is the single place you'll edit to publish a new
   log entry. Home, The Ship Log, and Photographs all read
   from this same array, so adding an entry here updates
   all three pages automatically — nothing else to touch.

   HOW TO ADD A NEW ENTRY:
   1. Add a new object to the array below.
   2. Give it a unique "slug" (used in the URL, no spaces).
   3. Fill in title, date (YYYY-MM-DD), excerpt, and photos.
   4. Add prayerRequests if you have any for this entry —
      leave the array empty [] if not.
   5. Save the file. That's it — Home, Ship Log, and
      Photographs update automatically.

   EXAMPLE (copy this shape when you add your first entry):

   {
     slug: "setting-sail",
     title: "Setting Sail",
     date: "2026-08-22",
     excerpt: "Two or three sentences summarizing this entry.",
     prayerRequests: ["A safe departure", "Peace for the family left behind"],
     photos: [
       { src: "images/your-photo.jpg", caption: "Caption for the photo" }
     ]
   }
   ========================================================= */

const posts = [];
