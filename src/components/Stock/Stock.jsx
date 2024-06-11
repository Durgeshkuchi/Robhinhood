import './Stock.css'

const Stock = () => {
    return (
        <div className="stock">
            <div className="heading">Apple</div>
            <div className="heading">$149.15</div>
            <div className="bold-secondary "><span className="theme-color">+12.34 (5.23%)</span> past year</div>
            <div className="stock-action-btns">
                <div className="btn btn-black">Buy</div>
                <div className="btn btn-black">Sell</div>
            </div>
        </div>
    )
}

export default Stock;