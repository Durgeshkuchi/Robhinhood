import './JoinStock.css'
import logo from '../StockAction/StockIcon.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Comment from './Comment'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const JoinStock = () => {
  return (
    <div className="join-stock">
      <div className="chat-nav">
        <div className="nav-item active">Room</div>
        <div className="nav-item">Mentions</div>
      </div>
      <div className="stock-chat-details">
        <div className="stock-details">
          <div className="stock-name">
            <div>Apple</div>
            <CheckCircleIcon className="green-check" />
          </div>
          <p>r/Apple</p>
          <div className="stock-members">
            <div>13.5 members</div>
            <div>1.4m active</div>
          </div>
          <div className="stock-subscribe-actions">
            <div className="btn btn-transparent">Joined</div>
            <div className="btn btn-transparent">Go&nbsp;to&nbsp;room</div>
          </div>
        </div>
        <div>
          <img src={logo} />
        </div>
      </div>
      <div className="post-section">
        <textarea
          className="post-text"
          placeholder="Write something in r/DOGE..."
        ></textarea>
        <div className="post-btn">Post</div>
      </div>
      <div className="chat-nav">
        <div>All time&nbsp;</div>
        <div>Most recent</div>
      </div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}
export default JoinStock
