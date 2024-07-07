export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    const params = {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: keyword,
      },
    };
    const { data } = await this.apiClient.search(params);
    const formattedData = data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return formattedData;
  }

  async #mostPopular() {
    const params = {
      params: {
        part: "snippet",
        maxResults: 25,
        chart: "mostPopular",
      },
    };

    const { data } = await this.apiClient.videos(params);
    return data.items;
  }
}
