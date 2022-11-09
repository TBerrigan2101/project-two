# Ghostbusters ESP Test Game

Live site: https://tberrigan2101.github.io/project-one/

A game based on the same principles as 'Rock, Paper, Scissors' but with a twist based on inspiration from a recent Halloween viewing of the 1984 film 'Ghostbusters'

The game is based on the [ESP Test Scene](https://youtu.be/HW8Ua49dCYk) of the movie when Dr. Peter Venkman (Bill Murray) is performing an ESP (Extrasensory perception, or sixth sense) test with two volunteers that have to guess the symbol on the card Dr. Venkman is holding.


## 1. Features 



- __Theme and Colour Scheme__

  - I based the colour scheme on colours associated with the Ghostbusters branding such as the red and white from the famous Ghostbusters logo, green to represent the slime colour and the yellow and black angled lines with smoke as seen on the trap prop from the film.


  ![ghostbusters branding](readme-images/ghostbusters_branding.jpg)


  
- __Header and Introduction__

  - I created a logo for the top of the page as 'Ghostbusters Recruiting' with the concept that this page would effectively be a fictional recruitment page to hire potential new Ghostbusters. I used lines and referencees from the film for effect and then explained that in order to successfully join the team the applicant would need to attempt the ESP test on the page.

- __Game Options__

  - The instructions state to choose from one of five options by clicking on the interactive buttons below in an attempt to successfully match the symbol on the card the Dr. Venkman (the computer) is theoretically holding. The five options are based on symbols mentioned in the film and created by me in Adobe Illustrator.

  - The five options are.

- __The Game Mechanics__

  - When the user picks their option, their choice is shown on the left side of the screen. 

   - The computer using a random option in the playGame() function then chooses an image from the const 'choices' declaration and displays its choice on the right side of the screen.

   - Depending on the result, the player score or the computer score increases accordingly along with a message from Dr. Venkman congratulating or commiserating them depending on the result, again using lines from the film.

     - Once the player has taken a turn, the game starts the next round and a random preparatory line is stated by the computer based on another random method and choosing options from 'const intervalText'. 


## 2. Future features

- It was proposed by mentor that I created an overlay div for the buttons once the buttons are clicked to avoid the user pressing the button too quickly after picking their option.

- I would like to have some type of animation for revealing the cards.


## 3. Wireframes

I started off doing my initial sketches on paper to develop the basic layout and site structure. The final website layout did change from this as my initial layout proposal caused issues on mobile devices.

![wireframe sketches](readme-images/initial-sketches.png)

![wireframes illustrator](readme-images/refined-wireframes.png)


## 4. Technology Used
- HTML
- CSS
- Javascript


## 5. Testing 

Below are my results from testing the site both structurally and visually.


### 5.1 Code Validation

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftberrigan2101.github.io%2Fproject-one%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftberrigan2101.github.io%2Fproject-one%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


### 5.2 User observations

- The people I tested the site with found the site easy to navigate and it felt relatively intuitive and the content made sense.

- One of the major issues that was flagged with me was I originally had text buttons for the game options and an image on the left showing the icons visually and they though they were interactive so they bypassed the text buttons and clicked on the icon display graphic which wasn't an active button. After that I decided to remove the text buttons from the menu and just use the individual icons as buttons and replaced the player image on the left side wih the Ghostbusters graphic.

### 5.3 Fixed bugs


### 5.3 Unfixed bugs

Nothing that I can see.


### 5.4 Supported Screens and Browsers

- I tested the site using Chrome, Safari and Firefox and all browsers tested fine.

### 5.5 Performance Testing

- Initial test for the site was good and there were a few small changes to be made, mostly image sizing that I compressed to the point where I thought wouldn't be compromised.

![performance-homepage](readme-images/performance-homepage.png)

- A major performance issue I was having was due to the embedded Youtube videos on the individual Stories pages

![performance-fails](readme-images/performance-fails.jpg)

- This was due to javascript issues and I felt it was best to leave the videos out for now until I become more familiar with the solutions.



## 6. Deployment


- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - 


## 7. Credits 

In this section I will break down the credits for my project. 

### 7.1 Code

- I built some of the code based on the code shown in the [Rock Paper Scissors](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/) example project from Code Institute.


 - The code I used to develop the timeout feature in the function resetGame() was taken from [here](https://www.w3schools.com/js/js_timing.asp)

### 7.2 Fonts

- All fonts were imported from [Google Fonts](https://fonts.google.com/about)

### 7.3 Written Content 

- While I edited or wrote all the text, it contains references derived directly from quotes from the film which I sourced from a transcript [here](https://movies.fandom.com/wiki/Ghostbusters/Transcript).

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### 7.4 Media

- The header logo was designed by me using a vector of the Ghostbusters logo from [here](https://www.brandsoftheworld.com/logo/ghostbusters-6)

- The image of the Ghostbusters cast was taken from [here](https://imgur.com/gallery/siIqH8C)

- The image of Peter Venkman (Bill Murray) was taken from [here](https://www.comingsoon.net/movies/news/1109307-bill-murray-confirmed-for-ghostbusters-2020-return#/slide/1)

- The image I used to create the green smoke at the bottom of the page was taken from [here](https://www.pngitem.com/middle/TTJwT_grey-smoke-png-transparent-image-smoke-transparent-background/)

- The icons for the buttons were designed by me in Adobe Illustrator.


### 7.5 Acknowledgements

- I would like to thank my Code Institute mentor Rohit Sharma for all of his help throughout the project.



