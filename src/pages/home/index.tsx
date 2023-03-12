import { Outlet } from "react-router-dom";
import Player from "../player";
import Header from "./header";
import TabBar from "./tab-bar";
const Home = () => {
  return (
    <>
      <Header />
      <TabBar />
      <Outlet />
      <Player />
    </>
  );
};

export default Home;
