import "./button.css"
function Button(props) {
    return (
        <div >
         <button className="Button" type={props.type} >{props.children}</button> 
        </div>
    )
}

  export default Button;