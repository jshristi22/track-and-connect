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
 
##### APIs used

- World wide data of cases: https://disease.sh/v3/covid-19/all
- Country Specific data of cases: https://disease.sh/v3/covid-19/countries
- Graph data for cases with date:
    - https://disease.sh/v3/covid-19/historical/all?lastdays=all

##### How to run

- Clone project: `git clone https://github.com/jshristi22/track-and-connect`
- Change current directory: `cd track-and-connect`
- Install dependencies: `npm install`
- Start server: `npm run start`
- Visit localhost: open `localhost:3000` to access the website

##### Desktop view

![image](https://github.com/user-attachments/assets/bc2e5fea-d45c-46c8-8ddd-c17842599e0b)
![image](https://github.com/user-attachments/assets/c672a432-8625-4de7-8bd9-e5b8b5fb3e09)
![image](https://github.com/user-attachments/assets/bf8fb604-239b-48aa-a0ac-297d34726ecf)
![image](https://github.com/user-attachments/assets/18584ee0-beac-4d69-833b-9a1c15d7fcfa)
![image](https://github.com/user-attachments/assets/0edb8375-1a1b-4385-b3dd-989882f7fdfc)
![image](https://github.com/user-attachments/assets/3af9efaf-7d87-4e95-a0e3-56bc7d29a0ee)


##### Mobile view

![image](https://github.com/user-attachments/assets/1a18ee4f-4f49-44d1-84c5-478615f27f6c)
![image](https://github.com/user-attachments/assets/5ec597b8-a752-4add-a966-231ee73238d5)
![image](https://github.com/user-attachments/assets/cf2380a4-cc75-448f-9fcb-3c361a627c0b)
![image](https://github.com/user-attachments/assets/c0859e9e-dc08-45e9-b8a2-ea0f10ee922b)
![image](https://github.com/user-attachments/assets/e779541c-2703-4976-a2bc-bc8367389422)
