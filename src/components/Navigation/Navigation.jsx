import logo from './logo.png';
import './Navigation.css';
const Navigation = () => {
    const navItems = () => {
        const navData = ['Feed', 'Newspaper', 'Markets', 'Leaderboard', 'Rooms', 'Portfolio'];
        const navItems = navData.map((item) => {
            if(item === 'Markets') {
                return <div className="nav-item active">{item}</div>
            } else {
                return <div className="nav-item">{item}</div>
            }
        });
        return navItems;
    }
    return (
        <div className="nav pl-10">
            <div><img src={logo} className="site-logo"/></div>
            {navItems()}
            <input className="search" type="text" placeholder=' Search Vestr'/>
        </div>
    )
}

export default Navigation;