import { getCount } from "@/utils";
import LazyLoad from "react-lazyload";
import { RecommendListItem } from "../interface";
import { ListItemStyled, ListStyled, ListWrapperStyled } from "./styled";
import defaultImg from "@/assets/image/music.png";
import { useNavigate } from "react-router";

interface RecommendListProps {
  dataSource: RecommendListItem[];
}

const RecommendList = (props: RecommendListProps) => {
  // router api
  const navigate = useNavigate();
  const { dataSource } = props;
  const enterAlbum = (id: number) => {
    navigate(`/recommend/${id}`);
  };
  return (
    <ListWrapperStyled>
      <h1 className="title">推荐歌单</h1>
      <ListStyled>
        {dataSource.map((item, index) => {
          return (
            <ListItemStyled
              key={item.id + index}
              onClick={() => enterAlbum(item.id)}
            >
              <div className="img-wrapper">
                <div className="decorate"></div>
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={defaultImg}
                      alt="music"
                    />
                  }
                >
                  <img src={item.picUrl + "?param=300x300"} alt="music" />
                </LazyLoad>
                <div className="play-count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItemStyled>
          );
        })}
      </ListStyled>
    </ListWrapperStyled>
  );
};

export default RecommendList;
