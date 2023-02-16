import "./card.css"

function Card(props) {
    return (
        <>
            <div className={props.Stretch? "card stretch" :"card"}>
                {props.children}
            </div>
        </>
    )
}

  export default Card;