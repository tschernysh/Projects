import Post from "./Post/Post"
import s from './MyPosts.module.css'


const MyPosts = () => {
    return (
        <div className={s.posts__container}>
            <div className={s.profile__posts}>
                <p>Feed</p>
                <div className={s.profile__post}>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Share something ^_^'></textarea>
                    <br />
                    <button>Share</button>
                </div>
                <div className={s.post__block}>
                    <Post message='played doto today' like='54' />
                    <Post message='versuta sobaka' like='52' />
                </div>
            </div>
        </div>
    )
}
export default MyPosts