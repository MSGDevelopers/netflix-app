# OnPointFlix

[![Netlify Status](https://api.netlify.com/api/v1/badges/0a51d0e9-f611-4dd8-887f-fc1889e68540/deploy-status)](https://app.netlify.com/sites/onpointflix/deploys)

[OnPointFlix.com](https://onpointflix.com/) is a React web app built to help find you the best movies to watch on the planet!

## Features

- Built with [React v17](https://reactjs.org/docs/create-a-new-react-app.html)
- Routing provided by [React Router](https://reactrouter.com/)
- Styled with [Semantic-UI React](https://react.semantic-ui.com/)
- Hosted on [Netlify](https://app.netlify.com/)
- Code formatted by [Prettier](https://prettier.io/)

---

## Installation

Prerequisites (Download and Install)

1. [Node.js](https://nodejs.org/en/download/) - This is the local webserver used to build and host your compiled React app - i.e. `localhost:3000`
2. [Visual Studio Code](https://code.visualstudio.com/) - The IDE/Code Editor you will be using to write your code
3. [Git](https://git-scm.com/download/win) - Source code version control system - Allows us to collaborate without stepping on eachothers toes

Next, open VSCode and start up a terminal via `Terminal > New Terminal` and change directories until you are in the folder that you would like to develop in - i.e. ` C:/Users/Keeneng/Web Development` (you can name the folder whatever you want)

```sh
cd C:/Users/*your-user-goes-here*/Web Development
```

Clone the git repository to your development folder:

```sh
git clone https://github.com/msgdevteam/onpointflix.git
```

To install and run the React App:

```sh
npm install
npm start
```

The `npm start` command will Run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Development

###### Overview:

- The `master` branch contains all the production code (Whatever is in `master` is what you will see on [OnPointFlix.com](https://onpointflix.com/))
- We will develop using the `dev` branch (we will create our own branches from the `dev` branch) - i.e. `dev` > `keenengs-branch`

###### Git Tips:

- Change to the `dev` branch

```sh
 git checkout dev
```

- Create your own branch from dev

```sh
 git checkout -b "name-of-branch-goes-here" dev
```

- Commit your code

```sh
 git commit -m "This is your commit message (a brief description of your code changes)" -a
```

- Push your code

```sh
git push --set-upstream origin "name-of-branch-goes-here"
```

- Check status of your code

```sh
git status
```

- Check latest local commits

```sh
git log
```

&nbsp;
&nbsp;
&nbsp;
