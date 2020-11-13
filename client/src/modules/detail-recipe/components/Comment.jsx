import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

function Comment({ author, tag, profile, content, numberLike, timeComment }) {
  return (
    <div className="Comment">
      <div className="author-space">
        <h5>{author}</h5>
        <div className="tag">{tag}</div>
      </div>
      <p className="profile">{profile}</p>
      <p>{content}</p>
      <div className="number-comment">
        <FavoriteBorderIcon />
        <p>{numberLike} Likes</p>
        <p>{timeComment} days ago</p>
        <div style={{ display: 'flex' }}>
          <p>Reply</p>
          <ChatBubbleOutlineIcon />
        </div>
      </div>
      <p>____________View replies</p>
    </div>
  )
}

export default Comment
