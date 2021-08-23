import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoById } from "../../redux/actions/videos.action";
import Comments from "../comments/Comments";
import Header from "../header/Header";
import HomeScreen from "../homescreen/HomeScreen";
import Sidebar from "../sidebar/Sidebar";
import VideoHorizontal from "../videoHorizontal/VideoHorizontal";
import VideoMetaData from "../videoMetaData/VideoMetaData";
import "./_watchScreen.scss";
const WatchScreen = () => {
  const { id } = useParams();
  const { video, loading } = useSelector((state) => state.selectedVideo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
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

              <Comments />
            </Col>

            <Col lg={4}>
              {[...Array(10)].map(() => {
                return <VideoHorizontal />;
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WatchScreen;
