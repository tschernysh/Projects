import { NavLink } from "react-router-dom"
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <NavLink to={path}  className={s.dialog__user} activeClassName={s.active__dialog}>
            <img className={s.user__photo} src={props.photo} alt=""/>
            <div className="">{props.name}</div>
        </NavLink>
    )
}

export default DialogItem