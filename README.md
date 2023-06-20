# JavaScript Backend
## Node.js + Express.js to build our first API
![rest-api-node-plus-express_js-Dani](https://github.com/danielurra/node-first-api/assets/51704179/36235412-fc5a-48b6-83b9-e1acb697033f)<br>
* **Node.js** is a runtime built on Chrome's V8 JavaScript engine, it allows us to run JavaScript outside the browser.
* **Express.js** is a `minimal framework` especially useful for writing RESTful API code.<br>
  **Express.js** offers a broad set of APIs, HTTP methods, and middleware that modern web applications need.<br>
  **Express.js** helps developers to eliminates a lot of boilerplate-type code from their application code.<br>
* **API** (Application Programming Interface), It can be thought of as a contract of service between two applications.<br>

![rest-api-model](https://github.com/danielurra/node-first-api/assets/51704179/5bd63cf9-26ac-4170-983e-ed52a6a70111)<br>
**REST** is based on HTTP methods and URL structure.
## Main JavaScript file index.js
![index-js-file](https://github.com/danielurra/node-first-api/assets/51704179/0bc372fa-937b-4f37-9740-aa4e85d2e993)<br>
## Grab the code
```javascript
const express = require ('express') ;
// Reading a file (in Node.js) is accomplished asynchronously
// by using the file system (fs) module
const fs = require ('fs') ;

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
    console.log("Web server is running on Port 3033 ");

})
```
## JSON file pretending to be our Data Base
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
The `package.json` file is automatically created when you initalize your project by using the following command:
```bash
npm init
```
![package-json](https://github.com/danielurra/node-first-api/assets/51704179/ddabbd88-3ad6-4653-86c1-9a1fb5c520ef)<br>
## Server response - JSON data
I had to install one browser extension to get the Json data properly formatted.<br>
For Google Chrome I did install the extension available at:<br>
https://chrome.google.com/webstore/detail/json-viewer<br>
![response-json](https://github.com/danielurra/node-first-api/assets/51704179/140e2620-d957-434c-a328-ab67c91e14ae)<br>

