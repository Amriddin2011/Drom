import './style.scss';
import { useEffect, useState } from "react"
import { BASE_URL } from "../../../store"
import { toast } from 'react-toastify'


function SingUp() {
    const [form, setForm] = useState({
        username: "",
        email:"",
        password: "",
        re_password: "",
    })
    const [errors, setErrors] = useState({});

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
        let response = await fetch(`${BASE_URL}/auth/users/`, options)

        if(response.ok){
            let data = await response.json()
            console.log(data)

            toast.success("Account created successfully! SingIn now!", { position: "top-center", theme:"dark"})

            e.target.reset()
        }else{
            let errors = await response.json();
            setForm({});
            console.log(errors);
            setErrors(errors);
        }
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
                    <ul className="errors">
                        {Object.entries(errors).map(([key, value], index) => (
                            <li className="error" key={index}>
                                {value}
                            </li>
                        ))}
                    </ul>
                    <div className="username">
                        <input onChange={setInput} type="text" name='username' placeholder='Username' />
                    </div>
                    <div className="email">
                        <input onChange={setInput} type="email" name='email' placeholder='Email' />
                    </div>
                    <div className="password">
                        <input onChange={setInput} type="password" name='password' placeholder='Password' />
                    </div>
                    <div className="password">
                        <input onChange={setInput} type="password" name='re_password' placeholder='Password Copnfirm' />
                    </div>
                </div>
                <div className="button">
                    <div  className="SingUp">
                        <button type='submit'>Sing Up</button>
                    </div>
                </div>
            </form>
            <div className="muted-text">
                <p className='muted-text'>При входе вы принимаете <u>условия использования</u> сайта и соглашаетесь на обработку персональных данных согласно <u>политике конфиденциальности</u>.</p>
            </div>
        </div>
    );
}

export default SingUp;