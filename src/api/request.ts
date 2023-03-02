import { BannerListItem, RecommendListItem } from "@/pages/recommend/interface";
import { SingerListParams } from "@/pages/singers/interface";
import { categoryMap } from "./mock";
import { axiosInstance } from "./config";

// **--推荐页--**
// banner
export const requestBanner = () => {
  return axiosInstance.get<any, { banners: BannerListItem[] }>("/banner");
};
// 推荐歌单列表
export const requestRecommendList = () => {
  return axiosInstance.get<any, { result: RecommendListItem[] }>("/personalized");
};

// **--歌手--**
// 热门歌手列表
export const requestHotSingersList = (count: number) => {
  return axiosInstance.get<any, any>(`/top/artists?offset=${count}`);
};

// 歌手列表
export const requestSingersList = (singerListParams?: SingerListParams) => {
  const { category = "", count = 0, alpha = "" } = singerListParams || {};
  const { type = "", area = "" } = categoryMap.get(category) || {};
  return axiosInstance.get<any, any>(
    `/artist/list?type=${type}&area=${area}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

// **--排行榜--**
// 排行榜列表
export const requestRankList = ()=>{
  return axiosInstance.get('toplist/detail')
}

