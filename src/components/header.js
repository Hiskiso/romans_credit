import "./header.css"

function Header(props) {


    if (props.children !== undefined) {
        return (
            <div className="header">
                <div className="headerLink">  {props.children}</div>

            </div>
        )
    }
    else {
        return (
            <div className="header">

                <div className="headerLink">
                    <div className="profilePicture">
                        <a href="/profile">R</a>
                    </div>

                </div>
                <div className="headerLink">
                    <a className={window.location.pathname == "/" ? "link active" : "link"} href="/">Главная</a>
                </div>
                <div className="headerLink">
                    <a className={window.location.pathname == "/history" ? "link active" : "link"} href="/history">История</a>
                </div>
            </div>
        )

    }
}

export default Header;