import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchSingleReview } from "../api"
import Votes from "./Votes"

const ReviewPage = () => {
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {review_id} = useParams()

    useState(() => {
        setIsLoading(true)
        fetchSingleReview(review_id).then((data)=>{
            setReview(data)
            setIsLoading(false)
        })
    }, [review_id])

    return isLoading ?  <h3>Loading...</h3> :
    <section className="singleReviewPage">
        <h2>Review for: {review.title}</h2>
        <img src={`${review.review_img_url}`} alt={`${review.title}`} className="reviewImg"></img>
        <p>{review.review_body}</p>
        <p>Written By: {review.owner}</p>
        <p>Created: {new Date(review.created_at).toLocaleDateString('en-gb',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )} </p>
        <p>Votes: <Votes review_id={review.review_id} votes={review.votes} /></p>
        <p>Comments: {review.comment_count} </p>
    </section>
}

export default ReviewPage