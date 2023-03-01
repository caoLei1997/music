import { ListItemStyle, ListStyle } from "./style";
import LazyLoad from "react-lazyload";
import defaultImg from "@/assets/image/music.png";
interface SingersListProps {
  dataSource: any[];
}
const SingersList = (props: SingersListProps) => {
  const { dataSource } = props;
  return (
    <ListStyle>
      {dataSource.map((item, index) => {
        return (
          <ListItemStyle key={index}>
            <div className="img-wrapper">
              <LazyLoad
                placeholder={
                  <img
                    width="100%"
                    height="100%"
                    alt="music"
                    src={defaultImg}
                  />
                }
              >
                <img
                  src={`${item.picUrl}?param=300x300`}
                  width="100%"
                  height="100%"
                  alt="singers"
                />
              </LazyLoad>
            </div>
            <span className="name">{item.name}</span>
          </ListItemStyle>
        );
      })}
    </ListStyle>
  );
};

export default SingersList;
