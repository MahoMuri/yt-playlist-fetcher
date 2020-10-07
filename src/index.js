const { google } = require('googleapis');
const youtube = google.youtube('v3');

async function recursiveFetcher(playlistId, pageToken, customResults) {
    const playlistItems = [];

    await youtube.playlistItems.list({
        part: 'snippet',
        pageToken: pageToken,
        maxResults: !customResults || customResults > 50 ? 50 : customResults,
        playlistId: playlistId
    }).then(async (results) => {
        results.data.items.forEach((item) => {
            playlistItems.push(item.snippet);
        });

        if (results.data.nextPageToken) {
            const recurse = await recursiveFetcher(playlistId, results.data.nextPageToken, customResults);
            recurse.forEach((item) => {
                playlistItems.push(item);
            },
            (error) => {
              throw error;
            });    
        }

    });

    return playlistItems;
}

module.exports = function playlistFetch(apiKey, playlistId, options) {
    if (!apiKey){
        return new Error('No API Key Provided');
    } 
    if (!playlistId) {
        return new Error('No Playlist ID Provided');
    }
    if (!options) {
        options = {};
    }
    google.options({ auth: apiKey });
    return recursiveFetcher(playlistId, null, options.maxResults)
}