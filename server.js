const express = require('express');
const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8a1eeecec9e143949f5a9151b6480e0d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

/*
__dirname: This is sort of like inserting the result of running pwd in your command line – it finds
the full path of your server file. This is useful for running your server in multiple
places (like your local computer and your deployment server) since the absolute path
will change based on what system you’re on.

This code will look for static files (e.g. HTML, CSS) in a folder called "public"
*/
app.use(express.static(`${__dirname}/public`));





app.listen(4000, () => console.log(`server running on 4000`))
