import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nabeelgameproject.herokuapp.com/api",
});

export const fetchReviews = () => {
  return gamesApi.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};
