import { ListItemStyle, ListStyle } from "./style";

interface SingersListProps {
  dataSource: any[];
}
const SingersList = (props: SingersListProps) => {
  const { dataSource } = props;
  return (
    <ListStyle>
      {dataSource.map((item,index) => {
        return (
          <ListItemStyle key={index}>
            <div className="img-wrapper" >
              <img
                src={`${item.picUrl}?param=300x300`}
                width="100%"
                height="100%"
                alt="singers"
              />
            </div>
            <span className="name">{item.name}</span>
          </ListItemStyle>
        );
      })}
    </ListStyle>
  );
};

export default SingersList;
