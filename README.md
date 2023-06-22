# JavaScript Backend
![rest-api-node-plus-express_js-Dani](https://github.com/danielurra/node-first-api/assets/51704179/36235412-fc5a-48b6-83b9-e1acb697033f)<br>
## Let's build our first API
* **Node.js** is a runtime built on Google Chrome's V8 JavaScript engine.<br>
  **Node.js** is a server-side scripting language that allows us to run JavaScript outside the browser.<br>
  **Node.js** uses `JavaScript’s asynchronous programming paradigm.`<br>
  **Node.js** uses an event-driven, non-blocking I/O model, allowing it to handle multiple requests without getting blocked.<br>
  **Node.js** is single-threaded, instead of separate processes and threads, it uses asynchronous, event-driven I/O operations.<br>
  **Node.js** is known for its efficiency and scalability, it can handle a large number of concurrent connections.<br>
  **Node.js** is ideal for apps that require real-time interactions, such as chat, collaboration, and games.<br>
* **Express.js** is a `minimal framework` especially useful for writing RESTful API code.<br>
  **Express.js** offers a broad set of APIs, HTTP methods, and middleware that modern web applications need.<br>
  **Express.js** helps developers to eliminates a lot of boilerplate-type code from their application code.<br>
* **API** (Application Programming Interface), It can be thought of as a contract of service between two applications.<br>
* **REST** stands for `Representational State Transfer` it's a model through which an app can access, create, modify, or delete resources<br>
  **REST** extends the hypertext concepts with a clearly defined and standardized model for retrieving, transferring, and manipulating the state of complex objects across a network.<br>
If you'd like to learn more about REST API and how to build one I do recommend you to take a look at the following blog:
https://medium.com/nerd-for-tech/designing-a-rest-api-3a070398750f<br>
**Dick Dowdell** has created such a fantastic article.<br>

![rest-api-model](https://github.com/danielurra/node-first-api/assets/51704179/5bd63cf9-26ac-4170-983e-ed52a6a70111)<br>
**REST** is based on HTTP methods and URL structure.
## Main JavaScript file index.js
![index-js-file](https://github.com/danielurra/node-first-api/assets/51704179/0bc372fa-937b-4f37-9740-aa4e85d2e993)<br>
## Run your "node" app
```bash
node ./index.js
```
## Code with comments - grab the code w/o comments from the repo folder
```javascript
// First, we begin by importing the needed Node.js modules
const express = require ('express');
const fs = require ('fs');
// Reading a file (in Node.js) is accomplished asynchronously by using the file system (fs) module

const app = express();
// here you create an Express application instance
app.get ('/pending_tasks', (req, res) => {
// here you tell the app that for a GET request the URL /pending_tasks, execute the given function.
    fs.readFile(__dirname + '/' + "ptasks.json", 'utf-8', (err, data) => {
        if (err){
           return console.log("err")
        }
        res.send(data)
    } )
})

app.listen(3033, () => {
    // Finally, you just have to start up the Express app by telling it what port to listen on.
    console.log("Web server is running on Port 3033 ");

})
```
## JSON file pretending to be our Database
We never use a simple file in a **real world** scenario, we use Databases instead, here for simplicity and educational purposes only we are making use of a simple file.<br>
![jason-file](https://github.com/danielurra/node-first-api/assets/51704179/78778941-db6d-4833-b917-af68a0dd844f)<br>
## Grab the code
```json
{
    "pend-task#1":{
        "task-id" : 1,
        "task-desc" : "Take code lessons"
    },
    "pend-task#2":{
        "task-id" : 2,
        "task-desc" : "Go to the gym"
    },
    "pend-task#3":{
        "task-id" : 3,
        "task-desc" : "do homework"
    },
    "pend-task#4":{
        "task-id" : 4,
        "task-desc" : "Fix the fence"
    }
}

```
## Package.json file
The `package.json` file will be automatically created after a short interactive tool that will ask you to enter info related to the App you're creating, things like:<br>
* Author's Name
* App version
* Type of Licence
* Define **Dependencies**, that are other software needed to properly work (use --save everytime you install something to automatically add an entry here)
* Define custom commands or scripts (npm run Blablabla)
* Etc.

```bash
npm install express --save
```
Will not only install the package it will also add the following to the package.json file:<br>
```bash
"dependencies": {
 "express": "^3.4.11"
 }
 ```
```bash
npm install jest --save-dev
```
Will not only install the package it will also add the following to the package.json file:<br>
```bash
"devDependencies": {
 "jest": "^24.9.0"
 }
```
  
The interactive tool is launched when you initalize your project by using the following command:<br>
```bash
npm init
```
![package-json](https://github.com/danielurra/node-first-api/assets/51704179/ddabbd88-3ad6-4653-86c1-9a1fb5c520ef)<br>
## Server response - JSON data
I had to install one browser extension to get the Json data properly formatted.<br>
For Google Chrome I did install the extension available at:<br>
https://chrome.google.com/webstore/detail/json-viewer<br>
![response-json](https://github.com/danielurra/node-first-api/assets/51704179/140e2620-d957-434c-a328-ab67c91e14ae)<br>
![http-method-GET-protocol-endpoint](https://github.com/danielurra/node-first-api/assets/51704179/15ee5b13-48e0-420d-bafc-55679f97897b)<br>

## Google chrome developer tools - HTTP method GET
My Mac is now acting as my web/db server, knowing its `IP address` and from any other computer in my home network I can test my API<br>
![chrome-dev-tools-method-get](https://github.com/danielurra/node-first-api/assets/51704179/de9a4a6e-c231-469d-b116-be10ba5030ca)<br>
## Google chrome developer tools - Response
![chrome-dev-tools](https://github.com/danielurra/node-first-api/assets/51704179/058659af-7649-462a-a583-58fad2dd49a1)<br>
## Google chrome developer tools - Preview
![chrome-dev-tools-preview](https://github.com/danielurra/node-first-api/assets/51704179/57f84472-08b6-477d-a37d-a0181719df88)<br>




