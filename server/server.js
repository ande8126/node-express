//require express to make the server
const express = require( 'express' ); //no ./ because npm installed
//our app
const app = express();
//tell the server to use "server/public" 
app.use( express.static( 'server/public' ) );
//tell our app to spin up and listen
app.listen( 5000, ()=>{
    console.log( 'server is up' );
})