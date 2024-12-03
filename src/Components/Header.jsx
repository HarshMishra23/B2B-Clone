import NavBar from "./NavBar"
import "./style.css"

const Header = ()=>{
    return(
        <div className="header">
            <div>logo</div>
            <NavBar/>
            <div>button</div>
        </div>
    )
}

export default Header