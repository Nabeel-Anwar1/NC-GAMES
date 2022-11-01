import { useEffect, useState } from "react"
import { fetchReviews } from "./api"
import { Link, useParams } from "react-router-dom";

const Reviews = () => {
    const start = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    const [category, setCategory] = useState("")

    useEffect(()=>{
        if (typeof start.category === "string" && start.category !=="all"){
        setCategory(start.category)
        }
        setIsLoading(true)
        fetchReviews(category).then((review) => {
            setReviews(review)
            setIsLoading(false)
        })
    }, [category])

    const handleClick = (cat) => {
        setCategory(cat)
    }

    if (isLoading) return <h3>Loading...</h3>
    return <div className="reviewContent">
        <div className="categoryNav">
            <ul className="categoryList">
            Choose A Category: <br />
                <Link to="/reviews/all"><li><button value="" onClick={(event) => {handleClick(event.target.value)}}>All</button></li></Link>
                <Link to="/reviews/hidden-roles"><li><button value="hidden-roles" onClick={(event) => {handleClick(event.target.value)}}>Hidden Roles</button></li></Link>
                <Link to="/reviews/dexterity"><li><button value="dexterity" onClick={(event) => {handleClick(event.target.value)}}>Dexterity</button></li></Link>
                <Link to="/reviews/push-your-luck"><li><button value="push-your-luck" onClick={(event) => {handleClick(event.target.value)}}>Push Your Luck</button></li></Link>
                <Link to="/reviews/roll-and-write"><li><button value="roll-and-write" onClick={(event) => {handleClick(event.target.value)}}>Roll and Write</button></li></Link>
                <Link to="/reviews/deck-building"><li><button value="deck-building" onClick={(event) => {handleClick(event.target.value)}}>Deck Building</button></li></Link>
                <Link to="/reviews/engine-building"><li><button value="engine-building" onClick={(event) => {handleClick(event.target.value)}}>Engine Building</button></li></Link>
            </ul>
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