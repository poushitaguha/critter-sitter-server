# Critter Sitter Server

This project was created as a back-end api for the critter sitter app.

# Team Members

- Melanie Maddix
- Nikita Jiandani
- Poushita Guha

## Project Setup

Fork and clone this repository

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
5. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
6. Run the server: `npm run local`
7. You will need this server running to work as an api for the critter sitter app.

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
