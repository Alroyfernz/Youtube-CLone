import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../../redux/actions/videos.action";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import VideoHorizontal from "../videoHorizontal/VideoHorizontal";

const SearchScreen = () => {
  const { videos, loading } = useSelector((state) => state.searchedVideo);
  const { query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const [sidebar, toggleSide] = useState(false);

  const handleClick = () => toggleSide(!sidebar);
  return (
    <>
      <Header handleClick={handleClick} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app_main ">
          <Row>
            <Container>
              {!loading ? (
                videos?.map((video) => (
                  <VideoHorizontal
                    video={video}
                    key={video.id.videoId}
                    searchScreen
                  />
                ))
              ) : (
                <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                  <Skeleton width="100%" height="160px" count={15} />
                </SkeletonTheme>
              )}
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchScreen;
