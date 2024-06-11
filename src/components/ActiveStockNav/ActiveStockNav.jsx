import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './ActiveStockNav.css'

const ActiveStockNav = () => {
    return (
        <div className="active-stock-nav pl-10">
            <div className="back-to-markets"><ArrowBackIcon /> <div>Markets</div></div>
            <div className="stock-heading">$AAPL</div>
        </div>
    )
};

export default ActiveStockNav;