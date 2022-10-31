import { useEffect, useState } from "react"
import { fetchReviews } from "./api"

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        setIsLoading(true)
        fetchReviews().then((review) => {
            setReviews(review)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <h3>Loading...</h3>
    return <div className="reviewContent">
        <ul className="reviewsList">
            {reviews.map((review) => {
                return <div key={review.review_id} className="individualReview">
                    {<li >
                    Review By: {review.owner} <br />
                    Title: {review.title}    <br />
                    Review: {review.review_body} <br />
                    Votes: {review.votes} <br />
                    {new Date(review.created_at).toLocaleDateString(
  'en-gb',
  {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
)}
                    </li>}
                </div>
            })}
        </ul>
    </div>
}

export default Reviews