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
import Loading from "@/components/loading";
import { Outlet } from "react-router-dom";

const Recommend = () => {
  const dispatch = useDispatch();
  // store 数据源
  const { bannerList, recommendList, loading } = useSelector((state: any) => ({
    bannerList: state.getIn(["recommend", "bannerList"]),
    recommendList: state.getIn(["recommend", "recommendList"]),
    loading: state.getIn(["recommend", "loading"]),
  }));

  useEffect(() => {
    if (!bannerList.size) {
      dispatch(getBanner());
    }
    if (!recommendList.size) {
      dispatch(getRecommendList());
    }
  }, []);

  //banner data
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  //recommend data
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  return (
    <RecommendStyle>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider dataSource={bannerListJS} />
          <RecommendList dataSource={recommendListJS} />
        </div>
      </Scroll>
      <Loading show={loading} />
      <Outlet />
    </RecommendStyle>
  );
};

export default Recommend;
