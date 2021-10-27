import { Avatar } from "@material-ui/core";
import {
  Apps,
  Menu,
  Mic,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fatchingVideosByCatagory } from "../features/asyncAction";
import logo from "../img/youtube.png";
import { Container } from "../styled/container.styles";

function Navbar() {
  const history = useHistory();
  const {
    user: { photo },
  } = useSelector((state) => state.auth);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fatchingVideosByCatagory(input));
    history.push("/searchpage");
    setInput("");
  };

  return (
    <nav className="nav">
      <Container>
        <div className="nav__navbar">
          {/* navbar logo start */}
          <div className="nav__logo">
            <Menu className="nav__menu" />
            <Link to="/">
              <img src={logo} alt="logo" />
              <span>BD</span>
            </Link>
          </div>
          {/* navbar logo end */}

          {/* navbar search start */}
          <form className="nav__search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={handleChange}
            />
            <button type="submit" className="nav__searchIcon">
              <Search />
            </button>
            <button type="submit" className="nav__mic">
              <Mic />
            </button>
          </form>
          {/* navbar search end */}
          {/* navbar notification area start */}

          <div className="nav__notification">
            <VideoCall />
            <Apps />
            <Notifications />
            <Avatar className="nav__avatar" src={photo} />
          </div>
          {/* navbar notification area start */}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
