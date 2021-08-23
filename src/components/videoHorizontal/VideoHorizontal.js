import React from "react";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import numeral from "numeral";
import "./_videoHorizontal.scss";
import { Col, Row } from "react-bootstrap";
const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const durations = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal_left">
        <LazyLoadImage
          src="https://c4.wallpaperflare.com/wallpaper/102/204/987/black-panther-black-background-minimalism-marvel-comics-wallpaper-preview.jpg"
          effect="blur"
          className="videoHorizontal_thumbnail-channel"
          wrapperClassName="videoHorizontal_thumbnail-wrapper"
        />
        <span className="videoHorizontal_duration">{durations}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal_right p-0">
        <p className="videoHorizontal_title mb-1">
          Be a full stack developer in 3 months
        </p>
        <div className="videoHorizontal_details">
          <AiFillEye />
          {numeral(10000).format("0.a")} Views •{moment("2020-06-09").fromNow()}
        </div>

        <div className="videoHorizontal_channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
          src="https://c4.wallpaperflare.com/wallpaper/102/204/987/black-panther-black-background-minimalism-marvel-comics-wallpaper-preview.jpg"
          effect="blur"
          
        /> */}
          <p>Chris Bumstead</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
