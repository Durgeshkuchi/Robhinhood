import StockCard from './StockCard'
import './SummarySection.css'

const SummarySection = () => {
  const navItems = [
    'Summary',
    'Statistics',
    'News',
    'Financials',
    'calendar',
    'Public',
    'Holders',
    'Analysis',
    'Research',
    'vestr+',
  ]
  const navItemsList = navItems.map((item) => {
    if (item == 'Summary') {
      return <div className="nav-item active">{item}</div>
    } else {
      return <div className="nav-item">{item}</div>
    }
  })
  return (
    <div className="summary-section">
      <div className="custom-nav">{navItemsList}</div>
      <div>
        <div className="heading1">Your Positions</div>
        <div className="stats-summary">
          <div>
            <div className="stat-heading-dark">Your equity</div>
            <div>
              28.80 <span>shares</span>
            </div>
          </div>
          <div>
            <div className="stat-heading-dark">Value</div>
            <div>$4892.83</div>
          </div>
          <div>
            <div className="stat-heading-dark">Average buy price</div>
            <div>%98.77</div>
          </div>
          <div>
            <div className="stat-heading-dark">Portfolio diversity</div>
            <div>50%</div>
          </div>
          <div>
            <div className="stat-heading-dark">Today's return</div>
            <div>
              $97.85 <span className="theme-color">(+2.88%)</span>
            </div>
          </div>
          <div>
            <div className="stat-heading-dark">Total return</div>
            <div>
              $1369.99 <span className="theme-color">(+28.77%)</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="heading1">Simulated Portfolio</div>
        <div className="stats-summary">
          <div>
            <div className="stat-heading-dark">Your equity</div>
            <div>
              28.80 <span>shares</span>
            </div>
          </div>
          <div>
            <div className="stat-heading-dark">Value</div>
            <div>$4892.83</div>
          </div>
          <div>
            <div className="stat-heading-dark">Average buy price</div>
            <div>%98.77</div>
          </div>
          <div>
            <div className="stat-heading-dark">Portfolio diversity</div>
            <div>50%</div>
          </div>
          <div>
            <div className="stat-heading-dark">Today's return</div>
            <div>
              $97.85 <span className="theme-color">(+2.88%)</span>
            </div>
          </div>
          <div>
            <div className="stat-heading-dark">Total return</div>
            <div>
              $1369.99 <span className="theme-color">(+28.77%)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-section">
        <StockCard
          title="Google"
          price={145.1}
          percentageChange={16.78}
          points="0,40 10,30 20,35 30,20 40,25 50,15 60,30 70,20 80,10 90,20 100,5"
          strokeColor="#00C853"
        />
        <StockCard
          title="Meta"
          price={100.78}
          percentageChange={16.78}
          points="0,10 10,20 20,15 30,30 40,25 50,35 60,20 70,30 80,40 90,30 100,45"
          strokeColor="#F57C00"
        />
        <StockCard
          title="Amazon"
          price={65.19}
          percentageChange={16.78}
          points="0,40 10,30 20,35 30,20 40,25 50,15 60,30 70,20 80,10 90,20 100,5"
          strokeColor="#00C853"
        />
        <StockCard
          title="Berkshire Hathaway"
          price={140.92}
          percentageChange={16.78}
          points="0,40 10,30 20,35 30,20 40,25 50,15 60,30 70,20 80,10 90,20 100,5"
          strokeColor="#00C853"
        />
        <StockCard
          title="Microsoft"
          price={400.13}
          percentageChange={16.78}
          points="0,10 10,20 20,15 30,30 40,25 50,35 60,20 70,30 80,40 90,30 100,45"
          strokeColor="#F57C00"
        />
        <StockCard
          title="Apple"
          price={145.1}
          percentageChange={16.78}
          points="0,40 10,30 20,35 30,20 40,25 50,15 60,30 70,20 80,10 90,20 100,5"
          strokeColor="#00C853"
        />
        <StockCard
          title="TSMC"
          price={400.13}
          percentageChange={16.78}
          points="0,10 10,20 20,15 30,30 40,25 50,35 60,20 70,30 80,40 90,30 100,45"
          strokeColor="#F57C00"
        />
        <StockCard
          title="Amazon"
          price={145.1}
          percentageChange={16.78}
          points="0,40 10,30 20,35 30,20 40,25 50,15 60,30 70,20 80,10 90,20 100,5"
          strokeColor="#00C853"
        />
      </div>
    </div>
  )
}

export default SummarySection
