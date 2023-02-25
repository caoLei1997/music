import { emptyFunc } from "@/utils";
import React, { useEffect, useMemo, useRef } from "react"
import Scroll from "../scroll";
import { HorizentalStyle, ListItemStyle, ListStyle } from "./style";

interface HorizentalProps<DataType> {
  title?: string | React.ReactElement;
  dataSource: DataType[] | any[];
  currentValue?: string;
  onClick?: (key: string) => void;
}

function Horizental<DataType>(props: HorizentalProps<DataType>) {
  const { title, dataSource, currentValue, } = props;
  const { onClick = emptyFunc } = props;
  const horizentalDom = useRef<any>()

  const defaultValue = useMemo(() => currentValue || dataSource[0].key, [currentValue, dataSource])

  // 内部dom按照生成list计算
  useEffect(() => {
    let dom = horizentalDom.current;
    let tagElements = dom.querySelectorAll('span');
    let totalWidth = 0;
    Array.from(tagElements).forEach((ele: any) => {
      totalWidth += ele.offsetWidth;
    });
    dom.style.width = `${totalWidth}px`;
  })
  return (
    <Scroll direction="horizontal">
      <HorizentalStyle ref={horizentalDom}>
        <h1 className="title">{title}</h1>
        <ListStyle>
          {
            dataSource.map((item) => {
              return (
                <ListItemStyle
                  key={item.key}
                  className={`${defaultValue === item.key ? 'selected' : ''}`}
                  onClick={() => onClick(item.key)}
                >
                  {item.name}
                </ListItemStyle>
              )
            })
          }
        </ListStyle>
      </HorizentalStyle>
    </Scroll>
  )
}

export default Horizental
