# README

#### Updated March 23, 2022

## Background

"Purse - Brutally Honest Banking" is my capstone project for Harvard's CS50x course and Udemy-Academind's "React - The Complete Guide" course. While I finished CS50x in April 2021 I wanted to push beyond the introductory web dev skills I learned there when coding my final project. After taking some side paths I ended up back in online learning with the Udemy course, and used the additional skills I learned there to complete this projet. The result is not merely a practice project, but a fully-featured React application.

The inspiration for this site is equally derived from the design aesthetics of Web 1.0, newspaper circular advertisements, streetwear graphic design, and actual banking websites. As far as content goes I imbued the site with many of my own thoughts on the interconnectedness of money with politics, sex, and religion. Additionally, nearly all of the content on this site is created by me: banner photographs, writing, and design are all mine. There are two exceptions: the loading gif was made by Sam Rolfes (insta: @sam.rolfes), a very talented artist I found online, and it is used with his permission; and the emoji icons and fake credit card images were found via Google search.

The outcome is a fully-operational website that has a very distinct personality of its own - a brutally honest banking app that never misses a chance to tell you exactly how it's screwing you over. I think anyone who has dealt with banks, healthcare companies, bureacratic government agencies, or call centers of any kind will enjoy exploring this site.

And exploration is the main thing! I approached this application build as a mixture of a video game, a school lesson, and a detective story that encourages the user to visit all of the links in order to get the bigger picture. Since I can't predict exactly the path that any one user will take, the site is designed to get all users to the same endpoint no matter their route. That being said, the "end" of the story is not a plot point, but a feeling. I hope that users of this website will leave with a little bit more awareness of what it takes to "achieve" the "American Dream".

## Specs & Dependencies

Build: React 17.0.2 (functional components and hooks), Context API, React Router

Map component: @react-google-maps/api, @reach/combobox, use-places-autocomplete

Unique component keys: uuid

Strong password enforcement: zxcvbn

Styling: react-bootstrap, CSS Modules

Backend: Google Firebases Authentication, Realtime Database

Deployment: Netlify

Hosting: Google Domains

## Features

"Purse - Brutally Honest Banking" is a full-service app that includes working Registration, Sign In, and Password Reset functionality. These components incorporate client-side validation and user feedback as well as backend authentication using Google Firebase and tokens. The password reset option uses Firebase to send a reset link to the user that will actually reset their password.

The page I am most proud of building is the Find Branch page. Upon initially loading, this page reaches out to the Google Maps API and loads a map with the first 20 bank locations within five miles of the Las Vegas Strip. This location data is also loaded into cards the user can scroll through on the left-hand side. A working search bar with autocomplete options allows the user to select any place on earth to trigger the search again. Once a new location is selected the map automatically pans to the new location and populates the map with the first 20 banks in that area. The location cards will also update with this same location information. Finally, clicking on a compass icon on the top right of the map will geolocate the user (it will ask for their permission first if they have not enabled geolocation), pan the map to their location, and repopulate it with the new location results.

Once signed in the user can access their accounts page which pulls in dummy data from Firebase and inserts it into their checking, savings, and credit card accounts. They can also view their user settings and reset their password here if they wish.

The red banner that greets the user changes its output based on the date and time. It will always display the correct, properly-formatted date. It will greet the user with "Good Morning", "Good Afternoon", "Good Evening", or "GO TO SLEEP" depending on what hour it is, and it will always greet the user by the first name they entered when registering. Little details like these, while relatively simple, were some of the most fun pieces of the site to design.

Sign In authorization is handled via an authentication context provider that passes an 'isSignedIn' state around the app. Similarly, all pages that require sign-in are protected, meaning that if a user is signed out and manually enters a url to access their accounts, they will be sent to a 404 Page Not Found page.

The design and content are directly inspired by the websites of TD Bank, Capital One, Bank of America, Santander, and Chase. While the color scheme of Purse is different, comparing some of the components on this site to ones on those sites will reveal similarities.

Graphically speaking, the header appears on every page and is fixed in the same position. It will not move when the user scrolls. Conversely, the footer, while included at the bottom of every page, appears only when the user scrolls down to it.

Everything on the site is interactive with the exception of a few dummy links in the main navigation (green) bar's dropdowns. Most of the links direct the user to pages I wrote content for while the links in the "We're more than just a bank" section on the homepage and the social media icons in the footer link to outside websites I specifically chose for their thematic content.

Another feature I'm very proud of is the title that bumps in from screen-left when account pages load. Its inital placement offers a balanced design counterpoint to the red banner, but then, as the user scrolls down, it settles into its place at the "top" of the account page. This was achieved with sticky positioning and finally successfully executed during something of a fugue coding state haha.

There are many more animations and design elements that I'm really proud of, but I'll let you discover them for yourself!

## Final Thoughts

Building this site was done in five weeks. It turned into a manic passion project very quickly. I poured all my love into this project, and I can say hands down that it is the best thing I've every done in my life. I'm very excited to officially share it with the world and I sincerely hope that you enjoy it.

Thanks for reading!
