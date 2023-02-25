export interface BannerListItem {
  imageUrl?:string;
  targetId?:number;
  titleColor?:string;
  typeTitle?:string;
  bannerBizType?:string;
  [key:string]:any
}

export interface RecommendListItem {
  id?: number,
  picUrl?: string;
  name?: string
  playCount?: number;
  type?:number;
  [key:string]:any
}
