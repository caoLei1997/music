import { categoryTypes, alphaTypes } from "@/api/mock";
import Scroll from "@/components/scroll";
import Horizontal from "@/components/scroll-horizontal";
import { useEffect, useMemo, useState } from "react";
import SingersList from "./singers-list";
import { ListContainer, SingersStyle } from "./style";
import {
  changeCount,
  changeLoading,
  changePullDownLoading,
  getHotSingerList,
  getMoreHotSingerList,
  getMoreSingerList,
  getSingerList,
} from "./store/action";
import { useDispatch, useSelector } from "react-redux";

const Singers = () => {
  const dispatch = useDispatch();

  // 获取热门歌手
  useEffect(() => {
    if (!singerList.size) {
      dispatch(getHotSingerList());
    }
  }, []);

  // 分类 current
  const [categoryValue, setCategoryValue] = useState<string>("");
  // 首字母 current
  const [alphaValue, setAlphaValue] = useState<string>("");

  // 改变分类 请求分类歌手
  const updateSingerList = (category: string, alpha: string) => {
    dispatch(changeCount(0));
    dispatch(changeLoading(true));
    dispatch(getSingerList(category,alpha));
  };

  // 歌手分类
  const updateCategory = (category: string) => {
    setCategoryValue(category);
    updateSingerList(category, alphaValue);
  };
  // 歌手首字母
  const updateAlpha = (alpha: string) => {
    setAlphaValue(alpha);
    updateSingerList(categoryValue, alpha);
  };

  // store 数据源
  const { singerList, count } = useSelector((state: any) => ({
    singerList: state.getIn(["singers", "singerList"]).toJS() || [],
    count: state.getIn(["singers", "count"]),
  }));

  // 分类首字母都没有选择 默认热门
  const { hot } = useMemo(
    () => ({
      hot: categoryValue === "" && alphaValue === "",
    }),
    [categoryValue, alphaValue]
  );

  // 下拉刷新
  const handlePullDown = () => {
    console.log("下拉刷新");
    // 下拉刷新loading
    dispatch(changePullDownLoading(true));
    // 分页归 0
    dispatch(changeCount(0));
    // 加载更多, 热门歌手 或  类型歌手
    if (hot) dispatch(getMoreHotSingerList());
    else dispatch(getMoreSingerList(categoryValue, alphaValue));
  };

  // 上拉加载
  const handlePullUp = () => {
    console.log("上拉加载");
    console.log("categoryValue: ", categoryValue);
    // 上拉加载loading
    dispatch(changeLoading(true));
    // 页数增加
    dispatch(changeCount(count + 1));
    // 加载更多, 热门歌手 或  类型歌手
    if (hot) dispatch(getMoreHotSingerList());
    else dispatch(getMoreSingerList(categoryValue, alphaValue));
  };
  return (
    <SingersStyle>
      <Horizontal
        title="分类 (默认热门)"
        dataSource={categoryTypes}
        currentValue={categoryValue}
        onClick={updateCategory}
      />
      <Horizontal
        title="首字母"
        dataSource={alphaTypes}
        currentValue={alphaValue}
        onClick={updateAlpha}
      />
      <ListContainer>
        <Scroll onPullDown={handlePullDown} onPullUp={handlePullUp}>
          <SingersList dataSource={singerList} />
        </Scroll>
      </ListContainer>
    </SingersStyle>
  );
};

export default Singers;
