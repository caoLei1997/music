import { Outlet } from 'react-router'
import Header from './header'
import TabBar from './tab-bar'
const Home = () => {
  return (
    <>
      <Header />
      <TabBar />
      <Outlet />
    </>
  )
}

export default Home
