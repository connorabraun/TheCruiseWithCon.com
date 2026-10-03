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
    date: "2026-08-30",
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
      { src: "images/flat-tire.jpg", caption: "A flat tire on the road into Accra." },
      { src: "images/jamestown-1.jpg", caption: "Jamestown, a historic neighborhood in Accra." },
      { src: "images/jamestown-2.jpg", caption: "Jamestown, Accra." },
      { src: "images/tema-harbor-1.jpg", caption: "The Port of Tema, the largest hub in West Africa." },
      { src: "images/tema-harbor-2.jpg", caption: "Container operations at the Port of Tema." },
      { src: "images/hope-center-birdseye.jpg", caption: "An aerial view of the HOPE Center, under construction." }
    ]
  },
  {
    slug: "one-body-many-members",
    title: "One Body, Many Members",
    date: "2026-09-08",
    excerpt: "The hospital and the HOPE Center have opened and surgeries have begun. On community, dependence, and what it means for every person aboard to carry real weight in this mission.",
    body: [
      { inlinePhoto: "images/global-mercy-crew.jpg" },
      "Hello everyone!",
      "Thank you all for your continued support and prayers. I appreciate the texts, emails, and the growing number of people subscribing and following along.",
      { heading: "News" },
      { list: [
        "The hospital and the HOPE Center opened last Tuesday, September 1st, and surgery began today, Tuesday, September 8th.",
        "One of our ophthalmologists did not receive accreditation to start operating when scheduled, but the issue was resolved in a way that, thankfully, only delayed our start by one day.",
        "We are currently enforcing a Respiratory Illness Policy, which requires masking and distancing because over 3% of the ship has the flu (and that number is increasing quickly).",
        "The water that we were supposed to receive this weekend (for showers, hospital functions, laundry, kitchen, etc.) did not come, and so we are taking some measures to reduce our water usage (even more so than we already do with our 2-minute daily shower allowance)."
      ] },
      { heading: "Reflection" },
      { quote: "“For the body does not consist of one member but of many... that there may be no division in the body, but that the members may have the same care for one another. If one member suffers, all suffer together; if one member is honored, all rejoice together.”", reference: "1 Corinthians 12:14, 25-26" },
      "An observation I have had thus far worth explaining in light of these events is that every detail, task, and resource we have carries real weight. This is a large, beautifully crafted ship, and so it is easy to feel as if we have an abundance of what we need, like at home. It is a well-oiled machine, with great leadership and hardworking people, and thus feels as if we are in control. But something that is not hard to notice early on is the importance of each person in our effort to complete the mission that we are here for.",
      "At home, when there's a sickness, an issue with a certification, or a delay in goods, the issue rarely becomes serious enough to change your behavior much. Our world (the USA specifically, but more generally the West) is developed enough that we can avoid depending on one another: there's usually alternative care, enough time to sort something out, or an abundance to draw from if one source runs short. The great benefit of this high-level development is security, safety, health, and comfort. The great deficit is the lack of community and a prevailing idea that what people do on a day-to-day basis is not important. I have experienced that myself, and I have witnessed it as my friends have expressed similar sentiments in the wide variety of positions and differing communities that they occupy.",
      "Our mission here is daunting, ambitious, and important, and the group of people trying to carry it out is relatively small. Each person is essential for the mission, and that's not a feel-good statement for the last guy on the bench. It is true. This morning the Hospital Director sent a message to our phones that says, “We are a surgery ship, but surgery only happens because of the work of every person aboard the Global Mercy. Whether you work in the OR, galley, engine room, Academy, deck, housekeeping, or one of the many other teams that keep this ship and our mission moving. You are part of what happens today.” After my first two weeks here, I really believe this to be true, and that the vast majority of people act that way.",
      "This applies across all of our daily responsibilities, but I think this can be especially seen in light of our current Respiratory Illness Policy enforcement. At home people do not want to get sick and they may take some minor precautions, but it is casual, because it can be. If people get sick, they will be out for a few days, but it will sort itself out and we will deal with it as it comes. Here, an illness can spread nearly instantly: friends work across all departments, married couples work on separate teams, all the kids go to school each day, we all touch the same serving spoon when we get our dinner, we all pass each other in the stairwell, and on top of it all we are living in a sealed metal container. Half of the ship interacts with the patients each day, putting them at risk as well.",
      "The spread of an illness is a constantly pressing matter. Therefore, we must be serious in our precautions to prevent it. And if we do not, the hospital will have to close until we are healthy again. This isn't just inconvenient or unfortunate. It directly creates the possibility that someone won't receive the life-changing surgery they need. We are only here for 10 months and then we will be gone, for at least a few years. We are fully booked for that entire duration. So if we lose a week, I'm sure we will try our best to make things up, but at some point we will necessarily run out of time. So when you wear the mask, keep your distance, or sanitize your hands for the 20th time in the day, it isn't so that you aren't inconvenienced by sickness. It is honoring a fellow human being in distress, as if your action might be the one to save them from going home without being healed, even though you will never know.",
      "This morning at 9 am we stopped all over the ship to pray before the first surgery began. I was in the main hospital hallway with hundreds of others. It was a very powerful moment. I was immediately overwhelmed by the presence of God. However, I was conflicted and sad because I was standing next to Abdul-Rahman, who I'd spent time with this week in the HOPE Center. He's our first patient who will be sent home without surgery. He is 11 years old (I thought he was 4 based on his size) and came to receive orthopedic surgery for his misshapen legs. I don't know what medical reason kept him from surgery, but there is no trying again next year. The ship will be gone, and so we will have to pray that he can get help elsewhere. I don't know if he knows that yet, or if he can begin to understand the long-term impact that might have on his life. As I have explored Ghana so far, I have seen people with this condition sitting on ground on the side of the road trying to sell water bottles and I have seen a man in a wheelchair roll up to people at a stoplight to wash their windshield. I cannot imagine the disappointment he'll feel, having hoped his legs might be made new, only to go home without that happening.",
      "We cannot help everyone, unfortunately, but we must try our best, and that requires everyone to do their job, not just with illness prevention, but with our very best work to keep the ship running at the highest level possible. And for those who we cannot heal, we must pray that they can find healing elsewhere, or at least God's peace in times of despair.",
      { inlinePhoto: "images/ortho-legs-example.jpg" },
      { heading: "The HOPE Center Update" },
      "As the HOPE Center has opened (on the ship, as we still await construction to be finished for our inland facility) and I have begun work. I will try to share what we are doing as I learn along the way.",
      "At the HOPE Center, we have 6 facilitators in total, and we split into teams of 3 each day. Each facilitator has a different role for the day and we rotate those roles every 5 shifts. This past week, I was Facilitator #3, which is in charge of hospitality and activities. We have teams of Day Crew, local Ghanaians who don't live on the ship, who come to work with us. The role of the facilitators is to lead them and ensure we properly carry out the tasks relevant to our teams for the day. We are currently operating out of the hospital at about a third of our capacity compared to when we transition to the actual HOPE Center facility. Some of these patients and their caretakers will be with us up to 6 months. Therefore, one of the facilitators has the important role of making sure they are well fed, get the medical care they need, and have activities to do. I will learn more about what we have to offer as we get further along, but for now I know we have a full-time local teacher on our staff (Thelma), we have a “kids and care” director, and lots of others who are committed to making sure we keep the kids growing in more ways than one.",
      "Last Friday was my first day in the HOPE Center with patients. We had 7 little boys and 1 girl who are there for orthopedic surgery. They all have severe leg deformities. Some with bowed legs, others knock-kneed, one with a leg bent far enough back that he walks on the top of his foot. Many of the kids are scared, so something we do to make them more comfortable is to allow them to “play” doctor. I was lucky enough to be the one who needed surgery that day, so I laid on the ground and Solveig, the “kids and care” nurse, helped them perform all of the procedures on me that they will have done to them in the coming days. We had lots of fun together as they gave me shots and IVs as well as ripped off my arm hair with tape. They also had a lot of fun riding the trikes on the back deck. Despite their legs not functioning in a normal way, they run and ride very fast. They are full of joy and have made friends with each other quickly.",
      "This next week will get much busier. On my last day working there, we had 8 people in the HOPE Center, and tomorrow there will be upwards of 50. I also will be receiving training in the largest facilitator role that I have not done yet over the next 5 shifts. I am excited to keep learning more and am enjoying being around my team and the patients.",
      { inlinePhoto: "images/hope-center-team.jpg" },
      { heading: "Life on the GLM" },
      "Last Sunday evening after I posted, we had our first church service since I arrived. We worshipped for a little while and then spent the rest of the evening dividing ourselves across all of the rooms in the hospital to pray. Praying amidst all of these different cultures is beautiful. There is much more chanting, singing, rhythmic speech, and repetition than I am used to, but I find it to be powerful and refreshing.",
      "Monday night there was an event in the hospital that was a sort of interactive open house, where everyone can view the entire hospital and what goes on in each department. Rehab let us use the saw to cut open casts, the nurses pretended to be in agony and let us treat them, and the ICU helped us give shots and put in IVs (on oranges and fake arms). It was fun to see everyone excited to show off what they do and share with others.",
      "One funny thing about our community is that we use Microsoft Teams for both work and community information sharing. So yesterday, while I was working, I came across this message posted by an older woman to the whole ship, “Are you missing your underwear?! Found on stairs, pair of brown, lacy thong knickers. Now in lost property basket in the cafe, to collect discreetly if yours.”",
      "Overall, I am doing well and feel blessed to be here working. I am settled and feel very comfortable here. Time is flying, and yet I feel as if I have been here for much longer than two weeks with all that has happened. I spend a lot of evenings talking with friends after dinner. I am still enjoying much time on the 11th deck at night, listening to the ocean and the busy container yard carry on. I sleep and eat well, have plenty of time to myself, and am inspired by the mission each day. God is good."
    ],
    prayerRequests: [
      "For our crew to stay healthy and continue to hold off the flu so we can operate on schedule.",
      "For the children receiving the leg surgeries this week, and for their pain to be well managed.",
      "For all surgeries to go well.",
      "For us to receive the water we need for basic functionality.",
      "For Abdul-Rahman and all of the others who receive bad news to find healing elsewhere and receive peace in times of despair."
    ],
    closing: [
      "&mdash; Connor",
      "If you are inclined to pray, keep these in mind:"
    ],
    photos: [
      { src: "images/global-mercy-crew.jpg", caption: "The Global Mercy and her Crew." },
      { src: "images/ortho-legs-example.jpg", caption: "An example of the deformity our Pediatric Orthopedic patients experience." },
      { src: "images/hope-center-team.jpg", caption: "The makeup of the HOPE Center Team!" }
    ]
  },
  {
    slug: "building-hope-part-1",
    title: "Building HOPE - Part 1",
    date: "2026-10-03",
    excerpt: "An update on stepping into the Operations Lead role, moving the HOPE Center off the ship, and a few adventures exploring Ghana along the way.",
    body: [
      "Hello everyone, sorry for the hiatus in updates. Life has gotten quite busy and my natural tendency is to want to write in detail about the events taking place and lessons learned, which has led to me ceasing to write because of how much has happened recently. Therefore, I decided to provide an update that is pretty surface level as things have developed quickly with the hope that things stabilize so I can write in depth about some more important reflections as time goes on. With that being said, thank you for the continued support in various ways. I am enjoying my time here, but it is always nice to receive encouragement from home.",
      "Since I last wrote, the crew has returned to sufficient health to remove masking, we have received our water supply, and the surgeries are in full swing. I believe we have completed over 200 at this point.",
      "In the two weeks after that post, I started working/training for the Facilitator position at the HOPE Center that was operating within the hospital ward. I was quickly immersed in the chaos of the daily operations and enjoyed the fast-paced environment. The shifts are 12 hours and are full and engaging which makes them fly by. I learned a lot about hospital operations, which I had nearly no previous knowledge of. Each day when leaving I enjoyed the sense of camaraderie I was building with my immediate team as well as our Day (local) Crew. At this point, we had only about 50 patients at a time, which is less than 20% of what we will have when we are at full capacity. With how busy the days are, it is hard to imagine what it will be like when we are running this off the ship with 300 patients and caregivers.",
      { inlinePhoto: "images/training-day-crew.jpg" },
      "I was trained by Sofia, who has been the manager for the last 2 years, and was serving as the Operations Lead to help with the transition from Sierra Leone to Ghana, and to help Gerhard, our new manager, learn the ropes. Before she left last weekend we celebrated her faithful commitment to this mission and the great contribution she made to furthering the HOPE Center. I learned a lot from her in a short time, and I am glad we crossed paths. As her time was coming to an end, Gerhard asked me to apply for the Operations Lead position. I knew this would be a possibility when I began to connect with the team this summer, but I was unsure how they were going to fill the position, or if I would have enough time to get the experience/trust needed to be considered for the role. I interviewed for it about a week later and was asked to step into the position.",
      "I am extremely excited to be in this new role, as it is an awesome opportunity to grow, serve, and be a part of the leadership team with Gerhard and Jan Reinier (Hospitality Lead). The Operations Lead is the main point of contact regarding Supply & Inventory, Transport, Infrastructure & Logistics, Facility Standards, and Safety & Compliance. I am quite aware of how large the role is and my lack of expertise in these areas at the moment. However, they told me they were interested in me filling the role because of my potential in it, not the experience or know-how that I currently possess. I am grateful to have people who want to help develop me and believe in who I can become.",
      "With that being said, the last few weeks have been incredibly intense as we lost our biggest experiential asset, Sofia, we were in the process of moving the HOPE Center off of the ship, we were shorthanded while waiting for our newest team member, Cheyenne (USA). So my transition into the new role has required that I continue working as a facilitator while trying to learn keep a boatload of information straight. As you would imagine, it has been hectic (but fun!).",
      "This past Wednesday, we handed over all of our patients to the Low Care Unit, so that we could focus all of our resources on preparing the HOPE Center. We have spent the last few days moving and setting up, and we will begin welcoming new patients tomorrow. The construction on essential parts is done, while we are still waiting for many other things to be finished. The next few weeks will be rocky and a test of our perseverance. I anticipate many unforeseen issues coming up, on top of the fact that we only have 50 beds currently. We are waiting for the remaining 250 that have been anchored on a container ship outside of our port for about two weeks. We are praying that they arrive soon and clear customs quickly so that we can receive the patients we have scheduled. We will be able to make do for about two weeks, but we will then reach our capacity at the HOPE Center and on the ship, which would force us to cancel surgeries. There is some promise that things can change because we had the President of Ghana onboard a few days ago, as he indicated that he was going to help in a variety of ways.",
      { inlinePhoto: "images/hope-center-move.jpg" },
      { inlinePhoto: "images/ride-to-work.jpg" },
      "Outside of work, life has been good. A few weekends ago, I went to a botanical garden and waterfall with my friends. It was pleasant to be in nature, and we got poured on for about an hour at the waterfall, which made for a good memory and a wet car ride home.",
      { inlinePhoto: "images/aburi-botanical-gardens.jpg" },
      { inlinePhoto: "images/botanical-gardens-friends.jpg" },
      { inlinePhoto: "images/waterfall-rain.jpg" },
      "I was also able to get off the ship for an overnight with some friends a few hours north of here. We went to a nature preserve, saw some zebras, baboons, some baobab trees, went for a boat ride, and enjoyed a more tropical side of Ghana. The Global Mercy is nice and comfortable, but it can definitely get stifling at times, especially when the surrounding area is so industrial. It is a great privilege to have the opportunity to work at the HOPE Center for this reason. We are off the ship every day, amongst the local people in their setting, rather than ours. Being there the past days has made me excited for what is to come!",
      { inlinePhoto: "images/shai-hills-reserve.jpg" },
      { inlinePhoto: "images/shai-hills-zebras.jpg" },
      { inlinePhoto: "images/shai-hills-baboon.jpg" },
      { inlinePhoto: "images/volta-river.jpg" },
      { inlinePhoto: "images/volta-river-2.jpg" },
      "I am settled in well here. I spend lots of time with my friends, I enjoy time alone on deck at night, I am fulfilled by my work, and I am finding time to rest amidst many days with long hours.",
      { inlinePhoto: "images/cinnamon-buns.jpg" }
    ],
    prayerRequests: [
      "For the containers to arrive with the HOPE Center supplies so that we don't have to cancel any surgeries.",
      "For the setup and finishing construction at the HOPE Center to go smoothly.",
      "For continued success of the surgeries.",
      "For strength and wisdom as I step into my new role."
    ],
    closing: [
      "Thank you for your continued support, for checking in, and for praying!",
      "If you are inclined to pray:"
    ],
    photos: [
      { src: "images/training-day-crew.jpg", caption: "Training our Day Crew at the HOPE Center." },
      { src: "images/hope-center-move.jpg", caption: "The HOPE Center, mid-move off the ship." },
      { src: "images/ride-to-work.jpg", caption: "Trying to find a ride to work." },
      { src: "images/aburi-botanical-gardens.jpg", caption: "Aburi Botanical Gardens." },
      { src: "images/botanical-gardens-friends.jpg", caption: "Some of my friends at the botanical gardens." },
      { src: "images/waterfall-rain.jpg", caption: "Caught in the rain at the waterfall." },
      { src: "images/shai-hills-reserve.jpg", caption: "Shai Hills Reserve." },
      { src: "images/shai-hills-zebras.jpg", caption: "Zebras at Shai Hills." },
      { src: "images/shai-hills-baboon.jpg", caption: "A baboon on the side of the road." },
      { src: "images/volta-river.jpg", caption: "The Volta River." },
      { src: "images/volta-river-2.jpg", caption: "Out on the Volta River." },
      { src: "images/cinnamon-buns.jpg", caption: "Linda, Line, and I enjoying cinnamon buns." }
    ]
  }
];
