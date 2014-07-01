
Ionic demo setup instructions
=====================

## Dev setup instructions MAC-OSX only

## install Node.js

see (node-js)[http://nodejs.org/download]

# install Cordova and Ionic globably
```bash
sudo npm install -g cordova ionic
```

# Add IOS platform to Cordova

```bash
ionic platform add ios
```

```bash
sudo npm install -g ios-sim
```

# install android sdk

```bash
brew install andriod-sdk
```

# Launch Andriod and follow ui to install additional components and Android versions.
```bash
android
``` 

# Add the following to your path in .bash_profile 

export PATH=${PATH}:/usr/local/Cellar/android-sdk/22.3/platform-tools:/usr/local/Cellar/android-sdk/22.3/tools

# Ant is also needed to use Android from the command line.

(Ant install)[http://ant.apache.org/manual/install.html]

# the source bash_profile
```bash
source ~/.bash_profile
```

# Add Android platform to Cordova
```bash
ionic platform add android
```

# Ok you can now build and run in a emulator

```bash
ionic build ios
ionic emulate ios
```

or 

```bash
ionic build android
ionic emulate android
```

# To run on an Android device.

```bash
ionic run android
```


Ionic App Base
=====================

A starting project for Ionic that optionally supports
using custom SCSS.

## Using this project

We recommend using the `ionic` utility to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ sudo npm install -g ionic
```

Then run:

```bash
$ sudo npm install -g ionic
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page.

## Installation

While we recommend using the `ionic` utility to create new Ionic projects, you can use this repo as a barebones starting point to your next Ionic app.

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd ionic-app-base
$ sudo npm install -g cordova ionic gulp
$ npm install
$ gulp init
```

## Using Sass (optional)

This project makes it easy to use Sass (the SCSS syntax) in your projects. This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/ionic.app.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `ionic.app.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/ionic.app.css" rel="stylesheet">
-->
```
## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/contribute/#issues) to the main Ionic repository. On the other hand, pull requests are welcome here!
