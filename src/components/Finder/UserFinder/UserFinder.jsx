import React from 'react'
import s from './UserFinder.module.css'
import defaultPhoto from '../../../assets/images/defaultProfileImage.png'
import { NavLink } from 'react-router-dom'

const UserFinder = (props) => {


    return (
        <div className={s.user__card}>
            <NavLink to={`/profile/${props.id}`} className={s.user__img}>
                <img src={props.photos.small != null ? props.photos.small : defaultPhoto} className={s.profile__img} />
            </NavLink>
            <div className={s.user__info}>
                <div className={s.user__name}>{props.userName}</div>
                <div className={s.user__info_bot}>
                    <div className={s.user__age}>
                        age
                        <div className="">{'props.age'}</div>
                    </div>
                    <div className={s.user__location}>
                        city
                        <div className="">{'props.city'}</div>
                    </div>

                </div>
            </div>

            {props.followed ?
                <button disabled={props.subscriptionFetch.some(id => id === props.id)} 
                        className={s.user__subscribed} 
                        onClick={() => {
                            props.userFinderUnsubscribe(props.id)
                }}>unfollow</button> :
                <button disabled={props.subscriptionFetch.some(id => id === props.id)} 
                        className={s.user__unsubscribed} 
                        onClick={() => {
                            props.userFinderSubscribe(props.id)
                }}>follow</button>}

        </div>
    )
}

export default UserFinder   