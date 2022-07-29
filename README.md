# Hotel-Management(NodeJS)
<p align="center">
  <img src="images/nodejs-1-logo.png" height=150px width=150px>
</p>
<p> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Hotel Management app allows users to reserve, cancel, list and read their reservation for a restaurant along with relevant details like name, time of reservation and seats reserved from a JSON file using node through the command line interface. The app also lets users know if there is already a seat reserved at a given time and if they have made double reservation.
</p>

<h2> Concepts Covered </h2>
<ol>
  <li> Node Core Module- File System(fs) </li>
  <li> Npm package- yargs </li>
  <li> Handling data from JSON file </li>
</ol>

## Installation and Setup
Install NodeJS and initialise npm
```Bash
node -v
npm init
```
Install Node modules for dependencies
```Bash
node install
```
Download npm package yargs
```Bash
npm install yargs
```
Run the app
```Bash
node app.js <command> --name="<string>" --time="<string>" --seats=<int>
<command>= reserve, cancel list and read
```
