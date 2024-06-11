import React from 'react'
import './GraphTips.css' // Ensure you have appropriate styles defined in this file

const GraphTips = () => {
  const indicators = ['live', '1hr', '1d', '1w', '3m', '1y', 'all']

  const GraphItems = () => {
    return indicators.map((item) => (
      <div className="garphIndicator-item" key={item}>
        {item}
      </div>
    ))
  }

  return <div className="graph-Tips">{GraphItems()}</div>
}

export default GraphTips
