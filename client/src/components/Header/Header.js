import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <header>
            <div className="logo-container">
                <img src="../../pictures/logoBigCropped.png" alt="logo" />
               
            </div>

            <div className="search-form-container">
                
                <form id="search-form">
                    <input type="text" id="search" name="search" />
                        <input className="button search-button" type="button" value="Search" />
            </form>
                        <button className="button shopping-cart">
                        <Link className="shopping-cart"  to="/contacts"><i className="fas fa-shopping-cart"></i></Link>
                            
                        </button>
        </div>

                    <div className="nav-container">
                        <nav className="main-nav">
                            <ul>
                                <Link className="main-nav-button" to="/" className='main-nav-buttons'>За нас</Link>
                                <Link to="/galery" className='main-nav-buttons'>Галерия</Link>
                                {/* <Link to="/orders" className='main-nav-buttons'>Поръчки</Link> */}
                                <Link to="/contacts" className='main-nav-buttons'>Поръчки</Link>
                            </ul>
                        </nav>
                    </div>


        </header>
    )
};

export default Header;