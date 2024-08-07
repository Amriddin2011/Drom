import './style.scss';
import Drom from './../../../assets/imgs/logo.jpg';
import Logo from './../../../assets/imgs/logo2.jpg'

function Navbar() {
    return ( 
        <header>
            <div className="logo">
                <img src={Logo} alt="It is logo!" width={30}/>
                <a href="#">
                    <img src={Drom} alt="It is logo!" width={90} height={50}/>
                </a>
            </div>
            <div className="location">
                <a href="#"> Samarqand</a>
            </div>
            <div className="link"><a href='#'>Cars</a></div>
            <div className="link"><a href='#'>Special equipment</a></div>
            <div className="link"><a href='#'>Spare parts</a></div>
            <div className="link"><a href='#'>Rewiews</a></div>
            <div className="link"><a href='#'>Catalogue</a></div>
            <div className="link"><a href='#'>More⏑</a></div>
            <div className="button"><a href='#'>+Sell</a></div>
            <div className="registr"><a href="#">Sing in & Sing up</a></div>
        </header>
     );
}

export default Navbar;