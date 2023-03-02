import Loading from "@/components/loading";
import Scroll from "@/components/scroll";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RankList from "./rank-list";
import { getRankList } from "./store/action";
import { EnterLoading, RankStyle } from "./style";

const Rank = () => {
  // action
  const dispatch = useDispatch();
  // store 数据源
  const { rankList, loading } = useSelector((state: any) => ({
    rankList: state.getIn(["rank", "rankList"]),
    loading: state.getIn(["rank", "rankLoading"]),
  }));
  const rankListJS = rankList ? rankList.toJS() : [];

  // 排行榜接口请求
  useEffect(() => {
    if (!rankList.size) {
      dispatch(getRankList());
    }
  }, []);

  // 区分全球榜和官方榜单
  const filterFirstGlobalIndex = (rankList: any[] = []) => {
    for (let i = 0; i < rankList.length - 1; i++) {
      if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
        return i + 1;
      }
    }
  };
  // 第一个全球榜单下标
  const firstGlobalIndex = filterFirstGlobalIndex(rankListJS);
  // 官方榜list
  const officialList = rankListJS.slice(0, firstGlobalIndex);
  // 全球榜list
  const globalList = rankListJS.slice(firstGlobalIndex);
  // 榜单数据未加载出来之前都给隐藏
  let displayStyle = loading ? { display: "none" } : { display: "" };
  return (
    <RankStyle>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>
            官方榜
          </h1>
          <RankList dataSource={officialList} />
          <h1 className="global" style={displayStyle}>
            全球榜
          </h1>
          <RankList dataSource={globalList} line />
        </div>
      </Scroll>
      {loading ? (
        <EnterLoading>
          <Loading show={loading} />
        </EnterLoading>
      ) : null}
    </RankStyle>
  );
};

export default Rank;
