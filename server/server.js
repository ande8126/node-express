//require express to make the server
const express = require( 'express' ); //no ./ because npm installed
//our app
const app = express();
//tell the server to use "server/public" 
app.use( express.static( 'server/public' ) );
//globals
const port = 5000;
let devices = [ 'android phone', 'fire tablet' ];
//tell our app to spin up and listen
app.listen( port, ()=>{
    console.log( 'server is up' );
})

//our first GET route
app.get( '/devices', ( req, res )=>{
   console.log( '/devises GET' );
   res.send( devices ); 
})