type Thumbnail = {
    url: string;
    width: number;
    height: number;
};

type PlaylistItems = {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails?: {
      default?: Thumbnail, 
      medium?: Thumbnail, 
      high?: Thumbnail, 
      standard?: Thumbnail, 
      maxres?: Thumbnail
    };
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };

declare function ytPlaylistFetcher(key: string, playlistId: string, options?: {
  maxResults?: number;
}): Promise<PlaylistItems[]>;

export = ytPlaylistFetcher
