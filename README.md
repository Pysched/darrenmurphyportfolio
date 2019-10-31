# Darren Murphy Portfolio

## Project Purpose

Stream One Project: User-Centric Frontend Development - Code Institute 
The purpose of this project is to create a portfolio website for the purpose of promoting my skills, abilities and identity to prospective employers. The portfolio showcases a 6 of projects that represent the variety of skills and abilities that I both offer and have developed. It also includes a snapshot of my biography, personality, education, coding skills and multimedia skillsets.  
## Demo
A demo of the site is available here: https://pysched.github.io/darrenmurphyportfolio/index.html
## UX
In the design of this site, my aim was to deliver a simple, minimal yet elegant website that presents information in an easy to view, understand and logical presentation. The development of the colour palette was designed to complement this approach. 
Colour Scheme to be developed and iterated on to understand how it all could work together. This will include paying attention to accessibility concerns such as colour contract and usability concerns of being aware/unaware of hover states and interaction capabilities.
For employers, I am providing a brief overview of my previous experiences, and my personality, this will serve as a brief “get to know me” to warm and inform potential employers to my friendly and amiable nature.
I will be providing links to both previous web and coding works as well as media related pieces I have developed and worked on. The aim being to sell myself with all the bells and whistles attached, however with out displaying everything in one place, potential employers will get a taste of what I am capable of. 
There are also links to my LinkedIn profile, Youtube Videos,and GitHub profile as well as a downloadable CV detailing my entire working and educational history. 
## Technologies
### Bootstrap v4.3.1

https://getbootstrap.com/docs/4.3/getting-started/introduction/
Bootstrap is used in this project for the following:

   - navbar
   - Grid Layout
   - Scrollspy
   - About dropdown information cards
   - Horizontal Bar charts
   - Contact Us form
    
### FontAwesome v5.1.1

https://fontawesome.com/icons?d=gallery
FontAwesome was used for the Social Media icons

   - Facebook
    fab fa-facebook
   - Linkedin
    fab fa-linkedin-in
   - File Download
    fas fa-file-download
   - Youtube
    fab fa-youtube
   - Github
    fab fa-github
   - Coding 
    fa fa-code 
   - Photography 
    fa fa-camera
   - Game Development
    fa fa-gamepad
   - Graphic Design
    fab fa-wpforms
   - UI / UX Development
    fas fa-sliders-h
   - Media Intern
    fas fa-play-circle
    
### Google Fonts

https://fonts.google.com
Google fonts is used for the following font purposes:

   - Section Headings: Permanent+Marker
   - Paragraphs: Ubuntu
    
### GitHub repository

This website is hosted on GitHub
Project name: Pysched/darrenmurphyportfolio
GitHub repository: https://pysched.github.io/darrenmurphyportfolio/index.html
Demo link: https://pysched.github.io/darrenmurphyportfolio/index.html

## Website Requirements
### User Stories(Requirements)

A user requires the need to be able to easily navigate between the respective sections in any order without the need to return to the home section.
 
   - A user needs to be able to read the About section and get a general overview of the person whose profolio page it is.
   - A user needs to be able to view information about the persons education, achievements and hobbies.
   - A user needs to be able to view information on the person's works.
   - A user needs to be able to view information on the person's skills.
   - A user needs to be able to view videos the person's works.
   - A user needs to be able to fill in a contact form for the purposes of illustrating the feature.
   - A user needs to be able to Download the person's CV.
   
## UX
This website shall contain 1 page consisting of 5 sections.
##### Home page
Navigation menu - sticky top
1. Landing (Home) section
2. About section
3. Work section
4. Skills section
5. Contact  section
6. CV & Social Media section


## WIREFRAME
The Wireframes that I initial devised to design the website can be found in the github repository under the following structure

 - Wireframes/Contact.jpg
 - Wireframes/work-about.jpg
 - Wireframes/contact-cv.jpg



## FEATURES
### Navigation bar
The nav bar is positioned sticky top so it is always visible. 

##### Nav links
- Home
- About
- Work
- Skills
- Contact 
- CV 

### Navigation Menu
The navigation menu is composed of navbar expand style links directing users to the relevant section of the page selected.
- background-color:rgba(0,0,0,0.6)!important;
- link color active: #fff
- link color hover: #E27F26;

### Home Page/home section
index.html#home-bookmark  
The main section of the homepage contains a hero image and a title description of the skills or specilisation of the person in the portfolio.  
#### Home image  
https://github.com/Pysched/darrenmurphyportfolio/assets/images/landing1.jpg

#### Header logo  
Is a Simple text consisting of the initials of the persons portfolio page

#### Home Section text
- font-family: Ubuntu
- color: 575757
- text-align: left
- Paragraph image: Man in street https://github.com/Pysched/darrenmurphyportfolio/assets/images/profile1.jpg



### About section
index.html#about-bookmark  
The about section contain 3 bootstrap accordian cards that drop down to reveal future text and information about the person in the Portfolio

#### About Section card styling
 Education 
 - background-color:rgb(25,37,65)
 - border-bottom:rgba(0,0,0,0.6)
 Achieve
 - background-color:rgb(25,37,65)
 - border-bottom:rgba(0,0,0,0.6)
 Hobbies
 - background-color:rgb(25,37,65)
 - border-bottom:rgba(0,0,0,0.6)
 Font : Ubuntu

