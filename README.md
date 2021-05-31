# Shop-Project-Client
##### Amalia Advincula-Roye, Elaine Chan, Kristian Llano

## Back-End Application
A user-based e-commerce application that allows users to browse and purchase
items. The client application utilizes Bootstrap, HTML with SCSS and Javascript,
and React. This repository is the api application which utilizes Express API web
framework and Mongoose to connect to MongoDB to view and track user orders.
Stripe Checkout is used to process and validate the user's payment.

## Deployed Websites
The back-end of the application is deployed on [Heroku](https://sheltered-hollows-93867.herokuapp.com/)
and the repository is deployed on [Github](https://github.com/smolpotats/shop-serverhttps://github.com/smolpotats/shop-server).

The front-end of the application application is deployed on [Github Pages](https://smolpotats.github.io/shop-client/#/)
and the repository is on [Github](https://github.com/smolpotats/shop-client).

## Project Planning
### ERD
[Entity Relationship Diagram](https://imgur.com/iz5jXxn.png)

### Strategy
As a team, we initially utilized [projects boards](https://github.com/orgs/smolpotats/projects/2) on Github to help prioritize and organize our work. Daily, we had
stand-up meetings that consisted of updating the other team members on previous
work done and any blockers that we may have occurred or anticipate.

## Technologies Used
Technology    | Front-End | Back-End |
:-----------: | :-------: | :------: |
**HTML**      | X         |          |
**CSS/SCSS**  | X         |          |
**Javascript**| X         | X        |
**Axios**     | X         |          |
**Bootstrap** | X         |          |
**React**     | X         |          |
**Express**   |           | X        |
**Mongoose**  |           | X        |
**MongoDB**   |           | X        |
**Stripe**    | X         | **       |

* **Stripe is used on our front-end and we utilize Stripe's authentication server.

## API Routes
Method | URI              | Status          | Description          |
------ |----------------- | --------------- | -------------------- |
POST   | /sign-up         | 201, Created    | sign up user         |
POST   | /sign-in         | 201, Created    | sign in user         |
PATCH  | /change-password | 204, No content | change user password |
DELETE | /sign-out        | 204, No content | sign out user        |
POST   | /products        | 201, Created    | create product       |
GET    | /products        | 200, OK         | show all products    |
GET    | /products/:id    | 200, OK         | show a product       |
GET    | /orders          | 200, OK         | show all orders      |
POST   | /orders          | 201, Created    | create order         |
PATCH  | /orders/:id      | 204, No content | update order         |
DELETE | /orders/:id      | 204, No content | delete order         |
