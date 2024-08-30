import "./style.scss"
import { context } from '../../store'
import { useContext } from 'react';
import { Link } from 'react-router-dom'

function ProfilePage() {
    const state = useContext(context)

    return (
        <div className="main">
            <h1>Profile Page</h1>
            {
                state.currentUser?.username ?
                      <div className="info">
                        <div className="username">
                            <h2>
                                Username : {state.currentUser.username}
                            </h2>
                        </div>
                        <div className="email">
                            <h2>Email : {state.currentUser.email}</h2>
                        </div>
                        <div className="update-prf">
                            <Link to="/update-profile" className="update-btn">Update Profile</Link>
                        </div>
                    </div>      
                :
                    <p>dfwdw</p>
            }
            
        </div>
    );
}

export default ProfilePage;