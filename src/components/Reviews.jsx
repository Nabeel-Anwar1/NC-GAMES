import { useEffect, useState } from "react"
import { fetchReviews } from "./api"
import { Link, useParams } from "react-router-dom";

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    const [category, setCategory] = useState("")

    useEffect(()=>{
        setIsLoading(true)
        fetchReviews(category).then((review) => {
            setReviews(review)
            setIsLoading(false)
        })
    }, [category])

    if (isLoading) return <h3>Loading...</h3>
    return <div className="reviewContent">
        <div className="dropdown">
        <label htmlFor="category">View Category:</label>
            <select onChange={(event) => {setCategory(event.target.value)}} name="category" id="category">
                <option value="">Select a category:</option>
                <option value="">All</option>
                <option value="hidden-roles">Hidden Roles</option>
                <option value="dexterity">Dexterity</option>
                <option value="push-your-luck">Push Your Luck</option>
                <option value="roll-and-write">Roll and Write</option>
                <option value="deck-building">Deck Building</option>
                <option value="engine-building">Engine Building</option>
            </select>
        </div>

        <ul className="reviewsList">
            {reviews.map((review) => {
            return <div key={review.review_id} className="individualReview">
                {<li >
                    <b><u>Review By: {review.owner} </u></b> <br />
                    <b><u>Title:</u></b> {review.title}    <br />
                    <b><u>Category:</u></b> {review.category} <br />
                    <b><u>Comments:</u></b> {review.comment_count}  <br />
                    <b><u>Votes:</u></b> {review.votes} <br />
                    {new Date(review.created_at).toLocaleDateString('en-gb',
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