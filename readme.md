Node/Express intro
---

[ ] set up folders

root folder:

server
server/public/
server/public/scripts
server/public/vendors
server/public/styles

[ ] init git
[ ] add .gitignore (in root folder, add .DS_Store & node_modules)
[ ] add index.html to "server/public"
[ ] add client.js to "server/public/scripts"
[ ] move jQuery to "server/public/vendors"
[ ] create server.js
[ ] npm install express(should have "node_modules" folder in root)
[ ] edit server.js (require express, set up express static)
[ ] npm init --y (this will initialize an npm project)
[ ] update server.js

```
//require express to make the server
const express = require( 'express' ); //no ./ because npm installed
//our app
const app = express();
//tell the server to use "server/public" 
express.static( 'server/public' );
//tell our app to spin up and listen
app.listen( 5000, ()=>{
    console.log( 'server is up' );
})
```