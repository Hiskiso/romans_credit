import View from "../components/view";
import Card from "../components/card";
import Input from "../components/input";
import Button from "../components/button";
import "./registration.css"
import { useState, useEffect } from "react"

function RegistrationPage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [sencondName, setSecondtName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dog, setDog] = useState("");
    const [male, setMale] = useState("");

    function emmitRegistration(e) {
        e.preventDefault()
        console.log(firstName, lastName, email, phone, dog, male);
       alert("Жду блять бэк")
    }

    return (
        <View>
            <div className="registrationFrame">
                <Card>
                    <div className="registrationPlaceholder">
                        Регистрация
                    </div>
                    <form onSubmit={emmitRegistration} className="registrationForm">
                        <div className="registrationItem">
                            <Input type="" onChange={(e) => { setFirstName(e.target.value) }} name="firstName" value={firstName} placeholder="Имя" />
                            <div className="registrationDescription">
                                Многа букав чтобы инпут ахуел сжался и текст тоже ахуел и ушел на следующую строку
                            </div>
                        </div>
                        <div className="registrationItem">
                            <Input type="" onChange={(e) => { setLastName(e.target.value) }}  name="lastName" value={lastName} placeholder="Фамилия" />
                            <div className="registrationDescription">
                            Описание
                            </div>
                        </div>
                        <div className="registrationItem">
                            <Input type="" onChange={(e) => { setSecondtName(e.target.value) }} name="sencondName" value={sencondName} placeholder="Отчество" />
                            <div className="registrationDescription">
                                Имя корочее
                            </div>
                        </div>
                        <div className="registrationItem">
                            <Input type="email" onChange={(e) => { setEmail(e.target.value) }}  name="email" value={email} placeholder="Email" />
                            <div className="registrationDescription">
                                Имя корочее
                            </div>
                        </div>
                        <div className="registrationItem">
                            <Input type="phone"   onChange={(e) => { setPhone(e.target.value) }}  name="phone" value={phone} placeholder="Телефон" />
                            <div className="registrationDescription">
                                Имя корочее
                            </div>
                        </div>
                        <div className="registrationItem">
                            <Input type="" onChange={(e) => { setDog(e.target.value) }}  name="dog" value={dog} placeholder="имя собаки" />
                            <div className="registrationDescription">
                                Имя корочее
                            </div>
                        </div>
                        <div className="registrationItem">
                            <Input type="" onChange={(e) => { setMale(e.target.value) }} name="male" value={male} placeholder="пол" />
                            <div className="registrationDescription">
                                Имя корочее
                            </div>
                        </div>
                        <Button type="submit">Регистрация☻</Button>
                    </form>
                </Card>
            </div>

        </View>

    )
}

export default RegistrationPage;