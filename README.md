https://github.com/orlandolee9713/orlandolee9713.github.io
Live link: https://orlandolee9713.github.io/

The weather app pretty much explains itself in terms of what information it is
outputting. But my approach to it was not as easy as it may seem.

First, I registered for an API key with www.openweathermap.org which allowed me
to have access to current weather data. However, the only data that I wanted to display
was information that I personally thought would be useful to most people. For example,
data such as the temperature, wind speeds, humidity levels and the overall description of the weather.

Next, I began laying out the code for the page and the approach that I wanted to use in
order to have a success with creating the project.

I started the layout using HTML but all the functionality of the page is generated
using my app.js. A default image is set as the background of the application but the app.js is set
so that when the user enters a city name into the input bar and clicks on the "Find Weather"
button the background image changes to one of the images that I had saved into my images folder.
The images that display match with the current weather condition in that city. For example,
if the weather is rainy in Manhattan the image of "rain" will display.

I recently purchased the "Eloquent Javascript Third Edition" book and in that (and also online) I
discovered switch statements which you will see in my code. The switch statements I substituted
for the normal if else statements. I found that switch statements serve the same purpose in
that they are used as a branch to connect statements together. It appeared easier and new so I took
that approach because I felt that it would of required me to write less code than I normally
would of had to in order to get the background images to change according to the current weather
in the desired city.

Along with the background changing an icon appears underneath the city's name that represents
the current weather as well. The openweathermap.org website had a link that would enable the
icons to be displayed according to the current weather.

Of course there is some displayed text that appears which matches the icon and updated background
in the browser as well as the wind speed in miles per hour, the temperature in
degrees Fahrenheit and also the level of humidity measured by percentage.

I used a bit of math floor because some of the numbers given were not whole numbers so the
temperature, wind speed and humidity are numbers all rounded down to the nearest tenth.

One unsolved problem that I had was that I could not get a reset function to work. When the city
name is inputed all of the information is displayed. However, if a user would like to enter in a new city they would have to refresh the page.

Overall designing this app was very fun and pretty cool. I am still at the beginning stages of my
coding career but I already feel accomplished with this small project. When I started coding a few
months back I could not do half of the things I can do now so I look at this as progress. One thing
I want to continue to progress in is CSS and styling. My app could of used a bit more design but I
am still not very good at CSS yet. I'm excited for future improvements.
