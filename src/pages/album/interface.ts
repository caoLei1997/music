export interface TrackCommon {
  name: string;
}

export interface Tracks {
  name: string;
  ar: TrackCommon[];
  al: TrackCommon;
}

export interface AlbumData {
  creator: {
    avatarUrl: string;
    nickname: string;
  };
  coverImgUrl: string;
  subscribedCount: number;
  name: string;
  tracks: Tracks[];
  [key: string]: any;
}
