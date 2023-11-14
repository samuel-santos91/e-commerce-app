# e-commerce-app
## Live Version
Link: https://samuel-santos91.github.io/e-commerce-app/

## Description 
This app is a mock e-commerce of candles;
### Purpose
* Implement <strong>Cloud Firestore</strong>(NoSQL database)
* Implement REST API to fetch the product data
### Tech Stack
* React.js
* Sass
* Firestore - as the database

## Preview
### Landing page
<img width="500" alt="Screenshot 2023-10-09 at 22 30 05" src="https://github.com/samuel-santos91/e-commerce-app/assets/107240729/9fe8dc63-eb19-45d7-8a3b-18ec8f342305">

### Featured candles
<img width="500" alt="Screenshot 2023-10-09 at 22 30 32" src="https://github.com/samuel-santos91/e-commerce-app/assets/107240729/9fc3df22-4afe-474d-8c6e-6bb88054e18e">

### Favourites
<img width="500" alt="Screenshot 2023-10-09 at 22 30 44" src="https://github.com/samuel-santos91/e-commerce-app/assets/107240729/6f8e7498-e55a-4e40-b742-445ee936f925">

### Main display
<img width="500" alt="Screenshot 2023-10-09 at 22 32 05" src="https://github.com/samuel-santos91/e-commerce-app/assets/107240729/c8036ab0-2720-4a08-87f2-4d63c716dde1">

### Product page
<img width="500" alt="Screenshot 2023-10-09 at 22 31 10" src="https://github.com/samuel-santos91/e-commerce-app/assets/107240729/bb37f15a-c86c-4f68-816e-c435713c166b">

### Cart
<img width="500" alt="Screenshot 2023-10-09 at 22 31 28" src="https://github.com/samuel-santos91/e-commerce-app/assets/107240729/1a8c32f2-cfcd-4765-b6fa-c6859a0dd58b">

### End checkout
<img width="500" alt="Screenshot 2023-10-09 at 23 01 18" src="https://github.com/samuel-santos91/e-commerce-app/assets/107240729/b978efcf-7088-41e8-b2ca-26b818086746">

## About
### Sections
* There are five different pages in this app:
  * Main page;
  * All products page;
  * Single product page;
  * Cart;
  * End of purchase page;
* The main page display the featured candles and also the ones that were favourited;
* In the product page you can choose amongst the different scents and add to cart;
* In the cart section you can increase and decrease the quantity and go to checkout.
### Features
* The featured products on the main page are displayed in a caroussel
* You can favourite any product. In doing so, it will be displayed in the main page
* When clicking on the checkout you are redirected to the End of Purchase page, and the stock of that product is decrease by one

## Firebase/Firestore
The app uses Cloud Firestore as the database. It is organised into 2 different collections:
* The displayed candles;
* and candles added to cart.

## Prerequisites
### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm run dev
```
