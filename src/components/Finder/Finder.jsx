import React from 'react'
import s from './Finder.module.css'
import UserFinder from './UserFinder/UserFinder'
import * as axios from 'axios'

class Finder extends React.Component{
    
    componentDidMount(){
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users/')
            .then(Response => {this.props.addUsers(Response.data.items)});
    }
    
    
    render() {   
        return(  
        <div className={s.users__block}>
                {this.props.users.map( u => <UserFinder  userName={u.name} 
                followed={u.followed} 
                subscribe={this.props.subscribeOnUser}
                id={u.id}
                photos={u.photos}
                city={u.city}
                age={u.age} /> )}
            </div>
        )
    }
}

export default Finder;