# How-to build:

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

## Click [HERE](https://fantasy-home-brewery.herokuapp.com/) to explore fantasy-home-brewery

![Alt Text](https://i.giphy.com/media/SQgbkziuGrNxS/giphy.webp)
