import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nabeelgameproject.herokuapp.com/api",
});

export const fetchReviews = (query) => {
  if (query === "all") {
    return gamesApi.get(`/reviews`).then((response) => {
      return response.data.reviews;
    });
  } else {
    return gamesApi.get(`/reviews?category=${query}`).then((response) => {
      return response.data.reviews;
    });
  }
};
