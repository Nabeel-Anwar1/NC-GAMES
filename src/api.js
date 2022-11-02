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

export const fetchSingleReview = (id) => {
  return gamesApi.get(`/reviews/${id}`).then((response) => {
    return response.data.review;
  });
};

export const patchVotes = (id, votes) => {
  return gamesApi.patch(`/reviews/${id}`, votes).then((response) => {
    return response.data.reviews;
  });
};
