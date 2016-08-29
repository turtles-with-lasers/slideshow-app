## Backend:
###### Database:
We use MySQL as a database along with Knex to use migrations and the query builder. How does this work? Simple, first install Knex globally with NPM ` npm install knex -g`. Initiality you'll need to create a database yourself, name it `slideshow`. After you have created your database, you're gonna want to import the database structure by navigating to the `backend` folder and running `knex migrate:latest`. This will update your database structure. You will have to run `knex migrate:latest` every time a migration is added in the `backend/migrations` folder. The idea of this is to have a simple version control for the database itself. Also, don't forget to `npm install`.

###### Authentication:
To register a new user, simply send a POST request to `/api/auth/register`. This route requires an `email` and `password` field. This will return a JSON response of `{success: true, message: 'ok'}` if the user was succesfuly registered.

Logging users in works by using an api_token. First you send a POST request to `/api/auth/login`. This route requires an `email` and `password` field. This will return a JSON response of `{success: true, message: 'ok', data: {api_token: api_token}}` if the user was succesfuly logged in or `{success: false, message: 'incorrect password'}` if the password is incorrect. This token will have to be stored as a cookie and will have to be sent with each authenicated request via the header.
