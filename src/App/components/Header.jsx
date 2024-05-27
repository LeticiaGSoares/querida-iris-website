import {Link} from 'react-router-dom'
import {AutoLayout} from '../styles/Main'
import {NavBar, NavLink, NavElement} from '../styles/Header'

const Header = () => {
    
    return(
        <NavBar>
            <AutoLayout>
                <Link style={{textDecoration: 'none'}}  to={"/login"}>
                <NavLink>LOGIN</NavLink>
                </Link>
            </AutoLayout>
            

            <AutoLayout>
                <Link style={{textDecoration: 'none'}} to={"/"}>
                    <NavLink>INÍCIO</NavLink>
                    </Link>
                <Link style={{textDecoration: 'none'}} to={"/bastidores"}>
                    <NavLink>BASTIDORES</NavLink>
                    </Link>
                {/* <Link style={{textDecoration: 'none'}} to={"/galeria"}>
                    <NavLink>GALERIA</NavLink>
                    </Link> */}
                <Link style={{textDecoration: 'none'}} to={"/autora"}>
                    <NavLink>AUTORA</NavLink>
                    </Link>
            </AutoLayout>
        </ NavBar>
    )
}

export default Header