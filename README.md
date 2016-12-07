# LernaMultipackage
Project to test monorepo with multiple packages.

## Initial installation
To use [Yarn](https://yarnpkg.com) package manager run `npm install -g yarn` (_highly recommended_).
Then just run `yarn`.

`yarn setup` provides basic [Lerna](https://github.com/lerna/lerna) setup and installs package dependencies of all modules

## Usage
`yarn test` runs tests of all modules

`yarn security` checks for known vulnerabilities

## Committing changes
`yarn commit` forces user to write commit message according to [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)  

`git push` runs tests of all modules and then pushes changes to GitHub repository
