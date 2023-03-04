import { NavLink } from 'react-router-dom'
import { TabStyle } from '../style'

const TabBar = () => {
  const activeClassName = 'selected'

  const linkClass = ({ isActive }: any) => isActive ? activeClassName : undefined

  return (
    <TabStyle>
      <NavLink to='/recommend' className={linkClass} end><span>推荐</span></NavLink>
      <NavLink to='/singers' className={linkClass} ><span>歌手</span></NavLink>
      <NavLink to='/rank' className={linkClass} ><span>排行榜</span></NavLink>
    </TabStyle>
  )
}

export default TabBar
