# README

### *Updated March 31, 2022*
### [3 minute overview video](https://youtu.be/oqCGS89yQuk)

### *Updated March 30, 2022*
### Site is now [LIVE!!](https://www.purse.wtf)


![Purse Banking Homepage](./src/assets/Purse%20Homepage.jpg)


## Build Dependencies

- Build: React 17.0.2 (functional components and hooks), Context API, React Router

- Map component: @react-google-maps/api, @reach/combobox, use-places-autocomplete

- Unique component keys: uuid

- Strong password enforcement: zxcvbn

- Styling: react-bootstrap, CSS Modules

- Backend: Google Firebase Authentication & Realtime Database

- Deployment: Github, Netlify

- Optimization: Google Lighthouse, critical-cli, React.lazy()

- Hosting: Google Domains

## Background

"Purse - Brutally Honest Banking" is my capstone project for [Harvard's CS50x](https://cs50.harvard.edu/x/2022/) and [Udemy-Academind's "React - The Complete Guide"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) courses. While I finished CS50x in April 2021 I wanted to build a website that pushes beyond the introductory dev skills I learned there. After an exploratory journey into Project Management I returned to software development earlier this year with [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)'s Udemy course and worked on sharpening the additional tools I needed to complete this project. The result is not merely a practice project, but a fully-featured React application that makes use of React Router, the Context API, backend connections, and react-bootstrap among other packages and dependencies.

My educational background is in fine art: I went to film school and have spent the last decade working in the film and photography industry. I'm proud to say I was able to marry my art and design background with my new technical skills into a piece of interactive art that stands on its own. Visually speaking, I took equal inspiration from real banking websites, the design aesthetics of newspaper circular advertisements, the no man's land of Web 1.0, streetwear graphic design, and 1980's color patterns.

When ideating the site I set out to create something that fell somewhere between an essay, a movie, a Choose Your Own Adventure novel, and a university lecture. I want users to separate themselves from the noise of U.S. society/culture/politics in 2022 and re-evaluate our global society from the perspective of an alien with no prior experience operating in our world. The last five years have made it clear that there are a lot of confusing and (sometimes) intangible connections between politics, finance, sex, and religion. The goal of this site is to shed light on all of those topics and their relationship to each other, and to make the medicine go down a little easier with laughter.

The final product is a fully-operational website that has a very distinct personality of its own: a brutally honest banking app that never misses a chance to tell you exactly how it's screwing you over. Anyone who has dealt with banks, healthcare providers, call centers, and bureacratic agencies of any size will enjoy exploring this site.

And exploration is the main thing! Users can visit as many or as few links as they would like, and each page will add another layer to the overall argument being made. While I can't predict exactly how a particular user will chart their path through the site there are certain "plot points" and calls to action that encourage users to pass through checkpoints in a certain order. Whether or not they do so doesn't affect the overall story or the UX, but it's worth mentioning that there is structural logic to the site. I suspect different people will have different takeaways from the overall experience and content, and that's great - the main idea is to spark imagination and self-reflection.

A final note: all links to outside content were carefully chosen for what they add to the overall purpose of the site. Likewise those links or design elments that appear broken are "broken" on purpose.

## Credits

Unless otherwise stated, all written text, photographs, design components, and remaining content are copyright 2022 Mark Satin and may be reproduced and used FOR EDUCATIONAL PURPOSES ONLY.

