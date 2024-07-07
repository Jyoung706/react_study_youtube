import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    const { data } = await axios.get(`/videos/search.json`);
    const formattedData = data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return formattedData;
  }

  async #mostPopular() {
    const { data } = await axios.get(`/videos/popular.json`);
    return data.items;
  }
}
