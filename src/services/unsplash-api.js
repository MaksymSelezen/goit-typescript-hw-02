import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "iAYv4zrW3aVEFgWrFEGsLZ5wPOO39u3zcFVCK4guuUM";

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 9,
      orientation: "landscape",
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
