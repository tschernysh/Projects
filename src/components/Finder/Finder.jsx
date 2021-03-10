import React from 'react'
import s from './Finder.module.css'
import UserFinder from './UserFinder/UserFinder'
import Preloader from '../Common/Preloader/Preloader';

class Finder extends React.Component {

    componentDidMount() {

        this.props.getFinderUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleFetching(true)
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => { 
        //         this.props.addUsers(data.items);
        //         // this.props.updateUsersCount(Response.data.totalCount)
        //         this.props.toggleFetching(false);
        //     } 
        // );
    }
    
    changeCurrentPage = (pageNumber) => {

        this.props.getFinderUsers(pageNumber, this.props.pageSize)

        // this.props.toggleFetching(true)
        // this.props.changePage(pageNumber)
        //     usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.addUsers(data.items)
        //         this.props.toggleFetching(false)
        //     });
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        return (
            <div>

                <div className="">
                    {pages.map(p => <span onClick={ () => {this.changeCurrentPage(p)}} className={this.props.currentPage == p && s.active__page }>{p}</span>)}
                </div>

                {this.props.isFetching 
                ? <Preloader /> 
                : <div className={s.users__block}>
                    {this.props.users.map(u => <UserFinder userName={u.name}
                        followed={u.followed}
                        id={u.id}
                        photos={u.photos}
                        city={u.city}
                        age={u.age}
                        subscriptionFetch={this.props.subscriptionFetch}
                        userFinderSubscribe={this.props.userFinderSubscribe}
                        userFinderUnsubscribe={this.props.userFinderUnsubscribe} />)}
                </div>
                }

                
            </div>
        )
    }
}

export default Finder;