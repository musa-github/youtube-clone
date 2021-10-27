import {
  Explore,
  History,
  Home,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Subscriptions,
  ThumbUp,
  VideoLibrary,
  WatchLater,
} from "@material-ui/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import demoProfile from "../img/demo-profile.png";
import yourVideo from "../img/your_videos.svg";
import Login from "./Login";

function Aside() {
  const [like, setLike] = useState(false);
  const [subscription, setSubscription] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };
  const handleSubcription = () => {
    setSubscription(!subscription);
  };
  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__home">
          <NavLink to="/">
            <Home className="icon" />
            <span>Home</span>
          </NavLink>
        </div>
        <div className="aside__Explore">
          <NavLink to="/">
            <Explore className="icon" />
            <span>Explore</span>
          </NavLink>
        </div>
        <div className="aside__Subscriptions">
          <NavLink to="/">
            <Subscriptions className="icon" />
            <span>Subscriptions</span>
          </NavLink>
          <hr />
        </div>

        {/* library  */}
        <div className="aside__VideoLibrary">
          <NavLink to="/">
            <VideoLibrary className="icon" />
            <span>Library</span>
          </NavLink>
          <div className="aside__aditionalLibrary">
            <NavLink to="/">
              <History className="icon" />
              <span> History</span>
            </NavLink>
            <NavLink to="/">
              <img
                src={yourVideo}
                alt="your video"
                className="icon your_video"
              />

              <span> Your videos</span>
            </NavLink>
            <NavLink to="/">
              <WatchLater className="icon" />
              <span> Watch later</span>
            </NavLink>
            <NavLink to="/">
              <ThumbUp className="icon" />
              <span> Liked videos</span>
            </NavLink>
            {/* show more or less */}
            {like ? (
              <NavLink to="#" onClick={handleClick}>
                <KeyboardArrowDown className="icon" />
                <span> Show more</span>
              </NavLink>
            ) : (
              <NavLink to="#" onClick={handleClick}>
                <KeyboardArrowUp className="icon" />
                <span> Show less</span>
              </NavLink>
            )}
          </div>
          <hr />
        </div>

        {/* subscription channals */}
        <div className="aside__subscriptionChannal">
          <h2>subscriptions</h2>
          <NavLink to="#">
            <img src={demoProfile} alt="channel name" />
            <span>channal name</span>
          </NavLink>

          {/* show more or less */}

          {subscription ? (
            <NavLink to="#" onClick={handleSubcription}>
              <KeyboardArrowDown className="sub_icon" />
              <span> Show more</span>
            </NavLink>
          ) : (
            <NavLink to="#" onClick={handleSubcription}>
              <KeyboardArrowUp className="sub_icon" />
              <span> Show less</span>
            </NavLink>
          )}

          <hr />
        </div>

        {/* Copy Right  */}
        <div className="aside__copyright">
          <p>
            About Press Copyright Contact us Creators Advertise Developers
            <br />
            <br />
            Terms Privacy Policy <br /> & SafetyHow YouTube worksTest new
            features
          </p>
          <span> &copy; 2021 Google LLC</span>
        </div>
        <Login />
      </div>
    </aside>
  );
}

export default Aside;
