# YouTube Playlist Fetcher

YouTube Playlist Fetcher is yet again another library that fetched a playlist and returns a big array containing its details

# Usage
```js
const yfetcher = require('@mahomuri/yt-playlist-fetcher');

ytfetcher('YouTube API Key, 'Playlist ID')
.then(playlistItems => {
    console.log(playlistItems.length);
    console.log(playlistItems);
});
```

# Options

- `maxResults` - The maxmimum amount of results to return from the playlist, starting from 0.

# Installation
```sh
npm install @mahomuri/yt-playlist-fetcher
```

# Testing 

To test it, make sure to change the `process.env.API_KEY` to you own API Key then type:
```sh
npm test
```
