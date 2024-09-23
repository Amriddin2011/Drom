import './style.scss';
import Drom from './../../../assets/imgs/logo.jpg';
import Logo from './../../../assets/imgs/logo2.jpg'
import { Link } from 'react-router-dom'
import {context} from '../../../store'
import { useContext } from 'react';
import { fetchLogout } from '../../../store/apiCalls'


function Navbar() {
    const state = useContext(context)

    function logout() {
        fetchLogout()
        state.dispatch({ type: 'LOGOUT' })
        toast.success('Logged out successfully', { theme: "dark" })
    }

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="It is logo!" width={30} />
                <Link to={"/"}>
                    <img src={Drom} alt="It is logo!" width={90} height={50} />
                </Link>
            </div>
            <div className="location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <Link to={"#"}> Samarqand</Link>
            </div>
            <div className="link"><Link to={"/sell-car"}>Cars</Link></div>
            <div className="link"><Link to={"#"}>Special equipment</Link></div>
            <div className="link"><Link to={"#"}>Spare parts</Link></div>
            <div className="link"><Link to={"#"}>Rewiews</Link></div>
            <div className="link"><Link to={"#"}>Catalogue</Link></div>
            <div className="link"><Link to={"#"}>More⏑</Link></div>
            <div className="button"><Link to={"#"}>+Sell</Link></div>
            {
                state.currentUser?.username ?
                    <div className="dropdown">
                            <button className="dropbtn nav-box">
                                <div className="registr"><Link to={"/profile-page"} className='username'>{state.currentUser.username}</Link></div>


                                <div className="drp-content">
                                    <Link to={'#'} onClick={logout}>Logout</Link>
                                </div>
                            </button>
                    </div>
                    :
                    <div className="registr"><Link to={"/SingIn"}>Sing in & Sing up</Link></div>
            }
        </header>
    );
}

export default Navbar;