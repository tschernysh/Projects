import React from 'react'
import s from './Finder.module.css'
import UserFinder from './UserFinder/UserFinder'


const Finder = (props) => {
    
    let usersElements = props.users.map( u => <UserFinder userName={u.userName} 
                                                          isSubscribed={u.isSubscribed} 
                                                          subscribe={props.subscribeOnUser}
                                                          id={u.id} /> )

    return (
        <div className="">
            {usersElements}
        </div>
    )
}

export default Finder;