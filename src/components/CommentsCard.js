import CommentCard from "./CommentCard"

function CommenetsCard({comments}){
    // console.log(comments)
    return(
        <div>
            <h2> {comments.length} Comments</h2>
            <div> {comments.map (
                comment => (<CommentCard key={comment.id}  comment={comment}/>)
            )}
            </div>
        </div>
    )
} 

export default CommenetsCard;