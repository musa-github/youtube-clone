import { Route, Switch } from "react-router";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.css";
import Aside from "./components/Aside";
import Catagory from "./components/Catagory";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import History from "./pages/History";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import VideoPlayer from "./pages/VideoPlayer";
function App() {
  return (
   <Layout>
      <Navbar />
      <Aside />
      <Main>
        <Catagory/>
        <Switch>
          <Route path = "/history" exact component={History}/>
         <Route path = "/" exact component={Home}/>
         <Route path ="/searchpage" exact component={SearchPage}/>
        <Route path="/videoplayer/:id" exact component={VideoPlayer}/>
        <Route path="/players" exact component={Players}/>
               </Switch>
      </Main>

   </Layout>
  );
}

export default App;
