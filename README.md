
[![Coverage Status](https://coveralls.io/repos/github/dotexe0/outside/badge.svg?branch=master)](https://coveralls.io/github/dotexe0/outside?branch=master)
[![Build Status](https://travis-ci.org/dotexe0/outside.svg?branch=master)](https://travis-ci.org/dotexe0/outside)

## Outside

<h2>About</h2>
A Single Page Application (SPA) built on React/Redux and MongoDB. This app lets you manage events and/or scheduled by allowing a user to create an event with the following information:

* Event Name
* Date
* Description
* Location
* Invitees
* Private / Public Event (Boolean)

## Live:
http://.........com


## Tools
**Front End**
* ReactJS/ Redux
* HTML5
* CSS3
* Bootstrap
* Material-UI
* Javascript (ES6/7)

**Back End**
* MongoDB/ Mongoose
* Google Places Autocomplete API
* Axios (HTTP requests to internal API)

**Testing**
* Jest

**Deployment**
* TravisCI
* GH-Pages
* Heroku

## Landing Page...
![Landing Page](http://imgur.com/SxLNkkw.jpg)

## Creating Events requires login
![Landing Page](http://imgur.com/AlwBD9v.png)

## Creating Events once logged in
![Landing Page](http://imgur.com/zpMlXl9.png)

## Public Events
![Landing Page](http://imgur.com/8Ud3qAV.png)

## Folder Structure

Front end and backend is separated into two main folders for modularity:

```
outside/
  README.md
  frontend/
    node_modules/
    package.json
    public/
      index.html
      favicon.ico
    src/
      css/
      js/
        actions/
        components/
        reducers/
        test/
  backend/
    node_modules/
    server/ 
      config/
      helpers/
      modules/
        events/
        users/
```

