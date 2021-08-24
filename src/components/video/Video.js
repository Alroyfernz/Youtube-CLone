import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./_video.scss";
import moment from "moment";
import numeral from "numeral";
import { useHistory } from "react-router-dom";
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,

      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelI, setCI] = useState(null);
  const [channelT, setCT] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const durations = moment.utc(seconds * 1000).format("mm:ss");
  const history = useHistory();
  const _videoID = id?.videoId || id;

  useEffect(() => {
    const getVD = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoID,
        },
      });

      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    getVD();
  }, [_videoID]);
  useEffect(() => {
    const getCI = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });

      console.log(items);
      setCI(items[0].snippet.thumbnails.default);
      setCT(items[0].snippet.title);
    };

    getCI();
  }, [channelId]);

  const handleVideoClick = () => {
    history.push(`/watch/${_videoID}`);
  };

  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video_top">
        {/* <img src={medium.url} alt="" /> */}
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video_top_duration">{durations}</span>
      </div>
      <div className="video_title">{title}</div>
      <div className="video_channel">
        <span>
          <AiFillEye />
          {numeral(views).format("0.a")} Views •
        </span>
        <span> {moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video_channel">
        {/* <img src={channelI?.url} alt="" /> */}
        <LazyLoadImage src={channelI?.url} effect="blur" />
        <p>{channelT}</p>
      </div>
    </div>
  );
};

export default Video;
