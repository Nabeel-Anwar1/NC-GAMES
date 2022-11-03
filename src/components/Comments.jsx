import { useEffect, useState } from "react"
import { fetchComments } from "../api"

const Comments = ({review_id}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments(review_id).then((data)=>{
           setComments(data)
        })
    },[review_id])

return <section className="commentsContainer">
    <ul className="commentsList">
    {comments.length === 0 ? <h3>No comments!</h3> : comments.map((comment)=>{
            return <li className="singleComment" key={`${comment.comment_id}`}>
                {comment.body}
                <p className="commentText">
                    User: {comment.author} <br /> <br />
                    Posted: {new Date(comment.created_at).toLocaleDateString('en-gb',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )}
                </p>
            </li>
        })}
    </ul>
     </section>
}



export default Comments 