### Work Section
index.html#work-bookmark  
The work sectionconsists of 6 project cards that have a short description of the content that can be accessed by clicing on the links.  
##### Background image
https://github.com/Pysched/darrenmurphyportfolio/assets/images/profile1.jpg

#### Work Cards
- font: Ubuntu
- color: rgb(250, 250, 250)
- background-color: rgba(0, 0, 0, 0.5)

### Skills Section
index.html#Skills-bookmark  
The Skills section consists of a text body with some information, A horizontal bar chart indicating media software skills and a container containing a clickable pie chart that illlustrates perecntage skills levels in coding languages
##### Background image
https://github.com/Pysched/darrenmurphyportfolio/assets/images/skillsbg.jpg

#### Skills Charts

 - Progress bar Animated
 - chartContainer


### Contact Us section 
The contact us page consists of a form with 4 input fields and a submit button.

##### Background image
https://github.com/Pysched/darrenmurphyportfolio/assets/images/phone.jpg

##### Contact Us form
- background-color: rgba(25, 65, 57, 0.8);
- color: rgb(250, 250, 250); 
- Fields
    1. Name
    2. Phone
    3. Email
    4. Message
- Input fields have attribute [required]

### Footer CV Section
- background-color:#181818
- color: #fff 

The footer consits of sections.
##### Footer / CV Section
1. Social Media Links
2. CV Download icon


##### Social media links
Sourced from FontAwesome https://fontawesome.com/icons?d=gallery
- Youtube icon link
- Linkedin icon link
- Github icon link
- Facebook icon link 
- File Download icon link

    

## Features
This site uses a scrollspy feature while changes the active state of a nav list as the user progresses through the site. The nav bar will stay with the user as they scroll the page and will highlight each new area through as visual indicator as the user progresses through the site.
The about me section contains 3 dropdown areas with content within each for the users to explore quick snippets about my education, Achievements and Hobbies. 
The skills section features bar graphs to represent my skill levels in these areas/  These serve to illustrate my skill level both with coding, research and implementation.
The works section, features containers describing my endeavours with the crative digital media. These feature modals that pop up to highlight that in the future there will be content here
The contact section features a form that users can fill out to get in touch with me. This form is content sensitive and will require users to fill all fields and fill them correctly. An error indicator will highlight an issue for the users to rectify before submitting the information. 
There is also a pop up modal that explains that this section is for demo purposes only
The CV Section features 2 button that will either download the pdf of my CV for users or bring them to a page where they can view it.

### Features Left to Implement
In the future I would like to add actually links to my works as well as adding images / screen shots as examples for users to preview my works.
I would also like to implement a carosel on the landing page to ilustrate some more examples of my passions
# Testing
## Tools
Testing has been carried out using the following devices/browsers
- Desktop
    - Chrome
    - Edge
    - Mozilla
    
## Functional tests
### Test: Nav bar navigation
1. Click on 'Home' link in navbar
2. Verify page navigates to Home section

1. Click on 'About' link in navbar
2. Verify page navigates to Discography section

1. Click on 'Work' link in navbar
2. Verify page navigates to Biography section

1. Click on 'Skills' link in navbar
2. Verify page navigates to Videos section

1. Click on 'Contact' link in navbar
2. Verify page navigates to Contact Us section

1. Click on 'CV' link in navbar
2. Verify page navigates to Contact Us section

### Test: Contact Us Form
##### Test 1 - Test that fields are set as Required Fields
1. Navigate to 'Contact' section
2. Click the 'Submit' button
3. Verify 'Field required' message is displayed for empty field [Name]
4. Enter text to First Name field
5. Click 'Submit' button
6. Verify 'Field required' message is displayed for empty field [Phone]
7. Enter text to Surname field
8. Click 'Submit' button
9. Verify 'Field required' message is displayed for empty field [Email]
10. Enter text to message field
11. Click 'Submit' button
12. Verify 'Field required' message is displayed for empty field [Message]

##### Test 2 - Test that Email field is set for email format
1. Navigate to 'Contact' section
2. Enter text to Name field
3. Enter text to Phone field
4. Enter text without @ symbol to Email field
5. Verify error message is displayed
6. Enter text with @ symbol to Email field
7. Verify Form submission accepted (for test purposes the page pops up a modal explaining that this is a test)


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting the gut url https://github.com/Pysched/darrenmurphyportfolio.git into your browser.

## Credits
### Content
All content on the “Home”, "About Me ", "Work ", “Skills”, “Contact” and “CV” section for this portfolio site were written by me. 
### Media
All images were sourced online from google images
### Acknowledgements

Acknowledgements to the following in constructing this project
- Rahul Patil for his mentoring advice. 
- w3schools for html and css tutorials.

The following features were learned about and modifed for implementation within the portfolio site:

Back to top function - Modified from a tutorial found at https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top from W3C.
 
The scrollspy feature was located here: https://getbootstrap.com/docs/4.0/components/scrollspy/ from getbootstrap, the supporting documentation provided a tutorial on how to implement this feature correctly.

Pie Chart Used in Skills Section Modified from a tutorial located at https://canvasjs.com/javascript-charts/pie-chart-legends/ - by Canvasjs
 
 



