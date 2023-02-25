/*
 * @Author: caolei
 * @Date: 2023-02-23 14:00:29
 * @LastEditTime: 2023-02-24 14:12:34
 */
// import Slider from '@/components/slider'
import Slider from "@/components/slider-9x";
import Scroll from "@/components/scroll";
import RecommendList from "./recommend-list";
import { RecommendStyle } from "./style";
import { forceCheck } from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBanner, getRecommendList } from "./store/action";

const Recommend = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBanner());
    dispatch(getRecommendList());
  }, []);

  const {bannerList,recommendList} = useSelector((state:any) => ({
    bannerList: state.getIn(["recommend", "bannerList"]),
    recommendList: state.getIn(["recommend", "recommendList"]),
  }));
  //banner data 
  const bannerListJS = bannerList ? bannerList.toJS():[]
  //recommend data 
  const recommendListJS = recommendList ? recommendList.toJS():[]

  return (
    <RecommendStyle>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider dataSource={bannerListJS} />
          <RecommendList dataSource={recommendListJS} />
        </div>
      </Scroll>
    </RecommendStyle>
  );
};

export default Recommend;
