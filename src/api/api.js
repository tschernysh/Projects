import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '465375b2-bdba-492a-a3c1-8f388701a7f8' 
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return(
            instance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then(Response => {
                    return Response.data;
                })
        )
    },
    getUserProfile(urlUserId){
        return(
            instance
                .get(`profile/${urlUserId}`)
                .then(Response => {
                    return Response.data
                })
        )
    },
    userUnfollow(id){
        return(
            instance
                .delete(`follow/${id}`)
        )
    },
    userFollow(id){
        return(
            instance
                .post(`follow/${id}`)
        )
    }
}

export const authAPI = {
    me(){
        return(
            instance
                .get(`auth/me`)
        )
    }
}