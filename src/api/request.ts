import { BannerListItem, RecommendListItem } from "@/pages/recommend/interface";
import { axiosInstance } from "./config";

// banner
export const requestBanner = ()=>{
  return axiosInstance.get<any,{banners:BannerListItem[]}>('/banner')
}
// 推荐歌单列表
export const requestRecommendList = ()=>{
  return axiosInstance.get<any,{result:RecommendListItem[]}>('/personalized')
}