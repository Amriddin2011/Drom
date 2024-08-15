import './style.scss';
import { useEffect, useState } from "react"

function SingIn(props) {
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
        const BASE_URL = "http://127.0.0.1:8000"

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
        alert("Logged in successfully!")
        e.target.reset()
    }

    return (
        <div className="main">
            <div className="linkAndText">
                <div className="div">
                    <a href="/">Drom ›</a>
                    <p className='p-muted-text'>Sing in or Sing up</p>
                </div>
            </div>
            <form onSubmit={submit}>
                <div className="links">
                    <a className='SingIn' href="/SingIn">Sing In</a>
                    <a className='SingUp' href="/SingUp">Sing Up</a>
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
                    <a href="#">remind password</a>
                </div>
            </form>
            <div className="muted-text">
                <p className='muted-text'>При входе вы принимаете <u>условия использования</u> сайта и соглашаетесь на обработку персональных данных согласно <u>политике конфиденциальности</u>.</p>
            </div>
        </div>
    );
}

export default SingIn;