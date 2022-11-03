import { useEffect, useState } from "react"
import { fetchComments } from "../api"

const Comments = ({review_id}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        console.log("He")
        fetchComments(review_id).then((data)=>{
            console.log(data)
           setComments(data)
        })
    },[review_id])

return <section className="comments">
    <ul className="commentsList">
    {comments.map((comment)=>{
            return <li className="singleComment" key={`${comment.comment_id}`}>
                {comment.body}
                <p className="commentText">
                    {comment.author}
                    {comment.created_at}
                </p>
            </li>
        })}
    </ul>
     </section>
}



export default Comments 