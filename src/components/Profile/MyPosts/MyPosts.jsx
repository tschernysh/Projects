import Post from "./Post/Post"
import s from './MyPosts.module.css'
import React from 'react'

const MyPosts = (props) => {
   
    let postElements = props.posts.map(p => <Post message={p.message} id={p.id} like={p.like} />)

    
    function addPost(){
        props.addPost()
        debugger

    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }


    return (
        <div className={s.posts__container}>
            <div className={s.profile__posts}>
                <p>Feed</p>
                <div className={s.profile__post}>
                    <textarea onChange={ onPostChange } 
                              value={props.newPostText} placeholder='Share something ^_^'></textarea>
                    <br />
                    <button onClick={ addPost } >Share</button>
                </div>
                <div className={s.post__block}>
                    
                    {postElements}
                    
                </div>
            </div>
        </div>
    )
}
export default MyPosts