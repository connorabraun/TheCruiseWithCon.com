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
   5. Add a "closing" array if you want a sign-off (a thank you,
      your name) to appear after the prayer requests — optional,
      same shape as "body".
   6. Save the file. That's it — Home, Ship Log, and
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
  {
    slug: "the-journey-begins",
    title: "The Journey Begins",
    date: "2026-08-21",
    excerpt: "My journey begins tomorrow, August 22nd, as I leave Phoenix in the afternoon, and arrive late in the evening in Ghana on Sunday.",
    body: [
      "My journey begins tomorrow, August 22nd, as I leave Phoenix in the afternoon, and arrive late in the evening in Ghana on Sunday. The work begins at 7 am on Monday morning in preparation for medical operations starting in early September. I am sure there is lots of preparation to be done across all teams, but mine especially needs a lot of immediate upfront work because we are setting up the HOPE (Hospital Out Patient Extension) Center from scratch. I will refrain from adding details about how everything works because I know very little about the specifics at this point. For those who are just tuning in and don't know exactly what this is all about, there is some basic information on the \"About\" page. I will continue to explain in more depth as time goes on, but for now, I am finishing up preparations for the trip.",
      "At the moment, all I feel is excitement. I figured at some point the nerves would come (and they still could) but at least for now I have no fear. That is not something I have been able to say for any other significant season of my life. I believe this is primarily because I truly feel as if God has called me to be here, which gives me a confidence and passion that most of my previous endeavors have not. Secondarily, as I have continued to challenge myself in a variety of ways, I have become comfortable in unfamiliar places. I aspire to become grounded, resilient, unassuming, and loving enough that I can thrive amidst all circumstances. There are many aspects of this coming year that will test that, and for that reason I am excited, passionate, and expectant that great things will come from this. I expect that hardship will come in unforeseeable ways, but I do not care. I am determined to foster and protect my hope through it all, and I believe that will carry me through. I feel blessed to have this opportunity to serve the people of Ghana, to work alongside like-minded people, and to be close to a source of goodness in our world.",
      "I am not sure yet how often I will be updating this, but at least for the first week I don't anticipate having the time or energy to keep it updated. The best way to follow along is by signing up for emails. I will let you know when I post an update, since there will probably never be a consistent pattern.",
      "If you are inclined to pray, please take a moment now:"
    ],
    prayerRequests: [
      "For the health and sustenance of the people in Ghana who are suffering and are awaiting care until we are set up and able to provide them with what they need.",
      "For safe travels for the 650 volunteers coming from all over the world.",
      "For a productive first week in team building and preparation."
    ],
    closing: [
      "Thanks for following along and supporting me.",
      "&mdash; Connor"
    ],
    photos: [
      { src: "images/global-mercy-rotterdam.jpg", caption: "The Global Mercy docked in Rotterdam, before departure." }
    ]
  }
];
