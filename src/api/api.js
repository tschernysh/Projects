import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    heders: {
        'API-KEY' : 'ef4b1d77-f98c-4ca3-ac12-4d8bcae87ca0' 
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
