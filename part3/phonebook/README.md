
# Phonebook
## Backend

This application implements phonebook backend.

* The application GET all persons
* The application GET information of one persons
* The application DELETE one person
* The application POST information from one person

The project was build with:

![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

And to deploy backend to internet i use a separeted github repository.

**Instead of heroku i use a railway, because heroku not have a free plan.**

The github repository is a copy of the main repository of the course repository.

* [Github deployment repository](https://github.com/burdas/phonebook-railway)
* [railway.app](https://railway.app)


### Deployment

To install all dependencies

```bash
  $ npm install
```

To run the server in development mode

```bash
  $ npm run dev
```

To run the server in production mode

```bash
  $ npm run start
```

To deploy (upload changes to github)
```bash
  $ git commit -m
  $ git push origin main
```

## Frontend

This application implements a web phonebook.

* The application allows the user to add a new name and number.
* The application don't allows the user to add repeat name
* The application shows the list of the added names and numbers
* The application allows to filter the list by a name
* The application get, post, putm and delete data from the server
* The application shows a notification with success or error

The project was build with:

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SWC Badge](https://img.shields.io/badge/SWC-000?logo=swc&logoColor=fff&style=for-the-badge)


### Deployment

To install all dependencies

```bash
  $ npm install
```

To build this project

```bash
  $ npm run build
```

* **This project is in part2. Copy the dist folder (build) to this folder**
