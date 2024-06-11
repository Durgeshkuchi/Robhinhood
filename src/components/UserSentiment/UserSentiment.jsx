import './UserSentiment.css'
import './BarGraph'
import BarGraph from './BarGraph'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const UserSentiment = () => {
  return (
    <div className="user-sentiment">
      <div className="heading2">
        User Sentiment: 2.66 avg. <span className="theme-color">(bullish)</span>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="timeline">This week</div>
        <ExpandMoreIcon />
      </div>
      <div className="stats">
        <div className="bar-graph">
          <BarGraph />
        </div>
        <div className="user-thought">
          <p>what do you think?</p>
          <div
            className="btn btn-trasparent"
            style={{ display: 'flex', height: '35px' }}
          >
            <div>5 (very bullish&nbsp;)</div>
            <ExpandMoreIcon />
          </div>
          <div className="btn btn-black">Save</div>
        </div>
      </div>
      <div className="user-sentiment-stats">
        <div>
          <div className="stat-heading">Total votes</div>
          <div>111,113</div>
        </div>
        <div>
          <div className="stat-heading">Bullish</div>
          <div>111,113</div>
        </div>
        <div>
          <div className="stat-heading">Neutral</div>
          <div>111,113</div>
        </div>
        <div>
          <div className="stat-heading">Bearish</div>
          <div>111,113</div>
        </div>
      </div>
    </div>
  )
}

export default UserSentiment
