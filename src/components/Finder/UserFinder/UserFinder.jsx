import React from 'react'
import s from './UserFinder.module.css'
import defaultPhoto from '../../../assets/images/defaultProfileImage.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../../api/api'

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
                <button className={s.user__subscribed} onClick={() => {
                    usersAPI.userUnfollow(props.id)
                        .then(Response => {
                            if (Response.data.resultCode === 0) {
                                props.toggleSubscribe(props.id, props.isSubscribed)
                            }
                        })
                }}>unfollow</button> :
                <button className={s.user__unsubscribed} onClick={() => {
                    usersAPI.userFollow(props.id)
                        .then(Response => {
                            if (Response.data.resultCode === 0) {

                                props.toggleSubscribe(props.id, props.isSubscribed)
                            }
                        })
                }}>follow</button>}

        </div>
    )
}

export default UserFinder   