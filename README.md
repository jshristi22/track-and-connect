# [Contact Management App with Charts & Graphs](https://cma-cag-sj.netlify.app/)

This project combines contact management and a global COVID-19 case dashboard. It allows users to add, view, edit, and delete contacts using Redux for state management. The dashboard features a line graph for case trends and an interactive map with country-specific popups displaying active, recovered, and death statistics.

##### Key Features

- Contacts Page:
  - Add New Contacts: A form to create and store new contact details.
  - Contact List: Displays all added contacts in a structured list.
  - View Contact Details: Each contact will have a button that shows detailed information for that contact.
  - Edit and Delete Contacts: Functionality to update or remove existing contacts.
  - State Management with Redux: Manages and stores the contact data across the app using Redux.
- Dashboard with Charts and Maps:
  - Line Graph: Visualizes the fluctuation of cases over time using a line chart.
  - Interactive Map with Markers: Uses React Leaflet to display a map with country markers.
  - Country Data Popups: Each map marker shows a popup with the country name and statistics including active cases, recoveries, and deaths.

##### How to run

- Clone project: `git clone https://github.com/jshristi22/track-and-connect`
- Change current directory: `cd track-and-connect`
- Install dependencies: `npm install`
- Start server: `npm run start`
- Visit localhost: open `localhost:3000` to access the website
