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
      - A body item can also be { heading: "Section Title" }
        for a subsection header, or { inlinePhoto: "images/x.jpg" }
        to place one of this post's own "photos" (matched by src)
        at that exact point in the text. Put two inlinePhoto items
        back to back and they'll group into one side-by-side row.
        Any photo not placed inline just falls to a gallery at
        the bottom of the entry automatically.
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
    date: "2026-08-22",
    excerpt: "My journey begins today, August 22nd, as I depart Phoenix this afternoon, and arrive in Ghana late on Sunday night.",
    body: [
      "My journey begins today, August 22nd, as I depart Phoenix this afternoon, and arrive in Ghana late on Sunday night. The work begins at 7 am on Monday morning in preparation for medical operations starting in early September. I am sure there is lots of preparation to be done across all teams, but mine especially needs a lot of immediate upfront work because we are setting up the HOPE (Hospital Out Patient Extension) Center from scratch. I will refrain from adding details about how everything works because I know very little about the specifics at this point. For those who are just tuning in and don't know exactly what this is all about, there is some basic information on the \"About\" page. I will continue to explain in more depth as time goes on, but for now, I am finishing up preparations for the trip.",
      "At the moment, all I feel is excitement. I figured at some point the nerves would come (and they still could) but at least for now I have no fear. That is not something I have been able to say for any other significant season of my life. I believe this is primarily because I truly feel as if God has called me to be here, which gives me a confidence and passion that most of my previous endeavors have not. Secondarily, as I have continued to challenge myself in a variety of ways, I have become comfortable in unfamiliar places. I aspire to become grounded, resilient, unassuming, and loving enough that I can thrive amidst all circumstances. There are many aspects of this coming year that will test that, and for that reason I am excited, passionate, and expectant that great things will come from this. I expect that hardship will come in unforeseeable ways, but I do not care. I am determined to foster and protect my hope through it all, and I believe that will carry me through. I feel blessed to have this opportunity to serve the people of Ghana, to work alongside like-minded people, and to be close to a source of goodness in our world.",
      "I am not sure yet how often I will be posting, but at least for the first week I don't anticipate having the time or energy to update it. The best way to follow along is by signing up for emails. I will let you know when I post an update, since there probably won't be a consistent pattern."
    ],
    prayerRequests: [
      "For the health and sustenance of the people in Ghana who are suffering and are awaiting care until we are set up and able to provide them with what they need.",
      "For safe travels for the 650 volunteers coming from all over the world.",
      "For a productive first week in team building and preparation."
    ],
    closing: [
      "Thanks for following along and supporting me.",
      "&mdash; Connor",
      "If you are inclined to pray, please take a moment now:"
    ],
    photos: [
      { src: "images/global-mercy-rotterdam.jpg", caption: "The MV Global Mercy." }
    ]
  },
  {
    slug: "akwaaba",
    title: "Akwaaba",
    date: "2026-08-29",
    excerpt: "Akwaaba, from Tema, Ghana! These past seven days have been some of the fullest of my life.",
    body: [
      { inlinePhoto: "images/arrival-ghana.jpg" },
      "Akwaaba, from Tema, Ghana!",
      "These past seven days have been some of the fullest of my life. I have a new living space, a new roommate, a new job, a new team, new friends, a new community, and on top of all that, it is my first time in Africa. It is hard to know where to start in explaining it all. I will have to give an overview for now, and hope to expand on each component as time goes on.",
      { heading: "The Transition" },
      "My perception of this week coming in was a battle against extreme transition. Much chaos and uncertainty were introduced, and my primary goal was to control and overcome it. According to that standard, this week was a success. The jet lag didn't bother too much, my bags are unpacked and my room organized, I know my way around this massive ship, I made some good friends already, I handled all of my onboarding and compliance, I was able to find time to work out and work on my passion projects, and I ventured out into Accra and Tema to get a feel for the country I am living in. In the past I have let small aspects of the transitory phase linger for too long to my detriment, so I am excited that I am able to relax today before the next week starts.",
      { heading: "Ghana" },
      "The people of Ghana have been nothing but humble, sincere, and kind to me. Culturally, they are quiet and reserved. I did a lot of cultural awareness training this week, and one concept we kept returning to is that people won't share their thoughts unless asked, and that you don't embarrass them with public correction. Differences get discussed individually instead. I appreciate their demeanor and communication style as I feel it prioritizes intimacy and trust, which I value.",
      "I had a moment in Jamestown (neighborhood in Accra), where I needed to use the restroom (a place with seemingly none available). I asked a woman and she led me to a long alleyway and pointed down the stairs. The bathroom was apparently just a gutter where a man and his son were showering out in the open. When I walked around the corner and saw them, I turned back around to wait, giving them their privacy. The father, Nick, asked me, \"Are you afraid?\" I explained that turning away was out of respect for his son. He replied, \"God bless you, you are welcome here.\" We talked for a few moments after. He was very grateful that I was here to visit and told me that since I am here for the year, I am a fellow Ghanaian. It was a very strange interaction to have considering that they were naked and I was peeing, but it was very human and honest, which is the best way for me to describe how the people are so far.",
      "The ship is located in Tema, which is the port city of Ghana about 20 miles from the capital, Accra. Tema is centered around the port, which is the largest hub in West Africa. It is the closest land to the intersection of the Prime Meridian and the Equator, and is thus \"The Center of the World.\" It is an industrial town and is quite poor and undeveloped as far as I have seen so far. Accra has parts that are Western and wealthy, but was less developed than I had anticipated. Lots of the crew onboard were in Freetown, Sierra Leone for the last three years, which apparently makes this look like luxury. I am not exactly sure what that would look like as this is about the roughest I have seen other than a few parts of Laos and Indonesia. Most of the roads are decently paved and the traffic isn't radical. On my first venture into Accra, my driver blew a tire in the first 10 minutes and we changed it on the side of the road in about 5 minutes, so I am assuming that isn't uncommon. Despite the industrial nature of the area we are in, which seems a bit bleak at first, I feel comfortable and find it to be beautiful in its own way.",
      { inlinePhoto: "images/flat-tire.jpg" },
      { inlinePhoto: "images/jamestown-1.jpg" },
      { inlinePhoto: "images/jamestown-2.jpg" },
      { heading: "The Port" },
      "It is illegal to take photos inside of the port, which is being strictly enforced so far. So for the time being I will just describe it and post photos from the internet.",
      "We are located inside the Port of Tema in a berth that is for ships not carrying containers. There is a long straight off in the distance with the massive gantry cranes that unload the containers from ships that are more transient. The ships around us have been carrying cars from Tokyo and what appear to be fertilizer bags from Panama. Our location is more protected from the ocean than the container ships. The port has 24/7 security, standard for a commercial port. Our dock has additional 24/7 armed security from the Ghanaian government. We have a compound of 40-foot shipping containers stacked two high and 20 long. We have 30 landcruisers sitting there as well as our own security at the gangway. We also have 6 full-time security guards from Nepal that work around the clock.",
      "The Port is bustling constantly, maybe even more so at night. Outside of our compound there are trucks, tractors, and cranes moving containers and cargo constantly. We are surrounded by thousands of stacked containers in all directions. The top deck of the boat is far above them so we can see into the ocean as well as into Tema. At night I have been watching from the top deck, which is quite interesting and strangely beautiful. The low lights of the vehicles tracing the paths between containers, along with the constant ocean breeze, make for a unique combination.",
      { inlinePhoto: "images/tema-harbor-1.jpg" },
      { inlinePhoto: "images/tema-harbor-2.jpg" },
      { heading: "The Ship" },
      "The Global Mercy is 570 feet long and 94 feet wide with 12 decks. It is much nicer than it needs to be and is quite comfortable. Learning to get around took a while this week and I still get confused at times. There are five staircases that do not reach all the levels, and hallways that are not continuous, so you really need to know where things are at and how to get there. The ship has a dining hall, an academy for the children of families, a 600-person meeting hall, a cafe, an outdoor playground, a small gym, a walking track, and even a barber shop. The roles on board cross every category such as maritime, kitchen, academy, medical, hospitality, chaplaincy, engine room, etc. Every department is different and yet equally essential to sustaining the whole community.",
      "The most interesting part so far is how often we see each other and how closely we all impact each other's lives. We all eat in the dining hall three times a day and pass each other in the hallways constantly. It is a large ship, but it's not big enough to separate the captain from the kitchen from the executive leadership and their families from my friends and me. Maybe there is a power dynamic that I am not perceiving yet, but all of the messaging is truly about the equality and integrity of each individual person, and the way we eat together and need each other makes it feel that way so far. Everyone I meet is grateful for what I do, and at the same time, it becomes apparent how important they are for my well-being. I am sure that will create some issues in times of conflict, but it is a cool experience to live in a community that is so dependent on one another and has respect for their work. The fact that everyone on board is working without pay certainly contributes to this culture and is inspiring to see firsthand.",
      { heading: "My Room" },
      "My room is small but has everything I need. A bed, a desk, and a closet in a 7x7 square. I am sharing a room with my new friend, Bright, from Nigeria. He is 31, has been working on the Global Mercy for two years, and works as an engineer in the engine room. We haven't been able to spend a ton of time together outside of the room yet, but we get along well and will be good roommates. He is smart, quiet, and keeps the room clean.",
      { heading: "My Friends" },
      "It did not take long to make good friends. I arrived with about 14 others last Sunday evening and made some good connections while still at the airport. I have met probably around 100 people but have spent most of my time with 5-10 of them. They are from France, the Netherlands, Sweden, South Africa, and the US.",
      { heading: "The HOPE Center" },
      "The HOPE (Hospital Outpatient Extension) Center, where I will work, is under construction and will not be ready until October. I was able to visit this week to tour it. In developing countries that are already limited in medical facilities, it is hard to secure unused/available buildings that are up to the medical standards of Mercy Ships. The building that we are using was previously used for training cocoa tasters. We are renovating it to meet our needs and standards.",
      "In the meantime we will operate directly from the ward on the ship. This will be limiting in many ways, mostly space for patients and activities. As someone who is new, I think it will be helpful because I will get to meet, learn, and work alongside the hospital staff before working off the ship.",
      "My immediate team is: Gerhard (Netherlands) - Manager; Sofia (Sweden) - Operations Lead; Jan Reinier (Netherlands) - Hospitality Lead; Yubi (Togo) - Facilitator; Raoul (Benin) - Facilitator; Jusu (Sierra Leone) - Facilitator; Coniah (Ghana) - Facilitator; Christine (Netherlands) - Facilitator.",
      "We also have 55 Day Crew positions that are filled with local Tema residents. We spent a good portion of the week helping them get onboarded and trained as well. The locals are humble and motivated. I haven't had lots of one-on-one interactions with them yet, but am eager to get to know them and think they will be great teammates.",
      "Although much of my week was consumed by compliance and training for general ship matters, I was able to spend enough time with my team to be comfortable and confident. I look forward to getting into more practical training this week as well as building some chemistry beyond friendliness. We have many different skillsets that will be valuable for the wide range of work that we are doing. Gerhard is a great man and is doing a great job of leading in a difficult context.",
      { inlinePhoto: "images/hope-center-birdseye.jpg" },
      "Overall, life is good. I am safe, healthy, energized, and settled enough to get to work this week. Thank you all for your prayers and continued support."
    ],
    prayerRequests: [
      "For the peace, comfort, and healing of the many patients entering our hospital this week who have never received medical care, as we begin their medical journey.",
      "For the health and safety of the patients who have urgent need but will wait due to our limited capacity.",
      "For the HOPE Center construction to progress according to the plan.",
      "For the continued integration of the 40 countries on our ship as we begin to work together amongst our differences."
    ],
    closing: [
      "If you are inclined to pray, keep these in mind:"
    ],
    photos: [
      { src: "images/arrival-ghana.jpg", caption: "Arriving at the Global Mercy for the first time." },
      { src: "images/flat-tire.jpg", caption: "A flat tire on the road into Accra — five minutes to swap it out." },
      { src: "images/jamestown-1.jpg", caption: "Jamestown, a historic neighborhood in Accra." },
      { src: "images/jamestown-2.jpg", caption: "Jamestown, Accra." },
      { src: "images/tema-harbor-1.jpg", caption: "The Port of Tema, the largest hub in West Africa." },
      { src: "images/tema-harbor-2.jpg", caption: "Container operations at the Port of Tema." },
      { src: "images/hope-center-birdseye.jpg", caption: "An aerial view of the HOPE Center, under construction." }
    ]
  }
];
