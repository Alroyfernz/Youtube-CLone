import React, { useEffect, useState } from "react";
import moment from "moment";
import request from "../../api";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import numeral from "numeral";
import { useHistory } from "react-router-dom";
import "./_videoHorizontal.scss";
import { Col, Row } from "react-bootstrap";
const VideoHorizontal = ({ video }) => {
  const history = useHistory();

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelI, setCI] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const durations = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const getVD = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });

      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    getVD();
  }, [id]);

  const handleClick = () => {
    history.push(`/watch/${id.videoId}`);
  };

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={6} className="videoHorizontal_left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="videoHorizontal_thumbnail-channel"
          wrapperClassName="videoHorizontal_thumbnail-wrapper"
        />
        <span className="videoHorizontal_duration">{durations}</span>
      </Col>
      <Col xs={6} md={6} className="videoHorizontal_right p-0">
        <p className="videoHorizontal_title mb-1">{title}</p>
        <div className="videoHorizontal_details">
          <AiFillEye />
          {numeral({ views }).format("0.a")} Views •
          {moment({ publishedAt }).fromNow()}
        </div>

        <div className="videoHorizontal_channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
          src="https://c4.wallpaperflare.com/wallpaper/102/204/987/black-panther-black-background-minimalism-marvel-comics-wallpaper-preview.jpg"
          effect="blur"
          
        /> */}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
