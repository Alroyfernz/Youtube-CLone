import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/actions/videos.action";
import Comments from "../comments/Comments";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import VideoHorizontal from "../videoHorizontal/VideoHorizontal";
import VideoMetaData from "../videoMetaData/VideoMetaData";
import "./_watchScreen.scss";
const WatchScreen = () => {
  const { id } = useParams();
  const { video, loading: relatedVideosLoading } = useSelector(
    (state) => state.selectedVideo
  );
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.relatedVideo);

  useEffect(() => {
    dispatch(getVideoById(id));

    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const [sidebar, toggleSide] = useState(false);

  const handleClick = () => toggleSide(!sidebar);
  return (
    <>
      <Header handleClick={handleClick} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app_main ">
          <Row>
            <Col lg={8}>
              <div className="watchScreen_player">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  frameBorder="0"
                  title={video?.snippet?.title}
                  allowFullScreen
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              {!loading ? (
                <VideoMetaData video={video} videoId={id} />
              ) : (
                <h6>Loading..</h6>
              )}

              <Comments
                totalComments={video?.statistics?.commentCount}
                videoId={id}
              />
            </Col>

            <Col lg={4}>
              {!loading ? (
                videos
                  ?.filter((video) => video.snippet)
                  .map((video) => {
                    return (
                      <VideoHorizontal video={video} key={video.id.videoId} />
                    );
                  })
              ) : (
                <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                  <Skeleton width="100%" height="130px" count={15} />
                </SkeletonTheme>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WatchScreen;
