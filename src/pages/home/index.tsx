import { Outlet } from 'react-router-dom'
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
