import './style.scss';
import { useEffect, useState, useContext } from "react"
import { BASE_URL, context, getMe } from "../../../store"
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


function SingIn(props) {
    const state = useContext(context)

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function setInput(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    async function submit(e) {
        e.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }
        let response = await fetch(`${BASE_URL}/api/token/create/`, options)
        let data = await response.json()
        console.log(data)

        localStorage.setItem("auth-token", JSON.stringify(data))

        let user_response = await fetch(BASE_URL + "/auth/users/me/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${data.access}`
            }
        })
        
        let user_data = await getMe()
        console.log(user_data)

        toast.success("Logged in successfully!", { position: "top-center", theme:"dark"})
        e.target.reset()
    }

    return (
        <div className="main">
            <div className="linkAndText">
                <div className="div">
                    <Link to={"/"}>Drom ›</Link>
                    <p className='p-muted-text'>Sing in or Sing up</p>
                </div>
            </div>
            <form className='SingInForm' onSubmit={submit}>
                <div className="links">
                    <Link className='SingIn' to={"/SingIn"}>Sing In</Link>
                    <Link className='SingUp' to={"/SingUp"}>Sing Up</Link>
                </div>
                <div className="inputs">
                    <div className="username">
                        <input onChange={setInput} type="text" name='username' placeholder='Username' />
                    </div>
                    <div className="password">
                        <input onChange={setInput} type="password" name='password' placeholder='Password' />
                    </div>
                </div>
                <div className="buttons">
                    <div  className="SingIn">
                        <button type='submit'>Sing In</button>
                    </div>
                    <div className="SingWithTelegram">
                        <button>
                            <img src="https://my.drom.ru/resources/img/svg/ic-socialShareTelegram-48.svg" alt="It is image of Telegram" width={16} />
                            Sing with Telegram
                        </button>
                    </div>
                </div>
                <div className="remind-password">
                    <Link to={"#"}>remind password</Link>
                </div>
            </form>
            <div className="muted-text">
                <p className='muted-text'>При входе вы принимаете <u>условия использования</u> сайта и соглашаетесь на обработку персональных данных согласно <u>политике конфиденциальности</u>.</p>
            </div>
        </div>
    );
}

export default SingIn;