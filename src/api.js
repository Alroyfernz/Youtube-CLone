import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBMO21mEpmUP6nQbLFeQp7JRVFPQAUUDio",
  },
});
export default request;
