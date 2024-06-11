import './SummarySection.css'

const SummarySection = () => {
    const navItems = ["Summary", "Analysis", "News", "vestr+", "Options", "Holders", "calendar", "Options", "Holders", "news"];
    const navItemsList = navItems.map((item) => {
        if(item =="Summary"){
            return <div className="nav-item active">{item}</div>
        }
        else {
            return <div className="nav-item">{item}</div>
        }
});
    return (
        <div className="summary-section"> 
            <div className="custom-nav">
                {navItemsList}
            </div>
            <div>
                <div className="heading1">Your Positions</div>
                <div className="stats-summary">
                    <div>
                        <div className="stat-heading-dark">Your equity</div>
                        <div>28.80 <span>shares</span></div>
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
                        <div>60%</div>
                    </div>
                    <div>
                        <div className="stat-heading-dark">Today's return</div>
                        <div>$97.85 <span>(+2.88%)</span></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="heading1">Simulated Portfolio</div>
                <div className="stats-summary">
                    <div>
                        <div className="stat-heading-dark">Your equity</div>
                        <div>28.80 <span>shares</span></div>
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
                        <div>60%</div>
                    </div>
                    <div>
                        <div className="stat-heading-dark">Today's return</div>
                        <div>$97.85 <span>(+2.88%)</span></div>
                    </div>
                </div>
            </div>
            <div className='graph-section'>

            </div>

        </div>
    )
}

export default SummarySection;