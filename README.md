# Ghostbusters ESP Test Game

Live site: https://tberrigan2101.github.io/project-one/

A game based on the same principles as 'Rock, Paper, Scissors' but with a twist based on inspiration from a recent Halloween viewing of the 1984 film 'Ghostbusters'

The game is based on the [ESP Test Scene](https://youtu.be/HW8Ua49dCYk) of the movie when Dr. Peter Venkman (Bill Murray) is performing an ESP (Extrasensory perception, or sixth sense) test with two volunteers that have to guess the symbol on the card Dr. Venkman is holding.


## 1. Features 



- __Theme and Colour Scheme__

  - I based the colour scheme on colours associated with the Ghostbusters branding such as the red and white of the famous Ghostbusters logo, green to represent the slime colour and the yellow and black angled lines with smoke as seen on the trap prop from the film.


  ![ghostbusters branding](readme-images/ghostbusters_branding.jpg)


  
- __Header and Introduction__

  - I created a logo for the top of the page as 'Ghostbusters Recruiting' with the concept that this page would effectively be a fictional recruitment page to hire potential new Ghostbusters. I used lines and referencees from the film for effect and then explained that in order to successfully join the team the applicant would need to attempt the ESP test on the page.

- __Game Options__

  - The instructions state to choose from one of five options by clicking on the interactive buttons below in an attempt to successfully match the symbol on the card the Dr. Venkman (the computer) is theoretically holding. The five options are based on symbols mentioned in the film and created by me in Adobe Illustrator.

  - The five options are.

- __The Game Mechanics__

  - When the user picks their option, their choice is shown on the left side of the screen. 

   - The computer using a random option in the playGame() function and chooses an image from the const 'choices' declaration and displays its choice on the right side of the screen.

   - Depending on the success of the player their score or the computer score increases accordingly along with a message from Dr. Venkman congratulating or commiserating them depending on the result, again using lines from the film.

     - Once the player has taken a turn, the game starts the next round and a random preparatory line is stated by the computer based on another random method and choosing options from 'const intervalText'. 


- __About__

  - A page to give some historical background of the business, its ethos, what it aims to do in the future and to encourage people to visit or contact the business.

- __Stories__

  - A ‘Stories’ section that highlights a particular artist and their release as a means of giving fans an inside look into the creation of that album and the artist process and thoughts on the release. This page would act as a gateway page listing the various artist interviews that would then link to the individual interview pages.

- __Releases__

  - A ‘Release’ section that would list all the releases by the label that would then link to individual pages listing the information for a specific release.


- __Contact Page__

  - A ‘Contact’ page listing the store address, opening hours as well as a form to submit a message and the option to sign up for a newsletter.


## 2. Future features

- In the future an online shopping option would be implemented. The online shop would act as means of strictly selling the exclusive Limited Press releases to a wider audience due to their collector appeal. By limiting the online store to its own releases it would allow the business to have a better sense of its stock situation and would not need to worry about potential issues selling other label releases on their online platform.

- I would also like to add a social media feed such as Instagram or Twitter that would allow the business to quickly update customers about events or releases in the shop. I think that by including this feature it would allow the owners to quickly update customers without the need to go and edit the site for each news item. 

## 3. Typography and Colour Scheme

- I designed the logo for this website so the colour scheme and typography choices are influenced by the logo to create a consistent brand/style throughout.  Oswald is used for headings and emphasis text, I chose it for its bold and clean style to echo that of the logo and Open Sans for some contrast as well as good legibility.

- The colour scheme is minimalist with three colours used at maximum.  I chose these colours to allow for strong contrast and they are also influenced by colour schemes I have seen on similar independent record label sites ([Deep Elm](www.deepelm.com), [No Sleep](www.nosleeprecords.com),
[Artic Rodeo](www.arcticrodeorecordings.com) as three examples) and I wanted to create something similar as that would be the market the site it aimed at.

![colour scheme and logo](readme-images/colour-scheme.png)

## 6. Wireframes

I started off doing my initial sketches on paper to develop the basic layout and site structure. The final website layout did change from this as my initial layout proposal caused issues on mobile devices.

![wireframe sketches](readme-images/initial-sketches.png)

![wireframes illustrator](readme-images/refined-wireframes.png)


## 7. Technology Used
- HTML
- CSS


## 8. Testing 

Below are my results from testing the site both structurally and visually.


### 8.1 Code Validation

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftberrigan2101.github.io%2Fproject-one%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftberrigan2101.github.io%2Fproject-one%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


### 8.2 User observations

- The people I tested the site with found the site easy to navigate and it felt relatively intuitive and the content made sense.

- One of the major issues that was flagged with me was that they thought the off-white background was too strong particularly against the orange text at a smaller size so I made it lighter and my original charcoal tint darker for the final product.

- The second was they felt that the mobile navigation was too small, was hard to read and difficult to tell what you were pressing. I was hoping to develop a 'hamburger' or drop down menu but I was advised by my mentor that it may be too difficult to take on given the timescale so I opted to create a nav section that would float under the logo similar to the [Kids Coding](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSSE_PAGPPF+2021_Q2/courseware/66cf361c769a41d496f5001fae6f9be7/3b5cd5dc8313462aa5975a3c9b9a1a3c/) example. The original layout of the mobile navigation can be seen below.

![mobile-nav.jpg](readme-images/mobile-nav.png)


### 8.3 Fixed bugs

- I wanted to create a two column layout for certain pages of the site so the content wouldn't become stretched across the page. I originally tried to create code for the column layout through CSS and applying it in the HTML so it would be two floating horizontal sections on desktop/tablet and would stack under each other on mobile but wasn't getting the results I wanted. See screenshots and code below.

![two-column layout issue.jpg](readme-images/layout-issue-2-columns.png)

![two-column layout issue.jpg](readme-images/layout-issue-html.png)

![two-column layout issue.jpg](readme-images/layout-issue-css.png)

![two-column layout issue.jpg](readme-images/layout-issue-css-mobile.png)

I then looked at some tutorials on W3 schools and was able to develop a solution from [here](https://www.w3schools.com/howto/howto_css_two_columns.asp)

- I also had some minor issues with the mobile layout of the text on the here images but I was able to adjust that making adjustments in Lighthouse and applying them to the code for the final piece.

![hero-text-errors-mob.jpg](readme-images/hero-text-errors-mob.png)

- I had an issue with the layout of the map when I ran it through the validator. 

![map issue](readme-images/map-issue.png)

I was trying to make it fill the width of the column by applying a width of 100% to the element but this caused the iframe error. However I got a workaround from [here](https://stackoverflow.com/questions/24299990/can-percentage-be-provided-in-iframe-tag-of-html5-tag-for-height-and-width) and applied a width of 100% to the iframe itself in the css file

### 8.3 Unfixed bugs

Nothing that I can see.


### 8.4 Supported Screens and Browsers

- I tested the site using Chrome, Safari and Firefox and all browsers tested fine.

### 8.5 Performance Testing

- Initial test for the site was good and there were a few small changes to be made, mostly image sizing however I decided to stop compressing the hero banners after 2 attempts as I felt the image was being compromised too much.

![performance-homepage](readme-images/performance-homepage.png)

- A major performance issue I was having was due to the embedded Youtube videos on the individual Stories pages

![performance-fails](readme-images/performance-fails.jpg)

- This was due to javascript issues and I felt it was best to leave the videos out for now until I become more familiar with the solutions.



## 9. Deployment


- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - 


## 10. Credits 

In this section I will break down the credits for my project. 

### 10.1 Code

- The footer and the three column float on the Home page for 'Latest Releases' and 'Latest Stories' was developed from the [Love Running](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/f2db5fd401004fccb43b01a6066a5333/) project.

- The fix for my header navigation was developed from the solution in the [Kids Coding](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSSE_PAGPPF+2021_Q2/courseware/66cf361c769a41d496f5001fae6f9be7/3b5cd5dc8313462aa5975a3c9b9a1a3c/) example.

- The flexbox on the [Releases](https://tberrigan2101.github.io/project-one/releases.html) page I sourced from [here](https://www.w3schools.com/css/css3_flexbox.asp).

 - The code I used to develop the 'two column' layout on the individual album release pages, 'Contact' and all the 'Stories' pages I sourced from [here](https://www.w3schools.com/howto/howto_css_two_columns.asp)



### 10.2 Fonts

- All fonts were imported from [Google Fonts](https://fonts.google.com/about)

### 10.3 Written Content 

- All text on the [Homepage](https://tberrigan2101.github.io/project-one/index.html), the [About](https://tberrigan2101.github.io/project-one/about.html) page and on the hero images is written by me.

- The interview on [Bob Nanna Story](https://tberrigan2101.github.io/project-one/stories-bob-nanna.html) was adapted from [Alt Press](https://www.altpress.com/qananna/)

- The interview on [Jonah Matranga Story](https://tberrigan2101.github.io/project-one/stories-jonah-matranga.html) was adapted from [No Echo](https://www.noecho.net/interviews/jonah-matranga-far-onelinedrawing-new-end-original-gratitude)

- The interview on [Ken Andrews Story](https://tberrigan2101.github.io/project-one/stories-ken-andrews.html) was adapted from [Las Vegas Weekly](https://lasvegasweekly.com/ae/music/2015/oct/20/failure-ken-andrews-interview-vegas-fremont-club/)

- The album text on [Brandtson - Dial in Sounds](https://tberrigan2101.github.io/project-one/brandtson-dial-in-sounds.html) was adapted from [Deep Elm](http://www.deepelm.com/music/)

- The album text on [Engine Down - Demure](https://tberrigan2101.github.io/project-one/engine-down-demure.html) was adapted from [Lovitt](http://store.lovitt.com/artists/2-engine-down/product/27-demure-lov028)

- The album text on [Gratitude - Gratitude](https://tberrigan2101.github.io/project-one/gratitude-gratitude.html) was adapted from [The Punk Site](https://www.thepunksite.com/reviews/gratitude-self-titled/)

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### 10.4 Media

- The company logo was created by me

- The images of all the records were taken from [Spotify](https://open.spotify.com/) and the mock ups were created using a mock up from [Graphic burger](https://graphicburger.com/vinyl-record-psd-mockup/)

- The images on the [Homepage](https://tberrigan2101.github.io/project-one/index.html) were taken from [Wikipedia](https://en.wikipedia.org/wiki/Ken_Andrews#/media/File:Ken_Andrews_2014.jpg), [Brooklyn Vegan](https://www.brooklynvegan.com/jonah-matranga-celebrating-new-book-playing-live-sets-on-fall-tour/), [Discogs](https://www.discogs.com/artist/447597-Bob-Nanna). The hero image was created using an image from [here](https://i.ytimg.com/vi/e8o_xaZh21k/maxresdefault.jpg). All images of the records were created using images as credited earlier.  

- The images and hero images on the [About](https://tberrigan2101.github.io/project-one/about.html) and [Contact](https://tberrigan2101.github.io/project-one/contact.html) were sourced from [Unsplash](https://unsplash.com)

- The hero images on the [Releases](https://tberrigan2101.github.io/project-one/releases.html) page and the album detail pages were sourced from [Bandcamp](https://brandtson.bandcamp.com/music).


- The hero image on the [Stories](https://tberrigan2101.github.io/project-one/stories.html) was sourced from [Wikipedia](https://en.wikipedia.org/wiki/Engine_Down#/media/File:Engine_Down.jpg). The other images on this page have been cited above.


### 10.5 Acknowledgements

- I would like to thank my Code Institute mentor Rohit Sharma for all of his help throughout the project.
- My fellow students who helped me along the way.



