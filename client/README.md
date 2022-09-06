# GreenWise

GreenWise is a React web application that allows users to estimate their environmental footprint and, after visualising their results, users will be encouraged to take action to reduce and compensate their impact.

## Author

Felipe Franco
[https://www.linkedin.com/in/felipefranco-ldn/]
[https://github.com/felipefranco-ldn]

## 🚀 About Me

Hello! I'm a Full Stack Web Developer, Architect and Product Designer!

I am from Bogota, Colombia, and am currently based in London but have also lived in Italy, Germany and Sweden.

After several years in the architecture industry, I decided to start a career in tech to be part of London's exciting and growing tech scene!

I am passionate about design, science, technology and nature and love travelling, visiting new places, discovering new food and learning languages...

Look forward to starting a new chapter in my professional life as a Web Developer, after learning a whole new set of tech skills at BrainStation!

## About GreenWise

Planet Earth is in crisis! And taking care of the environment is arguably the most urgent challenge that humanity faces nowadays. This issue needs to be tackled by the society as a whole but also from an individual perspective, as small changes in a person’s behaviour and daily choices can have a huge compound impact.

As a starting point, we all need to be aware of the environmental impact of our daily activities. Then we can compare that information with some targets that could help drive a positive change; that way we will know what needs to be improved and by how much.

GreenWise provides an easy-to-use tool to visualise a user’s carbon footprint and will help them make informed decisions on how to contribute to the transformation of our planet for the better. Navigation flow is simple and data is visualised in a concise, compelling and attractive manner, with colourful images, animated content, etc. The aim is to deliver and interactive journey so that users feel engaged with the content and encouraged to move forward in the site’s narrative.

This is achieved by going through GreenWise's three sections:

1. Estimate:
   Users will be able be to visualise information about their carbon footprint in three different fronts:
   a. Home electricity consumption
   b. Flights
   c. Vehicles
   In each section, after providing some input information, the estimated results will be dynamically displayed in a chart. There are comparisons with relevant benchmarks and a summary with compelling insights about the results.

2. Reduce:
   This section has a list of suggestions to take action, starting at home. Each suggestion provides CO2 and money savings per year. Users can choose the suggestions they would like to follow and a chart at the top of the page will summarise the savings. Additional useful links are provided at the bottom of the page.

3. Compensate:
   A list of carbon offsetting projects is presented. Each project displays relevant details and a link for more information. Links to additional projects and complementary information are provided at the bottom of the page.

> > Additionally:
> > The "My Account" section provides OAuth for users who want to keep track of their estimates (which will be shown in the "Dashboard"). However, users are not required to register or log in to use the website's features. OAuth can be done by providing email and password or by using Google account.

## User profile

GreenWise is targeted at people concerned about environmental issues and their own impact on nature, who know that change starts at home and who have the initiative and goodwill to make changes in their lifestyle for the greater good. They are likely to be young and middle-aged adults who want to make sure our planet is a good place for future generations to live, and they are aware that urgent action needs to be taken now.

GreenWise helps its users to find objective information to measure their impact and provides benchmarks to compare with. This is to encourage users to define improvement goals that are compatible with their routines and, finally, contribute to a project that is aligned with their personal interests.

## Getting started with GreenWise

In your console:

1. cd into the root directory and then cd into the client folder.
2. To install all necessary dependencies, run the command:
   `npm i`
3. Once all dependencies have been installed, start the localhost by running the command:
   `npm start`
4. GreenWise should start running in your browser locally in port 3000.
   [http://localhost:3000] (open in your browser if it doesn't open automatically)
   The page will reload if you make edits.
   You will also see any lint errors in the console.
5. Have fun!

## Tech Stack

**Client:**
GreenWise was created using Create React App.

- It incorporates HTML5, CCS and JavaScript.
- Styling was applied using Sass.
- It uses ReactRouter to enable the navigation between the different pages.
- The project lives in a Git repository in GitHub.
- The estimates’ data is fetched from an API called CarbonInterface.
- Chartjs library was used to generate the charts.
- User authentication was implemented using Firebase.
- And the website was deployed using Heroku.

**Server:**
To be implemented

## Future steps

The immediate next step is to refactor portions of the code to use React components as much as possible, in order to exploit React's potential to make the code more concise and efficient, keeping it DRY and making it more easy to read and work with.

Next step is to implement responsiveness, so that GreenWise can be used on mobile devices as well.

In the future I would like to incorporate more functionalities, like saving a history of estimates, as well as estimating your carbon footprint based on your diet and provide the environmental impact of everyday goods, like clothing, appliances, hygiene products, etc.

## Deployment

GreenWise has been deployed using Heroku and can be accessed at the following link:

[https://green-wise.herokuapp.com/]
