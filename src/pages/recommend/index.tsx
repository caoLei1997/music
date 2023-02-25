/*
 * @Author: caolei
 * @Date: 2023-02-23 14:00:29
 * @LastEditTime: 2023-02-24 14:12:34
 */
// import Slider from '@/components/slider'
import Slider from '@/components/slider-9x';
import Scroll from '@/components/scroll';
import RecommendList from './recommend-list';
import { RecommendStyle } from './style';
import { forceCheck } from 'react-lazyload';

export interface RecommendListItem {
  id: number,
  picUrl: string;
  playCount: number;
  name: string
}

const Recommend = () => {
  // banner data
  const bannerList = [1, 2, 3, 4].map(item => {
    return {
      imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
    }
  });
  // list data
  const recommendList: RecommendListItem[] = new Array(10)
    .fill(1)
    .map(item => {
      return {
        id: 1,
        picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
        playCount: 17171122,
        name: "朴树、许巍、李健、郑钧、老狼、赵雷"
      }
    })

  return (
    <RecommendStyle>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider dataSource={bannerList} />
          <RecommendList dataSource={recommendList} />
        </div>
      </Scroll>

    </RecommendStyle>
  )
}

export default Recommend
