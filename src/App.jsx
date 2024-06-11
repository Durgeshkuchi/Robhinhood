import './App.css'
import StockIndicators from './components/stock-indicators/StockIndicators'
import Navigation from './components/Navigation/Navigation'
import ActiveStockNav from './components/ActiveStockNav/ActiveStockNav'
import Stock from './components/Stock/Stock'
import StockAction from './components/StockAction/StockAction'
import UserSentiment from './components/UserSentiment/UserSentiment'
import SummarySection from './components/SummarySection/SummarySection'
import JoinStock from './components/Joinstock/JoinStock'
import Graph from './components/Graph/Graph'
import GraphTips from './components/GraphTips/GraphTips'

function App() {
  return (
    <div className="main-container">
      <StockIndicators />
      <Navigation />
      <ActiveStockNav />
      <div className="main-section">
        <div className="data-section pl-10">
          <Stock />
          <StockAction />
          <Graph />
          <SummarySection />
        </div>
        <div className="user-section">
          <UserSentiment />
          <JoinStock />
        </div>
      </div>
    </div>
  )
}

export default App
