import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search({ params }) {
    return axios.get(`/videos/${params.channelId ? "related" : "search"}.json`);
  }

  async videos() {
    return axios.get("/videos/popular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}
