import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post__box}>
            <div className={s.post__top}>
                <img src="https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg" alt="" />
                <div className={s.post__side}>
                    <div className={s.post__owner}>Roman tschernysh</div>
                    <div className={s.post__time}>11/30/2020 17:50</div>
                </div>
            </div>
            <div className={s.post__text}>{props.message}</div>
            <hr className={s.post__hr} />
            <div className={s.post__like}>{props.like} Liked this</div>
        </div>
    )
};

export default Post