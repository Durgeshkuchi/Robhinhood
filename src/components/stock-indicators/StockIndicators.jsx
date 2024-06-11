import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './StockIndicators.css';
const StockIndicators = () => {
    const indicators = ['COMP', 'DJIA', 'SPX', 'CL.1', 'GCOO', 'BTC', 'VIX', 'RUT', 'UKX'];
    const indicatorsData = {
        COMP: 2.33,
        DJIA: 11.33,
        SPX: 1.33,
        'CL.1': 11.33,
        GCOO: 11.33,
        BTC: 6.33,
        VIX: 6.33,
        RUT: 6.33,
        UKX: 6.33
    };

    const getKeyIndicatorsFieldData = () => {
        const fields = indicators.map((indicator) => {
            return <div className="indicator">
                {indicator}&nbsp;<span className="theme-color">{indicatorsData[indicator]}</span>
            </div>
        });
        return fields;
    };

    return (
        <div className="key-indicators pl-10">
            <div className="dropdown">
                <div>Key&nbsp;Indicators</div>
                <ExpandMoreIcon/>
            </div>
            <div className="dropdown">
                <div>1h</div>
                <ExpandMoreIcon/>
            </div>
            {getKeyIndicatorsFieldData()}
        </div>
    );
}

export default StockIndicators;