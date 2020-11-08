# HW05-workdayscheduler

### Overview
The purpose of this assignment was to create a scheduling application that allows the user to add events to a current day planner and save them to local storage.  To build this application I mostly used  jQuery for the JavaScript, but also utilized Moment.js and Bootstrap (links for both below).  I used Moment to always pull the live time which then affects the UI of the application; and then I used Bootstrap for various styling options, mainly the columns and row feature.  My main area of trouble for this assignment was getting things to store locally.  I feel like I have a decent understanding of the theory, but falter slightly in the practical execution. 

Things I would add if had more time or wanted to use this for personal use:
1. Add a full calendar to a separate page. I would need to update the code that runs the storage feature, as "day" is not a property of the object that is saved; I'd also need to build that page as well.
2. Add a clear function.  Instead of just writing over the old text to change the text for a certain hour, there should also be a function/button that clears the data inside the input text area. 
3. Style it.  Make it less boring to look at by adding a theme and maybe some other fun functionality like playing certain music depending on the time of day.

### Used applications
Moment - https://momentjs.com/

Bootstrap - https://getbootstrap.com/docs/4.5/getting-started/introduction/

### Links
Live app - https://awsiegfried.github.io/HW05-workdayscheduler/

Github profile - https://github.com/AWSiegfried/HW05-workdayscheduler 

### Screenshot
![screenshot](/Assets/workdayscheduler.png?raw=true)

### Psuedocode
0. Open calendar to current day (normal biz hours, prob 6am-8pm)
1. Save events onto the calendar. 
1a. Add text inside box 
1d. Click save to finish inputting text
1di. Save event into local storage
2. Events are orange
2a. Passed time becomes grey
2b. Future time becomes green
2c. Current time is blue
3. Refreshed page still has saved events
4. Delete (maybe triple click, then alert delete prompt, and if true then delete, if false then keep)