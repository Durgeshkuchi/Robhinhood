import user from './user.png'
const Comment = ({ comment }) => {
  return (
    <div className="comment-section">
        <div className="comment-heading">
            <div className="comment-user-photo"><img src={user}/></div>
            <div className="user-details">
                <div className="user-name">John Hannon</div>
                <div className="user-id">@johnhannon . <span>40m</span></div>
            </div>
        </div>
        <p className="comment">Tim Cook has been nothing short of outstanding. In my mind, he is the greatest founder-successor story in the Histpry of the SIlicon valley</p>
        <div className="comment-more">
            <div>View 532 comments</div>
            <div className="comment-votes">45K</div>
        </div>
    </div>
  );
}

export default Comment;