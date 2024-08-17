import './update.scss'
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { context } from '../../store'
import { useContext } from 'react';
import { Link } from 'react-router-dom'


function updateProfile() {
    const state = useContext(context)

    const [form, setForm] = useState({
        name: "",
        year: "",
        bio: "",
    })

    function setInput(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return (
        <div className="main">
            {
                state.currentUser?.username ?
                    <div className="inputs">
                        <div className="nameSurname nameAndSurname">
                            <label htmlFor="nameAndSurname">Name Surname</label>
                            <input onChange={setInput} type="text" name='name' />
                        </div>
                        <div className="year yearOld">
                            <label htmlFor="yearOld">Year</label>
                            <input onChange={setInput} type="number" name='year' />
                        </div>
                        <div className="bio myBio">
                            <label htmlFor="myBio">Bio</label>
                            <input onChange={setInput} type="text" name='bio' />
                        </div>
                        <div className="continiue">
                            <button type='submit'>Continiue</button>
                        </div>
                    </div>
                    :
                    <div>
                        <p>You didn't  do <Link to={"/SingIn"}>authentication</Link>!</p>
                    </div>
            }
        </div>
    );
}

export default updateProfile;