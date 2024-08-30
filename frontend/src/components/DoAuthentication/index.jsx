import './style.scss'
import { Link } from 'react-router-dom'

function DoAuthentication() {
    return (
        <div className='p'>
            <p>You didn't  do <Link to={"/SingIn"}>authentication</Link>!</p>
        </div>
    );
}

export default DoAuthentication;