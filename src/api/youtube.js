import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    const { data } = await this.httpClient.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: keyword,
      },
    });
    const formattedData = data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return formattedData;
  }

  async #mostPopular() {
    const { data } = await this.httpClient.get("videos", {
      params: {
        part: "snippet",
        maxResults: 25,
        chart: "mostPopular",
      },
    });
    return data.items;
  }
}
