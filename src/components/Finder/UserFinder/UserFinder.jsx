import React from 'react'

const UserFinder = (props) => {

    let onClickSubscribe = () => {
        props.subscribe(props.id , props.isSubscribed)
    }

    return (
        <div className="">
            <div className="">{props.userName}</div>
            <button onClick={onClickSubscribe} >{props.isSubscribed ? 'Unsubscribe' : 'Subscribe'}</button>
        </div>
    )
} 

export default UserFinder   