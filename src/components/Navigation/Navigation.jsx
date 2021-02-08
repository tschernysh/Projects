import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={s.app__nav}>
        <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='profile'>Profile</NavLink>
        <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='messages'>Messages</NavLink>
        <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='finder'>Finder</NavLink>
        <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='news'>News</NavLink>
        <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='music'>Music</NavLink>
        <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='settings'>Settings</NavLink>
    </nav>
  )
};

export default Navigation;