import { useState, useEffect } from "react"
import View from "../components/view"
import Card from "../components/card"
import Button from "../components/button"
import Input from "../components/input"
import "./login.css"

function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    function emmitLogin(e) {
        e.preventDefault()
        alert("Жду блять бэк")
        console.log(login, password);
        if (login == "admin") {
            
            localStorage.setItem("auth", "SOME TOKEN")
            window.location.reload()
        }
    }

    return (
        <View >
            <div className="loginFrame">

                <Card >
                    <div className="loginPlaceholder">
                        Вход
                    </div>

                    <form className="loginForm" onSubmit={emmitLogin}>
                        <Input type="login" onChange={(e) => { setLogin(e.target.value) }} name="login" value={login} placeholder="Логин"></Input>
                        <Input type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" value={password} placeholder="Пароль"></Input>
                        <Button type="submit">
                            Вход
                        </Button>

                    </form>

                    <a href="/registration" style={{ justifyContent: "center", display: "flex" }}>Регистрация</a>
                </Card>

            </div>

        </View>

    )

}

export default Login;