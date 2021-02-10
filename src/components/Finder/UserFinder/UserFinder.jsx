import React from 'react'
import s from './UserFinder.module.css'
import defaultPhoto from '../../../assets/images/defaultProfileImage.png'

const UserFinder = (props) => {

    let onClickSubscribe = () => {
        props.subscribe(props.id , props.isSubscribed)
    }

    return (
        <div className={s.user__card}>
            <div className={s.user__img}>
                <img src={ props.photos.small != null ? props.photos.small : defaultPhoto} className={s.profile__img} />
            </div>
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

            <button onClick={onClickSubscribe} className={props.followed ? s.user__subscribed : s.user__unsubscribed} >{props.followed ? 'Unsubscribe' : 'Subscribe'}</button>
        </div>
    )
} 

export default UserFinder   