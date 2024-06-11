import stockIcon from './StockIcon.png'
import './StockAction.css'

const StockAction = () => {
    return (
        <div className="stock-action">
            <div className="stock-logo"><img src={stockIcon}/></div>
            <div className="action-items">
                <div className="btn btn-transparent">Add to list</div>
                <div className="btn btn-transparent">Compare</div>
                <div className="btn btn-transparent">Alerts</div>
                <div className="btn btn-transparent">Replay</div>
            </div>
        </div>
    )
}

export default StockAction;