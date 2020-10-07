const ytfetcher = require('../src/index')
const { config } = require('dotenv');

//Don't mind this, this is just to declare the API Key
config({
    path: `${__dirname}/../.env`
});

/**
 * This function takes an API Key and the PlaylistId of the YouTube link
 * In this case I'll be using this link https://www.youtube.com/watch?v=XwxLwG2_Sxk&list=PLDIoUOhQQPlXzhp-83rECoLaV6BwFtNC4
 * 
 * This playlist has 140 songs and will return the snippet, contentDetails you can find the documentation for it here:
 * https://developers.google.com/youtube/v3/docs/playlistItems#snippet
 * 
 * 
 * You could view the results of this function in the fetchResults.json in the same directory
 */

ytfetcher(process.env.API_KEY, 'PLDIoUOhQQPlXzhp-83rECoLaV6BwFtNC4')
.then(playlistItems => {
    console.log(playlistItems.length);
    console.log(playlistItems);
});







