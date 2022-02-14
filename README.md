# How-to build:

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7f90799595834061894498abeee44223)](https://app.codacy.com/manual/brunohaf/es.api?utm_source=github.com&utm_medium=referral&utm_content=brunohaf/es.api&utm_campaign=Badge_Grade_Dashboard)

- Clone this repository.
- Download and install Node from Node.js *[website](https://nodejs.org/en/download/)*.
- Navigate to es.api local repository and open [git bash](https://gitforwindows.org/) or the default windows cmd prompt.
- Execute the following commands:<br>

### Using Npm:
- `npm install`
- `npm start`

### Using Yarn (Recommended):
- `npm install -g yarn`
- `yarn`
- `yarn start`

- Access Swagger documentation through [localhost:3000](http://localhost:3000).

# How-to publish:

- Create a [heroku](https://id.heroku.com/login) account.
- Download and install [Heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Clone this repository.

### Execute the following commands:
- `npm init`
- `heroku create <app-subdomain>` 
Save the app name given in the console message:<br>
`Creating app... done, <app-name-666>`<br>
`https://<app-name-666>.herokuapp.com/ | https://git.heroku.com/<app-name-666>.git`

#### Then

- `heroku git:remote -a <app-name-666>`

- Rename your remote using:
- `git remote rename heroku <remoteName>`

- Publish your app with:
- `git push <remoteName> master`

## Click [HERE](https://es-api1.herokuapp.com/ ) to explore es.api

![Alt Text](https://i.giphy.com/media/SQgbkziuGrNxS/giphy.webp)
