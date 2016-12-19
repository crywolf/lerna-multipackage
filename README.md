# LernaMultipackage
Project to test monorepo with multiple packages.

## Initial installation
To use [Yarn](https://yarnpkg.com) package manager run `npm install -g yarn` (_highly recommended_).
Then just run `yarn`.

`yarn setup` provides basic [Lerna](https://github.com/lerna/lerna) setup and installs package dependencies of all modules

## Usage
`yarn test` runs tests of all modules

`yarn security` checks for known vulnerabilities

(Every time you add a new dependency to `package.json` in any module run `yarn setup` to install it.)

## Committing changes
`yarn commit` forces user to write commit message according to [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)  

`git push` runs tests of all modules and then pushes changes to GitHub repository

## Creating a new module
Create a new feature branch.

In that feature branch create a new module directory in `apps`, `domain` or `ui` directory. Provide `package.json` with version field "0.0.0".
Run `yarn setup`.

When the new module is completely finished and you want to publish a new package v1.0.0 make a feature commit with affected module set to the module name.

Create a pull request. When this pull request is merged to master branch, version in `package.json` will be set to 1.0.0 and after push a new module package will be published.
Then you can use it as a dependency in `package.json` files of other modules.

## Workflow
* Create a feature or bug-fix branch. Continuously commit your progress by running `yarn commit`. The new feature must have one feature commit with "affects" field properly set to the module name. (The same rule applies for each bug-fix.)
* Push your changes to the remote repo.
* Create a pull request.
* When your pull request is merged to master branch, version of affected module will be set accordingly ([semver](http://semver.org/))
* When the master branch is pushed to the remote repo the new version of the module package will be published by CI server.
* Next you can create/update Changelog files by running `yarn changelog` and commit/push them to the remote repo.
* Subsequently the new package version can be used in other modules.
