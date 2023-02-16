import "./input.css"
function Input(props) {

    return(
        <div className="loginInputFrame">
            <input className="loginInput" type={props.type} onChange={props.onChange} name={props.name} value={props.value} placeholder={props.placeholder}/>
        </div>
    )

}


export default Input;