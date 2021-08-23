import moment from "moment";
import numeral from "numeral";
import React from "react";
import { useEffect } from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ShowMoreText from "react-show-more-text";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel.action";
import "./_videoMetaData.scss";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const dispatch = useDispatch();

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.checkSubscriptionStatus
  );

  const vallue = useSelector((state) => state.channelDetails.channel);

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h5>{title}</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3 my-2 videoMetaData_channel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src={vallue?.snippet?.thumbnails?.default?.url}
            alt="ff"
            className="mr-3 rounded-circle"
          />

          <div className="d-flex flex-column">
            <span>{channelTitle} </span>
            <span>
              {numeral(vallue.statistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>

        <button
          className={`btn border-0 p-2 m-2  ${
            subscriptionStatus && "btn-gray"
          }`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <div className="videoMetaData_description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
