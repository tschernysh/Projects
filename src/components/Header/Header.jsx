import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return(
        <header className= {s.app__header}>
            <img src='https://c7.hotpng.com/preview/182/85/212/nasa-insignia-independent-verification-and-validation-facility-logo-clip-art-nasa-thumbnail.jpg'/>

            <div className="">
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
            
        </header>
    )
};

export default Header;