Loading Gif is created by and copyright [Sam Rolfes](https://www.instagram.com/sam.rolfes/).

Emoji icons are owned by Apple.

Credit card images and homepage banner images are sourced from Google Images.

## Features At A Glance

- Working Registration, Sign In, and Password Reset components
- User credential validation and feedback (frontend) and authentication via ID tokens (backend)
- SPA routing via React Router, protected pages, and dynamic routing with query params
- API connections and response error handling for Google Maps, CoinCap, and Google Firebase
- Customized and interactive Google Map with working search, results, and geolocator functionalities
- Original header navigation design
- Original CSS animations for links, buttons, and other selectors
- Loading screens and 404 Fallback pages
- Fully responsive across all device widths
- Optimized loading via code splitting and srcSet images

## Select Features Explained

1. This project presented a myriad of obstacles but by far the most complex components to build were in the Find Branch page. This mostly comes down to the fact that the existing documentation on implementing the Google Maps Javascript API with React are minimal and not well explained. My eventual working solution also depended on two additional packages - @reach and use-places-autocomplete - which, while necessary, made the build even more complicated.

     - When a user directs the site to the Find Branch page, a loading screen runs while the a fetch request is made to the Maps API. This request receives the first 20 bank locations within five miles of the Las Vegas Strip and loads them into a map component. Each location is given a moneybag icon and clicking on an icon pulls up the location data. A working search bar with autocomplete options allows the user to select any place on earth to trigger the search again. When a new location is selected the map automatically pans to it and repopulates with the first 20 banks within a five mile radius. Location data for the initial and all subsequen searches is also loaded into cards that the user can scroll through. The compass icon on the top right of the map geolocates the user. Clicking this icon will trigger a browser alert that asks the user for their permission to locate them. A loading screen plays while waiting. If allowed, the map to the user's location and repopulate with the first 20 banks.

2. Backend connections and API requests also served as a significant point of learning for me. Registration and Sign In functionality are maintained with the Context API and Google Firebase API. React Context passes state and props around the entire application from a central source whereas Firebase separatley stores my data and authenticates users. In combination with React Router, Context allows for the creation of protected pages which can only be accessed if the user has been properly authenticated by Firebase. If a user is signed out and manually enters a url to access their personal accounts, they will be sent to a 404 page.

     - Firebase-issued ID Tokens are used to track users on the site and automatically log them out after 60 minutes. I also added a timer function (implemented in my auth Context) that tracks the passing of this interval and automatically log users out if they leave the site and return within three minutes of the expiration time.

     - Once signed in users can access their main accounts, user settings, and individual account pages for checking, savings, and credit cards. All of these pages pull in dummy data via API calls to separate nodes in Firebase. The user settings page displays the data the user originally entered when registering and also offers a working password reset function.

     - Working with React Router was a lot of fun! In addition to creating protect pages I enjoyed using query parameters to pass different props data to my reusable components. This can best be seen with the Credit Card Offers at the top of the (unsigned-in) homepage. Clicking each of these cards leads to cloned pages that swap in card-specific content depending on which card was clicked.

3. The fixed header was a joy and chore to design. It's essentially a combination of four separate nav bars, some of which use the react-bootstrap Nav component, some of which use the 'Container, Row, Col' setup, and some of which are completely my own design. The reason for this is that each nav bar is unique and required different solutions to meet its particular needs. The reason for four separate nav bars in the first place is that banking websites have a ridiculous amount of nav bars themselves, and I wanted to imitate this extraneous quality in my site design.

     - Additionally, these nav bars all respond differently to window resizing. This is best understood by simply playing around with the window size and observing how each bar changes. Likewise, the site motto reveals itself the first time users hover over the "Purse" logo nav bar. It also scales in size as the browser window shrinks and eventually disappears altogether at smaller viewport widths.

     - When users collapse the window past smaller breakpoints the entire header collapses to a new design that makes use of hamburger button and centers and shrinks all previous elements at the top of the screen. The header position also becomes relative so that it doesn't take up the majority of the small viewport on mobile devices.

4. I'm really proud of a number of small features across the site, perhaps initially unnoticeable, that I think really add to its overall production value. Of particular note:

     - The red banner at the top of every protected page greets the user by name. This data point, along with many others, are gathered in the auth Context function and saved to the browser's Local Storage (and removed from Local Storage upon signing out). This banner also grabs the current date, and properly formats (en-US) and displays it, along with the current time of day. If a user logs in between midnight and 6am local time a message tells them to 'GOT TO SLEEP, <name>!'

     - The Title Bump animation on protected pages took a long time to perfect, especially once I bootstrapped the site and adjusted it for different viewport sizes. It works via a combination of sticky positioning, margins, and container sizes. When visiting a protected page this title slides in at the bottom of the screen from the left. It initially presents a visual counterpoint to the red banner at the top, but as the user scrolls down the page, it also scrolls until reaching its final position as the title atop that page's content. This is perhaps my best example of marrying art, design, and technical know-how on the site.

     - Button animations make use of rotating box-shadows and highlighted text that impart a sense of impending change _before the user clicks through_. I think this adds a lot more to the UX than its small size suggests.

     - There are many, many more animations and design elements that I'm excited about, but I'll let you discover them for yourself!

## Final Thoughts

Building this site from initial concept to deployment took eight weeks. It started as a small playground to experiment with React and quickly snowballed into a manic passion project. I poured all my love for life, the internet, and art into this site, and I can say hands down that it is the best thing I've every built in my life. If you've read this far, Thank You, and I just want to say that I'm thrilled to officially share this work with you.

Thanks for reading!

## SPECIAL THANKS

A very special thanks to my teachers - David Malan, Brian Yu, Doug Lloyd, Maximillian Schwarzmüller - to my family, and to my friend, Haris Shafiq, for their continual support and encouragement.

I also want to thank the mods and users of Stack Overflow as well as the authors of so many blogs who have taught me so so so much about coding and best practices over the last year.
