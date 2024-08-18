import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Azz9dLnNAubqHSmBwmGYTZQnke7QG-WW90bmBomjx50",
  },
});

async function getImages(query, page) {
  const params = {
    query,
    page,
    per_page: 12,
  };

  const response = await fetchData.get("search/photos", { params });
  return response.data;
}

export default getImages;
