// import { Avatar } from "@material-ui/core";
// import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import SearchVideo from "../components/SearchVideo";
import { Container } from "../styled/container.styles";

function SearchPage() {
  const { items } = useSelector((state) => state.videos.searchVideos);

  return (
    <Container>
      {items &&
        items.map(({ snippet }) => {
          return <SearchVideo snippet={snippet} />;
        })}
    </Container>
  );
}

export default SearchPage;
