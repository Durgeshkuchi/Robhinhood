import React from 'react'
import './StockCard.css'

const StockCard = ({ title, price, percentageChange, points, strokeColor }) => {
  return (
    <div className="stock-card">
      <div className="stock-card__title">{title}</div>
      <div className="stock-card__graph">
        <svg width="100%" height="50">
          <polyline
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            points={points}
          />
        </svg>
      </div>
      <div className="stock-card__price">${price.toFixed(2)}</div>
      <div
        className={`stock-card__percentage ${
          percentageChange >= 0 ? 'positive' : 'negative'
        }`}
      >
        {percentageChange.toFixed(2)}%
      </div>
    </div>
  )
}

export default StockCard
