# Shop Template

This template provides basic setup, structure, and components to quickly create simple online shop. Template is made on Vite using React(JS).

## Routing

This template assumes that the following pages will be available in the store:

Public:

- homepage
- products cathegory page
- product page
- shopping cart page
- not found page

Resticted:

- login page
- registration page

Private:

- user profile page
- orders history page
- favorite products page

## Styling

Styling is made using styled-components library. Template styling includes GlobalStyles file with base drops and StyleVariables file where all the repeating variables gathered.

## State management

Redux Toolkit is used for the state management. Redux store initialization, Provider switch, selectors re-export, and authSlice initial state declaration are included to the template.

## Included components

Next components are included and swithed:

- global layout (with mobile menu included)
- router (with both private and restricted routes mechanics)
- product card
- product card list
- link button
- loader
- scroll-to-top

## Tech Stack

<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
<code><img height="50" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styled-components" title="styled-components" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
